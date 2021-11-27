import { Grid, Input, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { deleteItem, openEditMode, updateItem } from "../../store/actions";
import { StoreContext, ToDoInterface } from "../../store/provider";

const Title: React.FC<{ item: ToDoInterface }> = ({ item }) => {

    const { dispatch } = useContext(StoreContext);
    const [value, setValue] = useState('');

    const { newItem, inEdit, description, id, completed } = item;

    useEffect(() => {
        if (newItem) {
            setValue('');
        }
    }, [newItem]);

    const updateItemData = (id: string, item: ToDoInterface): void => {

        fetch(`/${id}`, { method: 'put', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(item) })
            .then(response => response.json())
            .then(response => dispatch(updateItem(response)))
            .catch(e => {
                const error = new Error(`Server communication error.\nDetails:${e}`);
                alert(error);
            })
    }

    const deleteItemData = (id: string): void => {
        fetch(`/${id}`, { method: 'delete' })
            .then(() => dispatch(deleteItem(id)))
            .catch(e => {
                const error = new Error(`Server communication error.\nDetails:${e}`);
                alert(error);
            })
    }

    const checkIfValueEmpty = (): void => {

        if (value === '') {

            deleteItemData(id);
        }
        else {
            updateItemData(id, { ...item, description: value });
        }
    }

    const checkIfEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            checkIfValueEmpty()
        }
    };

    const onLostFocus = () => {
        checkIfValueEmpty()
    };

    const changeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    const startEdit = (isCompleted: boolean) => {
        if (!isCompleted) {
            setValue(description || '');
            dispatch(openEditMode(id));
        }
    };

    const toDoTitleStyle = completed
        ? {
            textDecoration: 'line-through',
            marginTop: '6px',
            color: 'grey'
        }
        : { marginTop: '6px' }

    return (
        <Grid item xs={10} onDoubleClick={() => startEdit(completed)}>
            {inEdit ?
                <Input
                    placeholder="Tell me what you do"
                    value={value}
                    autoFocus
                    sx={{ width: '100%' }}
                    onBlur={onLostFocus}
                    onKeyPress={(e) => checkIfEnter(e)}
                    onChange={(e) => changeValue(e)}
                />
                : <Typography
                    sx={toDoTitleStyle}
                    align='left'
                    noWrap>
                    {description}
                </Typography>
            }

        </Grid>
    )
};

export default Title;