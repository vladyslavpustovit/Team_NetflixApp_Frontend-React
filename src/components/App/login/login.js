import "./login.css"
import {useState} from "react";
import {useLogin} from "../../../hooks/useLogin";
import {Link} from "react-router-dom";
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-32 w-auto"
                        src="/assets/images/logo.png"
                        alt="Netflix"
                    />
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="username"
                                    required
                                    onChange={(e)=>setUsername(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e)=>setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={isLoading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            {error && <div className="text-red-700 mt-2 text-sm">{error}</div>}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create a new account!
                        </Link>
                    </p>
                </div>
            </div>
    );
}
