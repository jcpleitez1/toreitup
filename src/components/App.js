import React from "react";
import Gallery from './Gallery';
import Header from './Header';
import Bio from './Bio';
import EventPictures from './EventPictures';
import Playlist from './Playlist';
import Contact from './Contact';
import Footer from './Footer';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div id="root">
            <Routes>
                <Route path="/" element={
                    [<Header />,
                    <Bio />,
                    <EventPictures />,
                    <Playlist />,
                    <Contact />,
                    <Footer />,]
                } />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>

        </div>
    )
}

export default App;