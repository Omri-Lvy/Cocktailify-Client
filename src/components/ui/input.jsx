import React, {forwardRef} from 'react';

const Input = forwardRef(({type, label, name, value, handleChange, id, isError, required, errorMessage}, ref) => {
    return (
        <div>
        <div className="relative">
            <input
                ref={ref}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder=""
                className={`px-4 pb-2.5 pt-4 w-full border border-neutral-500 rounded-md peer bg-transparent appearance-none focus:outline-none focus:ring-0 focus:border-neutral-300 autofill:shadow-[inset_0_0_0px_1000px_rgba(23,23,23,1)] invalid:border-red-600 invalid:focus:border-red-600`}
            />
            <label
                htmlFor={id}
                className="absolute text-gray-400 duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-neutral-900 px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 start-1.5 peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-500 peer-invalid:peer-focus:top-1 peer-invalid:peer-focus:scale-90"
            >
                {label}{required && "*"}
            </label>
        </div>
        <div className="text-red-500 w-full">
            {isError && errorMessage}
        </div>
        </div>
    );
});

export default Input;