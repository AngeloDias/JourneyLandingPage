import React from 'react';
import walkingBackground from '../images/walking-in-the-forest.jpg';

export default function TopSectionComponent() {
    return (
        <div className="iris">
            {/* <img src={walkingBackground} className="responsive-img card transparent z-depth-5" alt="top" /> 
            Reference: https://stackoverflow.com/questions/30113116/overlaying-an-image-with-text-in-materialize-css */}
            <div className="card transparent z-depth-5"/>
            <p className="grey-text text-darken-1">Content first part</p>
            <p className="grey-text text-darken-1">Content second part</p>
        </div>
    )
}