import React from "react";
import './NoMatch.scss';
import IMG_1623 from "../../../public/IMG_1623.jpg";
import AlutekImage from "../../../public/AlutekImage.jpg"

export function NoMatch() {
    return (
        <div className="sectionNoMatch__container">

            <div style={{
                backgroundImage: `url(${AlutekImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                width: '100vw'
            }} className="noMatch">

                <h1 className="noMatch__text-headerOne">404</h1>
                <p className="noMatch__text-paragraph">Page Not Found</p>
            </div>
        </div>
    )
}