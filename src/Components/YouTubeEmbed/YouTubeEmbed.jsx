import React from 'react';
import './YouTubeEmbed.css';

const YouTubeEmbed = ({ videoId }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-responsive">
            <iframe
                width="900"
                height="600"
                src={embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;