import {useState} from "react";
import {useSignup} from "../../../hooks/useSignup";
import {Link} from "react-router-dom";
export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, username, password);
        // window.location.pathname = "/"
    }

    return (
        <div className=" background flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white">
            <div className=" container mx-auto bg-black/80 sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-32 w-auto"
                    src="/assets/images/logo.png"
                    alt="Netflix"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                    Create a new account
                </h2>
           

            <div className=" px-6 pb-4 mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={(e)=>setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 pl-2 bg-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-white"
                            />
                        </div>
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
        </div>
    );
}