import React from "react";
import { NavLink } from "react-router-dom";

function Gallery() {
    return (
        <div>
            You're on the Gallery page

            <div id="home-button">
                <NavLink exact to={'/'}>
                    Go Home
                </NavLink>
            </div>
        </div>
    )
}

export default Gallery;