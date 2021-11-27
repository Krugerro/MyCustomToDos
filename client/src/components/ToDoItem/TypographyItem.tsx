import { Typography } from "@mui/material";


const TopographyItem: React.FC<{ completed ?: boolean, description: string , align : "right" | "left" | "center" , cursor ?: string}> = ({ completed, description, align, cursor }) => {
    const toDoTitleStyle = completed
        ? {
            textDecoration: 'line-through',
            marginTop: '6px',
            color: 'grey'
        }
        : { 
            marginTop: '6px',
            cursor : `${cursor || 'auto'}`
    }
    return (
        <Typography
            sx={toDoTitleStyle}
            align= {align}
            noWrap>
            {description}
        </Typography>
    )
}

export default TopographyItem;