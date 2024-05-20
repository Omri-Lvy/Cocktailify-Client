import React, {useRef, useState} from 'react';
import Input from "../ui/input";
import {fetcher} from "../../utils/fetch";

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);
    const form = useRef(null);

    const validateForm = () => {
        const currentErrors = {};
        if (!formData.name) {
            nameInput.current.setCustomValidity("Name is required");
            currentErrors['name'] = "Name is required";
        }
        else if(formData.name.match(/[^a-zA-Z\s]/g)) {
            nameInput.current.setCustomValidity("Name can only contain english alphabets");
            currentErrors['name'] = "Name can only contain english alphabets";
        }
        if (!formData.email) {
            emailInput.current.setCustomValidity("Email is required");
            currentErrors['email'] = "Email is required";
        }
        else if (!formData.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
            emailInput.current.setCustomValidity("Invalid email address");
            currentErrors['email'] = "Invalid email address";
        }
        if (!formData.password) {
            passwordInput.current.setCustomValidity("Password is required");
            currentErrors['password'] = "Password is required";
        }
        else if (formData.password.length < 8 || formData.password.length > 20) {
            passwordInput.current.setCustomValidity("Password must be between 8 to 20 characters");
            currentErrors['password'] = "Password must be between 8 to 20 characters";
        }
        if (!formData.confirmPassword) {
            confirmPasswordInput.current.setCustomValidity("Confirm password is required");
            currentErrors['confirmPassword'] = "Confirm password is required";
        }
        if (formData.password !== formData.confirmPassword) {
            confirmPasswordInput.current.setCustomValidity("Passwords do not match");
            currentErrors['confirmPassword'] = "Passwords do not match";
        }
        setErrors(currentErrors);
        if (Object.keys(currentErrors).length > 0) {
            form.current.reportValidity();
            return false;
        }
        return true;
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        switch (e.target.name) {
            case 'name':
                nameInput.current.setCustomValidity("");
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        name: ""
                    }

                })
                break;
            case 'email':
                emailInput.current.setCustomValidity("");
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        email: ""
                    }
                })
                break;
            case 'password':
                passwordInput.current.setCustomValidity("");
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        password: ""
                    }
                })
                break;
            case 'confirmPassword':
                confirmPasswordInput.current.setCustomValidity("");
                setErrors((prevErrors) => {
                    return {
                        ...prevErrors,
                        confirmPassword: ""
                    }
                })
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            createAccount();
        }
    }

    const createAccount = async () => {
        try {
            const res = await fetcher('/register', 'POST', JSON.stringify(formData), {
                'Content-Type': 'application/json'
            });
            const data = await res.json();
            if (data['success']) {
                console.log('Account created successfully');
            }
        } catch (e) {}
    }

    return (
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <Input ref={nameInput} type="text" label="Name" name="name" value={formData.name} handleChange={handleChange} required={true} id="name_input" isError={!!errors['name']} errorMessage={errors['name']}/>
            <Input ref={emailInput} type="email" label="Email" name="email" value={formData.email} handleChange={handleChange} required={true} id="email_input" isError={!!errors['email']} errorMessage={errors['email']}/>
            <Input ref={passwordInput} type="password" label="Password" name="password" value={formData.password} handleChange={handleChange} required={true} id="password_input" isError={!!errors['password']} errorMessage={errors['password']}/>
            <Input ref={confirmPasswordInput} type="password" label="Confirm password" name="confirmPassword" value={formData.confirmPassword} handleChange={handleChange} required={true} id="confirm_password_input" isError={!!errors['confirmPassword']} errorMessage={errors['confirmPassword']}/>
            <button type="submit"
                    className="bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] py-2 px-3 rounded-md drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)]">
                Create Account
            </button>
        </form>
    );
};

export default SignupForm;