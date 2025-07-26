import React from "react";

export function SearchBox(props) {
    return <input
        className={`search ${props?.inputsearchClass}`}
        type="text"
        id="search"
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e)} />;
}