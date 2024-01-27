import "./login.css";
import React, { useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { Link } from "react-router-dom";
import LoadingSpinner from "../content/loading-spinner";
import {useForm} from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, error, isLoading } = useLogin();
  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <div
      className="background flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
    
      <div className="container mx-auto bg-black/80 ml sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className="logo mx-auto h-24 mt-8 w-auto"
          src="/assets/images/logo.png"
          alt="Netflix"
        />
        <h2 className="h-15 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      

      <div className="px-6 pb-4 mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className=" space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                  id="username"
                  name="username"
                  type="username"
                  maxLength={20}
                  {...register('username', {
                    required: "Username is required",
                  })}
                  autoComplete="username"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
              />
            </div>
            <div className="text-red-700 mt-2 text-sm">{errors.username?.message}</div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                    href="#"
                    className="font-semibold text-red-700 hover:text-white"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                  id="password"
                  name="password"
                  type="password"
                  maxLength={20}
                  {...register('password', {
                    required: "Password is required",
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
              Sign in
            </button>
            {isLoading && (
                  <LoadingSpinner size={128} message='Logging in...'/>
            )}
            {error && <div className="text-red-700 mt-2 text-sm">{error}</div>}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold leading-6 text-red-700 hover:text-white"
          >
            Create a new account!
          </Link>
        </p>
      </div>
      </div>
    </div>
  );
}
