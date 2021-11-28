import { useContext, useEffect, useState } from "react";
import { Input } from "@mui/material";

import { deleteItem, openEditMode, updateItem } from "../../store/actions";
import { StoreContext, ToDoInterface } from "../../store/provider";
import TopographyItem from "./TypographyItem";

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

    return (

        <div onDoubleClick={() => startEdit(completed)}>
            {inEdit 
               ? <Input
                    placeholder="Tell me what you do"
                    value={value}
                    autoFocus
                    sx={{ width: '100%' }}
                    onBlur={onLostFocus}
                    onKeyPress={(e) => checkIfEnter(e)}
                    onChange={(e) => changeValue(e)}
                />
                : <TopographyItem 
                    completed={completed} 
                    description={description} 
                    align='left' />

            }
        </div>
    )
};

export default Title;