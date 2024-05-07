import React from 'react';
import {testimonials} from "../../../constants";
import MovingCards from "../../../components/ui/moving-cards";
import Card from "../../../components/ui/card";

const Testimonials = () => {

    const testimonialsCards = testimonials.map((testimonial, index) => (
        <Card key={index}>
            <div className="p-6 text-md font-thin h-80 lg:h-64">
                <p>
                    {testimonial.text}
                </p>
                <div className="flex mt-8 items-start">
                    <img className="size-12 mr-6 rounded-full border border-neutral-300 object-cover" loading="lazy"
                         src={testimonial.image}
                         alt={`${testimonial.name}`}/>
                    <div className="flex flex-col">
                        <h6 className="text-lg font-semibold text-neutral-200 m-0">{testimonial.name}</h6>
                        <span
                            className="text-sm italic text-neutral-500 group-hover:text-neutral-400">{testimonial.company}</span>
                    </div>
                </div>
            </div>
        </Card>
    ))

    return (
        <div className="mt-20 tracking-wide">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">What people are saying</h2>
            <div className="flex justify-center items-center">
                <MovingCards items={testimonialsCards} speed="normal" pauseOnHover={true} className="w-full"/>
            </div>

        </div>
    );
};

export default Testimonials;