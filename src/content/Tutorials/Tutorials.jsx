import React, { useEffect } from "react";
import './tutorials.css';
import Footer from "../../components/Footer/Footer";

function Tutorials() {
    useEffect(() => {
        document.title = "Tutorials";
    }, []);

    const videoCategories = {
        "Front-End Development :": [
            'https://www.youtube.com/embed/sBws8MSXN7A',
            'https://www.youtube.com/embed/1Rs2ND1ryYc',
            'https://www.youtube.com/embed/W6NZfCO5SIk',
            'https://www.youtube.com/embed/pQN-pnXPaVg'
        ],
        "Back-End Development :": [
            'https://www.youtube.com/embed/fBNz5xF-Kx4',
            'https://www.youtube.com/embed/CnH3kAXSrmU?si=JWUt0cleU07QY_m_',
            'https://www.youtube.com/embed/c2M-rlkkT5o?si=ssHGNh2nFn3DPmu8',
            'https://www.youtube.com/embed/7S_tz1z_5bA'
        ],
        "Best IDE Software :": [
            'https://www.youtube.com/embed/naL0cZNQh1g?si=6fqp-yij_Wg9w2ij',
            'https://www.youtube.com/embed/y7MOp51gWeI?si=dQ0tGWsI-0kjD8bh',
            'https://www.youtube.com/embed/j6mLD6e75Go?si=Mj9bOyEXQyWPu15L',
            'https://www.youtube.com/embed/3jNhg8hnTrY?si=6VTlmCz8nXYynDFl'
        ],
        "MERN Stack :": [
            'https://www.youtube.com/embed/-42K44A1oMA?si=eNnP68MzSMbFmJ5z',
            'https://www.youtube.com/embed/3YmDEF2p8_Y?si=wyDcLrrN5eZ7IeeG',
            'https://www.youtube.com/embed/_4CPp670fK4?si=DSltBjz3C2nZsSi7',
            'https://www.youtube.com/embed/ntKkVrQqBYY?si=0ld24dWNMi2wpyxj'
        ]
    };

    return (
        <div className="tutorials">
            <h1 className="tutorials-title">Tutorials</h1>
            {Object.keys(videoCategories).map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h2 className={category === "Front-End Development", "Back-End Development" , "Mobile App Development" ? "highlight-title" : ""}>{category}</h2>
                    <div className="video-grid">
                        {videoCategories[category].map((src, index) => (
                            <iframe
                                key={index}
                                width="100%"
                                height="auto"
                                src={src}
                                title={`${category} Video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ))}
                    </div>
                </div>
            ))}
            <br />
            <Footer />
        </div>
    );
}

export default Tutorials;
