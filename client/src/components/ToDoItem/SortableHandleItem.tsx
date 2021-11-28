import { SortableHandle } from 'react-sortable-hoc';
import TopographyItem from './TypographyItem';

const SortableHandleItem = SortableHandle( () => {
    return (
        <TopographyItem  description = {"⋮⋮"} align ='center' cursor = 'move'/>
    )
})

export default SortableHandleItem