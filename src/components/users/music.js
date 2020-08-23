import React,{ useState } from 'react';
import lock_open from './img/lock_open.gif';
import lock_close from './img/lock_close.gif';


function Music (){
    const[toggleState1,setToggleState1]=useState(lock_close);
    const[toggleState2,setToggleState2]=useState(lock_close);
    const[toggleState3,setToggleState3]=useState(lock_close);
    const[toggleState4,setToggleState4]=useState(lock_close);
    let toggle1 = () => {
        setToggleState1(toggleState1 === lock_close ? lock_open : lock_close);
    }
    let toggle2 = () => {
        setToggleState2(toggleState2 === lock_close ? lock_open : lock_close);
    }
    let toggle3 = () => {
        setToggleState3(toggleState3 === lock_close ? lock_open : lock_close);
    }
    let toggle4 = () => {
        setToggleState4(toggleState4 === lock_close ? lock_open : lock_close);
    }

    return (
        <div className="card" id="music">
           <h2>Doors</h2> 
            <div className="container">
            <p>Room1</p>
                <img src={toggleState1} width="50" height="50" alt={"music"}  onClick={toggle1}/>
                <p>Room2</p>
                <img src={toggleState2} width="50" height="50" alt={"music"} onClick={toggle2}/>
                <p>Room3</p>
                <img src={toggleState3} width="50" height="50" alt={"music"} onClick={toggle3}/>
                <p>Room4</p>
                <img src={toggleState4} width="50" height="50" alt={"music"} onClick={toggle4}/>
            </div>
     </div>
    )
}

export default Music;