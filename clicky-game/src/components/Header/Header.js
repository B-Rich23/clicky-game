import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: 0 {props.score} Highscore: 0 {props.highscore}
        </div>
    </div>
);

export default Header;

