import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
const Notedata = (props) =>{
    const Deletenote = () =>{
        props.deleteItem(props.id);
    }
    return (
        <React.Fragment>
           <div className="note__wrapper">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <Tooltip title="Delete">
                    <button onClick={Deletenote}>
                        <DeleteIcon className="delete__section" />
                    </button>
                </Tooltip>
           </div>
        </React.Fragment>
    )
}
export default Notedata;