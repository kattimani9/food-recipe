import React from "react";
import style from "./recipe.module.css";

import ReactDOM from "react-dom";

const Recipe =({title,calories,image,recipe,ingredients}) => {
    return(
        <div className={style.recipe}>

        <h1>{title}</h1>
        <o1>{ingredients.map(ingredients =>
        (
            <li>{ingredients.text}</li>
        )) }</o1>
        <p>{calories}</p>
        <img className={style.image} src={image} alt="" />


        </div>
    );
}

export default Recipe;