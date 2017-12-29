import React from "react";
import PropTypes from "prop-types";

/*
Link is a link with a callback.
    onClick() is a callback to invoke when link is clicked.
*/


const Link = ({ active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href=""
        onClick={element => {
            element.preventDefault()
            onClick()
        }}
        >
        {children}
        </a>
    )
}
Link.PropTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Link;