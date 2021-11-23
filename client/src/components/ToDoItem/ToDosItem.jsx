import { useContext, useEffect, useState } from 'react';
import { changeCompleted, deleteItem, hideHover, openEditMode, showHover, updateItem } from '../../store/actions';
import { StoreContext } from '../../store/provider';
import Grid from '@mui/material/Grid';
import DeleteButton from './DeleteButton';
import { Card, CardContent, Checkbox, Input, Typography } from '@mui/material';

const ToDosItem = ({ item }) => {
    const { dispatch } = useContext(StoreContext);
    const { id, description, completed, inEdit, hover, newItem } = item
    const [value, setValue] = useState('');
    useEffect(() => {
        if (newItem) {
            setValue('');
        }
    }, [newItem])
    const checkIfEnter = (e) => {
        if (e.key === 'Enter') {
            dispatch(updateItem({ data: { ...item, description: value }, id: id }));
        }
    }
    const onLostFocus = () => {
        dispatch(updateItem({ data: { ...item, description: value }, id: id }));
    }
    const changeValue = (e) => {
        setValue(e.target.value);
    };

    const startEdit = (isCompleted) => {
        if (!isCompleted) {
            setValue(description || '');
            dispatch(openEditMode(id));
        }
    };

    return (
        <Card sx={{ minWidth: 300 }} >
            <CardContent style = {{padding:'5px 0px 0px 0px'}}>
                <Grid container spacing={1}
                    onMouseEnter={() => dispatch(showHover({ id }))}
                    onMouseLeave={() => dispatch(hideHover({ id }))}>

                    <Grid item xs={1}>
                        <Checkbox
                            size="small"
                            checked={completed}
                            onChange={() => dispatch(changeCompleted(id))}
                        />

                    </Grid>

                    <Grid item xs={10} onDoubleClick={() => startEdit(completed)}>

                        {inEdit ?
                            <Input
                                placeholder="Tell me what you do"
                                value={value}
                                autoFocus
                                style = {{width:'100%'}}
                                onBlur={onLostFocus}
                                onKeyPress={(e) => checkIfEnter(e)}
                                onChange={(e) => changeValue(e)}
                            />
                            : <Typography align='left' noWrap   >{description}</Typography>
                        }

                    </Grid>

                    {hover && <Grid item xs={1}>
                        <DeleteButton onClick={() => dispatch(deleteItem(id))} />
                    </Grid>}

                </Grid>
            </CardContent>
        </Card>
    )
}
export default ToDosItem;