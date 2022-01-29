import React from "react";

const Team = (props)=>{
    return (
        <div className="select-team">
            {console.log("dd")}
            <label className="lab1">player name: </label>
            <input className="i1" onChange={props.signUpInput} type="text" name="playname" />
            <label className="lab1">player number: </label>
            <input className="i1" onChange={props.signUpInput} type="number" name="playnumber" />
            <label className="lab1">player positon: </label>
            <select className="i1" onChange={props.signUpInput} name="playpos">
                <option name="GK" value="Gk">GK</option>
                <option name="CB" value="CB">CB</option>
                <option name="FB" value="FB">FB</option>
                <option name="LB" value="LB">LB</option>
                <option name="DM" value="DM">DM</option>
                <option name="LM" value="LM">LM</option>
                <option name="RM" value="RM">RM</option>
                <option name="OM" value="OM">OM</option>
                <option name="FC" value="FC">FC</option>
            </select>
            <button onClick={props.click}>Add</button>
            {props.playerData.length !== 0 && props.number<20 &&  props.playerData.map((value,i)=>(
                <div className="player" key={i}>{console.log(value)}<h4>player {value.playname } </h4> <h4>with the number {value.playnumber } </h4> <h4>is a {value.playposition} </h4><button className="i1" onClick={props.delete}>delete</button></div>
                
            ))}
            {props.playerData.length === 16 && <button onClick={props.changeToUI} >save</button>}
        </div>
    )
}

export default Team