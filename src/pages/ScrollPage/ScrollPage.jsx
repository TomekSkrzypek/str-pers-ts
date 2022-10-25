import React from "react";
import './ScrollPage.scss';
// import supabase from "../../config/supabaseClient";
import IMG_1623 from '../../../public/IMG_1623.jpg'

export function ScrollPage() {
    // console.log("supa aasdbase" + supabase)
    return (
        // <div className="section__uber-container">
            <div className="section__container">
                <section >
                    <img src={IMG_1623} className="section__one"/>
                    <h1></h1>
                </section>
                <section className="section__two">
                    <h1>Second Page</h1>
                </section>
                <section className="section__three">
                    <h1>ThirdPage</h1>
                </section>
            </div>
        // </div>
    )
}