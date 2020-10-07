import React, { useState } from 'react';
import KeepHeader from './KeepHeader';
import Createnote from './Createnote';
import Footer from './Footer';
import Notedata from './Notedata';
const Vskeep = () =>{
    const [addItem , setaddItem] = useState([]);
    const Addnote = (note) =>{
        //alert("sdf"); 
        setaddItem((oldData) =>{
            return [...oldData , note]
        })
        console.log(note);
    }
    const onDelete = (id)=>{
        setaddItem((olddata) =>
            olddata.filter((currentdata,indx)=>{
                return indx!==id;
            })
        )
    }
    return (
        <React.Fragment>
            <KeepHeader />
            <Createnote passNote={Addnote}/>
            {addItem.map((val , index) =>(
                <Notedata
                    key= {index}
                    id= {index}
                    title= {val.title}
                    content= {val.content}
                    deleteItem={onDelete}
                    />
            ))}
            <Footer Copyright="&copy; VS Coding Program 2020-2021" />
        </React.Fragment>
    )
}
export default Vskeep;