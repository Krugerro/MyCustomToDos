import { SortableHandle } from 'react-sortable-hoc';
import TopographyItem from './TypographyItem';

const SortableHandleItem = SortableHandle( () => {
    return (
        <TopographyItem  description = {"⋮⋮"} align ='center' cursor = 'grab'/>
    )
})

export default SortableHandleItem