import React from "react";
import graffiti from "../../assets/videos/graffiti.mp4";
import skateboard from "../../assets/videos/skateboard.mp4";
import graffitiImage from "../../assets/graffitiImage.jpg";

export default function VideoPlayer() {
    return (
        <div className="video-wrapper">
            <video className="video-player" controls autoPlay muted loop>
                <source src={graffiti} type="video/mp4" />
            </video>

            <img src={graffitiImage} alt="middle" className="graffiti-img" />

            <video className="video-player" controls autoPlay muted loop>
                <source src={skateboard} type="video/mp4" />
            </video>
        </div>
    );
}
