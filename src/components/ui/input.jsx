import React from 'react';
import { ErrorMessage } from "@hookform/error-message";

const Input = ({ register, name, required, input_type, label, id, errors, watch, validation }) => {
    return (
        <div className={`relative ${errors[name] ? '' : 'mb-4'}`}>
            <input
                {...register(name, { required: required ? "This field is required" : false, ...validation })}
                id={id}
                type={input_type}
                className={`px-4 py-2.5 w-full border ${errors[name] ? 'border-red-600' : 'border-neutral-500'} rounded-md peer bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-neutral-300 autofill:shadow-[inset_0_0_0px_1000px_rgba(23,23,23,1)]`}
            />
            <label htmlFor={id} className={`absolute left-2 top-0 transition-all duration-300 ${watch(name) ? '-top-1/4' : 'top-1/4'} ${errors[name] ? 'top-[12.5%] peer-focus:-top-[16%]' : 'peer-focus:-top-1/4'} peer-placeholder-shown:-top-1/4  bg-neutral-900 px-1`}>
                {label}{required && "*"}
            </label>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <p
                    className="text-red-500 mt-1 flex flex-row justify-start items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
                    </svg>
                    {message}
                </p>}
            />
        </div>
    );
};

export default Input;
