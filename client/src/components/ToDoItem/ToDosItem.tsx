import { useContext } from 'react';
import { Card, CardContent } from '@mui/material';
import { SortableElement } from 'react-sortable-hoc';
import SortableHandleItem from './SortableHandleItem';
import Grid from '@mui/material/Grid';

import { hideHover, showHover } from '../../store/actions';
import { StoreContext, ToDoInterface } from '../../store/provider';
import DeleteButton from './DeleteButton';
import Title from './Title';
import CheckboxItem from './CheckboxItem';



const ToDosItem = SortableElement(({ item }: { item: ToDoInterface }) => {
    const { dispatch } = useContext(StoreContext);
    const { id, completed, hover } = item;

    return (
        <Card sx={{ "&:last-child": { marginBottom: '10px' } }} >
            <CardContent sx={{ padding: '0px', paddingBottom: '0px!important' }}>
                <Grid container
                    onMouseEnter={() => dispatch(showHover(id))}
                    onMouseLeave={() => dispatch(hideHover(id))}>

                    <Grid item xs={1}>
                        <SortableHandleItem />
                    </Grid>

                    <Grid item xs={1}>
                        <CheckboxItem completed={completed} id={id} />
                    </Grid>

                    <Grid item xs={9} >
                        <Title item={item} />
                    </Grid>

                    <Grid item xs={1}>
                        <DeleteButton id={id} hover={hover} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
});

export default ToDosItem;