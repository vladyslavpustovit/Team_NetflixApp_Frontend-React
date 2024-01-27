import React, {useState} from "react";
import {useSignup} from "../../../hooks/useSignup";
import {Link, useNavigate} from "react-router-dom";
import LoadingSpinner from "../content/loading-spinner";
import {useForm} from "react-hook-form";
export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { signup, error, isLoading } = useSignup();

    const onRegSuccess = () => {
        navigate("/login")
    }

    const onSubmit = async (data) => {
        await signup(data, onRegSuccess)
    }

    return (
        <div className="background flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
            <div className="container mx-auto bg-black/80 sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="logo mx-auto mt-8 h-24 w-auto"
                    src="/assets/images/logo.png"
                    alt="Netflix"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                    Create a new account
                </h2>
           

            <div className="px-6 pb-4 mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                {...register('email', {
                                    required: "Email is required",
                                    maxLength: {value: 50, message: "Maximum is 50 characters"},
                                    validate: (fieldValue) => {
                                        return !fieldValue.includes(' ') || "No spaces allowed"
                                    }
                                })}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                            />
                        </div>
                        <div className="text-red-700 mt-2 text-sm">{errors.email?.message}</div>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="username"
                                {...register('username', {
                                    required: "Username is required",
                                    minLength: {value: 5, message: "Minimum is 5 characters"},
                                    maxLength: {value: 20, message: "Maximum is 20 characters"},
                                    validate: (fieldValue) => {
                                        return !fieldValue.includes(' ') || "No spaces allowed"
                                    }
                                })}
                                autoComplete="username"
                                className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                            />
                        </div>
                        <div className="text-red-700 mt-2 text-sm">{errors.username?.message}</div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {value: 8, message: "Minimum is 8 characters"},
                                    maxLength: {value: 20, message: "Maximum is 20 characters"},
                                    validate: (fieldValue) => {
                                        return !fieldValue.includes(' ') || "No spaces allowed"
                                    }
                                })}
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                            />
                        </div>
                        <div className="text-red-700 mt-2 text-sm">{errors.password?.message}</div>
                    </div>

                    <div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                        {error && <div className="text-red-700 mt-2 text-sm">{error}</div>}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-red-700 hover:text-white">
                       Sign In
                    </Link>
                </p>
            </div>
            </div>
            {isLoading && (
                    <LoadingSpinner size={128} message='Processing your data...'/>
            )}
        </div>
    );
}