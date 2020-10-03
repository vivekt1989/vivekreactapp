import React, { useState } from "react";
import Todolistvalue from './Todolistvalue';
import AddIcon from '@material-ui/icons/Add';
import Clock from 'react-digital-clock';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Todolist = () =>{
    const [inputlist , setinputlist] = useState("");
    const [items, setitems] = useState([]);
    const Itemevent = (event) =>{
        setinputlist(event.target.value);
    }
    const listOfItems = () =>{
        setitems((olditems) =>{
            return [...olditems , inputlist];
        });
        setinputlist('');
    }
    const deleteItems = (id) =>{
        console.log("Deleted");
        setitems ((olditems) => {
            return olditems.filter((arrElem , index) =>{
                return index !==id;
            });
        });
    }
    return(
        <React.Fragment>
            <div className="todo__wrapper" >
                <h2>To Do Lsit <span className="pull-right"><Clock /></span></h2>
                <div className="todo__input">
                    <input type="text" placeholder="Add a Item" value={inputlist} onChange={Itemevent} />
                    <Tooltip title="Add">
                        <Button onClick={listOfItems} variant="contained" color="primary">
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </div>
                <ul>
                    {items.map((itemvalue , index) =>{
                        return(
                            <Todolistvalue 
                            key={index} 
                            id={index} 
                            text={itemvalue} onSelect ={deleteItems}/>
                         );
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Todolist;