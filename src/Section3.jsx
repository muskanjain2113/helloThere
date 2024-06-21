import React from "react";
import "./Section3.css";


export default function Section3({title, image}){
    return(
        <div className="Section-3">
            <div className="sections">
            <h4 className="title">{title}</h4>
            <img className="image" src={image}></img>
            </div>
        </div>
    )
}