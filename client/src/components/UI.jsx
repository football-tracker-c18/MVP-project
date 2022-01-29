import React from "react";
const UI = (props) =>{
    return(
        <div>
            {console.log(props)}
            <select name="gk">
            {props.gk.length && props.gk.map((value,i)=>(
                    <option key={i} value="">{value.playname}</option>
            ))}
                </select>
                <select name="def">
            { props.def.length && props.def.map((value,i)=>(
                    <option key={i} value="">{value.playname}</option>
            ))}
                </select>
                <select name="mid">
            {props.mid.length && props.mid.map((value,i)=>(
                    <option key={i} value="">{value.playname}</option>
            ))}
                </select>
                <select name="atk">
            {props.atk.length && props.atk.map((value,i)=>(
                    <option key={i} value="">{value.playname}</option>
            ))}
                </select>
            <img className="stade-Img" src={props.img} alt="stade" />
        </div>
    )
}

export default UI