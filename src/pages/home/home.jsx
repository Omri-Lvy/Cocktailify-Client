import React from 'react';
import Hero from "./hero/hero";
import Features from "./features/features";
import Testimonials from "./testimonials/testimonials";
import Faq from "./faq/faq";

const Home = () => {
    return (
        <>
            <Hero/>
            <Features/>
            <Faq/>
            <Testimonials/>
        </>
    );
};

export default Home;