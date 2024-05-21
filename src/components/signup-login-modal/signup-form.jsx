import React, {useState} from 'react';
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import {fetcher} from "../../utils/fetch";
import {useIsLoggedIn} from "../../context/is-loggedin-context";
import {useSignupLoginModal} from "../../context/signup-login-modal-context";

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",  // Validates the form at every change
        reValidateMode: "onChange",
        criteriaMode: "all"
    });
    const { loginChangeHandler } = useIsLoggedIn();
    const { closeModal } = useSignupLoginModal();
    const [error, setError] = useState(null);

    const password = watch("password"); // This is used to validate the confirmPassword

    const submitHandler = async (data, event) => {
        event.preventDefault();
        if (!isValid) {
            return;
        }
        try {
            const formData = watch()
            const res = await fetcher('/register', 'POST', JSON.stringify(formData), {
                'Content-Type': 'application/json'
            });
            if (res['isSuccess']) {
                loginChangeHandler(true, res['user']);
                reset({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                closeModal();
            }
            else {
                setError(res['message']);
            }
        } catch (e) {
            console.log('Error creating account:', e.message)
        }

    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 p-4">
            <h2 className="text-2xl font-semibold">Create Account</h2>
            {error && <span className="text-red-500">{error}</span>}
            <Input register={register} name="name" required={true} input_type="text" label="Name" id="name_input" errors={errors} watch={watch} validation={{
                pattern: {
                    value: /^[a-zA-Z\s]*$/,
                    message: "Name must contain only letters"
                },
                minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                },
            }}/>
            <Input register={register} name="email" required={true} input_type="email" label="Email" id="email_input" errors={errors} watch={watch} validation={{
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                }
            }}/>
            <Input register={register} name="password" required={true} input_type="password" label="Password" id="password_input" errors={errors} watch={watch} validation={{
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
                },
                maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters"
                }
            }}/>
            <Input register={register} name="confirmPassword" required={true} input_type="password" label="Confirm Password" id="confirmPassword_input" errors={errors} watch={watch} validation={{
                validate: value => value === password || "Passwords do not match"
            }}/>
            <button type="submit" className="bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] py-2 px-3 rounded-md drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)]">
                Create Account
            </button>
        </form>
    );
};

export default SignupForm;
