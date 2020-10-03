import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
const Todolistvalue = (props) =>{
    return (
        <React.Fragment>
            <div className="Add__wrapper">
                <li>
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={() =>{
                            props.onSelect(props.id);
                        }}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                    {props.text}
                </li>
            </div>
        </React.Fragment>
    )
}

export default Todolistvalue;