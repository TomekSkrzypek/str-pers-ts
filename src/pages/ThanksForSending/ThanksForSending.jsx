import React from "react";
import './ThanksForSending.scss';

import JaKuba from "../../../public/JaKuba.jpg";

export function ThanksForSending() {
    return (
        <div className="ThanksForSending__container">

            <div className="ThanksForSending__textAndPicture-container">

                <img src={JaKuba} className="ThanksForSending__image"/>

                <div className="ThanksForSending__text-container">
                    <h1 className="ThanksForSending__text-HeaderOne">Dzięki za kontakt!</h1>
                    <h2 className="ThanksForSending__text-HeaderTwo">Odezwę się.</h2>
                    <p className="ThanksForSending__text-paragraph">albo nie, ale postaram się</p>
                </div>

            </div>

        </div>
    )
}