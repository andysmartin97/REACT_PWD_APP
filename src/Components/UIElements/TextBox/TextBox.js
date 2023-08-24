import React from "react";
import "./TextBlock.css"

export default function TextBlock ({title,paragraph}) {

    return(
        <div className="Text-Block">
                <h4>{title}</h4>
                <p>{paragraph}</p>
        </div>
    );

}// end IntroParagraph