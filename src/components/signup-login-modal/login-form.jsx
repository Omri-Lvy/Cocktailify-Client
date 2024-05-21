import React from 'react';
import {useForm} from "react-hook-form";
import {useIsLoggedIn} from "../../context/is-loggedin-context";
import {useSignupLoginModal} from "../../context/signup-login-modal-context";
import Input from "../ui/input";
import {fetcher} from "../../utils/fetch";

const LoginForm = () => {
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

    const submitHandler = async (data, event) => {
        event.preventDefault();
        if (!isValid) {
            return;
        }
        const formData = watch();
        try {
            const res = await fetcher('/login', 'POST', JSON.stringify(formData), {
                'Content-Type': 'application/json'
            });
            if (res['isSuccess']) {
                loginChangeHandler(true, res['userID']);
                reset({
                    email: '',
                    password: ''
                });
                closeModal();
            }
        } catch (e) {
            console.log('Error logging in:', e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 p-4 justify-between flex-1">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">Sign In</h2>
                <Input register={register} name="email" required={true} input_type="email" label="Email" id="email_input" errors={errors} watch={watch} validation={{
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address"
                    }
                }}/>
                <Input register={register} name="password" required={true} input_type="password" label="Password" id="password_input" errors={errors} watch={watch}/>
            </div>
            <button type="submit"
                    className="bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] py-2 px-3 rounded-md drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)]">
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;