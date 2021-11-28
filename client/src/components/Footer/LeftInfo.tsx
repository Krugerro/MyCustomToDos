import { Button } from "@mui/material";

const LeftInfo : React.FC<{countLeft : number}> = ({countLeft}) => {
    
    return (
        <Button size='small' 
                sx={{textTransform : 'none'}} 
                disabled>
                    
                {`${countLeft} item${(countLeft>1 || countLeft === 0) ? 's' : ''} left`}
        </Button>
    )
};

export default LeftInfo;