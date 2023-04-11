import { NavLink } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Gallery from './Gallery';

function EventPictures() {
    return (
        <div id="event-pictures">
            <div id="carousel">
                Insert Carousel
            </div>

            <div id="gallery-button">
                <NavLink exact to={'/gallery'}>
                    View Gallery
                </NavLink>
            </div>
        </div>
    )
}

export default EventPictures;
