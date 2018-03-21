import React from "react";
import "./MarvelCard.css";

const MarvelCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} width="200" height="300"/>
        </div>
        <span onClick={() => props.clickCount(props.id)} className="select">
    </span>
    </div>
);

export default MarvelCard;
