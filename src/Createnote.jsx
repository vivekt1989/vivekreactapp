import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
const Createnote = (props) =>{
    const [expand,setexpand] = useState(false);
    const [note , setnote] = useState({
        title :"",
        content : "",
    });
    const Inputevent =(event) =>{
        console.log(note)
        const {name,value} = event.target;
        setnote((PreData) =>{
            return{
                ...PreData,
                [name] : value,
            } 
        });
    }
    const Addevent =() =>{
        props.passNote(note);
        setnote({
            title :"",
            content : "",
        })
    }
    const expandIt = ()=>{
        setexpand(true);
    }
    return( 
        <React.Fragment>
            <div className='card__main'>
                <form>
                    {expand?(
                    <input 
                    type="text"
                    name="title"
                    value={note.title}
                    placeholder="Title Here"
                    onChange={Inputevent} 
                    />):null}
                    
                    <textarea rows="" name="content" onClick={expandIt} value={note.content} column="" placeholder="Write a Note..." onChange={Inputevent}></textarea>
                    {expand? (
                    <Tooltip title="Add">
                        <Button color="primary" onClick={Addevent}>
                            <AddIcon />
                        </Button>
                    </Tooltip>
                    ):null}
                </form>
            </div>
        </React.Fragment>
    );
}
export default Createnote;