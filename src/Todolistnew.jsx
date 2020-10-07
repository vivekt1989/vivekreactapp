import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
const Todolistnew =() =>{
    const [items , setitems] = useState("");
    const [newitem , setnewitem] = useState([]);

    const itemEvent = (event) =>{
        //console.log("Clicked");
        setitems(event.target.value);
    }
    const Listvalue =() =>{
        setnewitem((Preval) =>{
            return [...Preval,items]
        });
    }
    return (
        <React.Fragment>
            <div className="todo__wrapper">
                <h2>To Do List</h2>
                <div className="todo__input">
                    <input type="text" value={items} placeholder="Add a Item" onChange={itemEvent}  />
                    <Tooltip title="Add">
                        <Button variant="contained" color="primary" onClick={Listvalue}>
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </div>
                <ol>
                    {newitem.map=((val) =>{
                        return <li>{val}</li>
                    })}
                </ol>
            </div>
        </React.Fragment>
    )
}

export default Todolistnew;

