import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.gitLink}>{props.gitLink}</a>
            <a href={props.linkLink}>{props.linkLink}</a>
        </div>
    )
}

export default Links;