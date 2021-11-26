import { Grid, Input, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { openEditMode, updateItem } from "../../store/actions";
import { StoreContext, ToDoInterface } from "../../store/provider";

const Title: React.FC<{  item : ToDoInterface }> = ({  item }) => {

    const { dispatch } = useContext(StoreContext);
    const [value, setValue] = useState('');

    const {newItem, inEdit, description, id, completed} = item;

    useEffect(() => {
        if (newItem) {
            setValue('');
        }
    }, [newItem])
    const checkIfEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(updateItem({ ...item, description: value, id: id }));
        }
    }
    const onLostFocus = () => {
        dispatch(updateItem({ ...item, description: value, id: id }));
    }
    const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const startEdit = (isCompleted: boolean) => {
        if (!isCompleted) {
            setValue(description || '');
            dispatch(openEditMode(id));
        }
    };

    const completedTitleStyle = {
        textDecoration : 'line-through',
        marginTop: '6px',
        color : 'grey'
    }
    return (
        <Grid item xs={10} onDoubleClick={() => startEdit(completed)}>
            {inEdit ?
                <Input
                    placeholder="Tell me what you do"
                    value={value}
                    autoFocus
                    style={{ width: '100%' }}
                    onBlur={onLostFocus}
                    onKeyPress={(e) => checkIfEnter(e)}
                    onChange={(e) => changeValue(e)}
                />
                : <Typography style={completed ? completedTitleStyle : { marginTop: '6px' }} align='left' noWrap>{description}</Typography>
            }

        </Grid>
    )
};

export default Title