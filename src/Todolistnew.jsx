import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const Todolistnew =() =>{
    const [items , setitem] = useState("BUy A Mango");

    const itemEvent = (event) =>{
        console.log("Clicked");
        setitem(event.target.value);
    }
    return (
        <React.Fragment>
            <div className="todo__wrapper">
                <h2>To Do List</h2>
                <div className="todo__input">
                    <input type="text" placeholder="Add a Item" onChange={itemEvent}  />
                    <Tooltip title="Add">
                        <Button variant="contained" color="primary">
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </div>
                <ol>
                    <li>{items}</li>
                </ol>
            </div>
        </React.Fragment>
    )
}

export default Todolistnew;

