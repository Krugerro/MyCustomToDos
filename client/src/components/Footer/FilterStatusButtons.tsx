import { Button } from "@mui/material";
import { useContext } from "react";
import { changeFilter } from "../../store/actions";
import { StoreContext } from "../../store/provider";

export enum filterStatus {
    'ALL' = 'ALL',
    'ACTIVE' = 'ACTIVE',
    'COMPLETED' = 'COMPLETED'
}

const FilterStatusButtons: React.FC<{}> = () => {

    const { store, dispatch } = useContext(StoreContext);

    const buttonClick = (filter: string): void => {
        dispatch(changeFilter(filter));
    };

    return (
        <>
            {Object.keys(filterStatus).map((key, index) => {
                const borderStyle = store.filterActive === key
                    ? { border: '1px solid', borderColor: 'gold' }
                    : {}
                return (
                    <Button key={index} size='small' onClick={(e) => buttonClick(key)} sx={borderStyle}>{key}</Button>
                )
            })}
        </>
    )
}

export default FilterStatusButtons;