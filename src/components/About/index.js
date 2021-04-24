import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <p> I am an aspiring photographer. Please visit my Gallery </p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;