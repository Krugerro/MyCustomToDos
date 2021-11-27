import { useContext } from 'react';
import {  hideHover, showHover } from '../../store/actions';
import { StoreContext, ToDoInterface } from '../../store/provider';
import Grid from '@mui/material/Grid';
import DeleteButton from './DeleteButton';
import { Card, CardContent} from '@mui/material';
import Title from './Title';
import CheckboxItem from './CheckboxItem';

const ToDosItem : React.FC<{ item: ToDoInterface, index : number} >= ({ item }) => {
    const {  dispatch } = useContext(StoreContext);
    const { id, completed, hover } = item;
    return (
        <Card sx={ { "&:last-child" : {marginBottom : '10px'} } } >
            <CardContent sx= {{padding : '0px', paddingBottom : '0px!important'}}>
                <Grid container 

                    onMouseEnter={() => dispatch(showHover( id ))}
                    onMouseLeave={() => dispatch(hideHover( id ))}>

                    <CheckboxItem completed = {completed} id = {id}/>

                    <Title item = {item} />

                    <DeleteButton id={id} hover = {hover}/>
                    
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ToDosItem;