import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./components/App/home/home";
import Landing from "./components/App/land-page/land-page";
import Login from "./components/App/login/login";
import Register from "./components/App/register/register";
import Categories from "./components/App/categories/categories";

export const router = createBrowserRouter([
    {
        path: "/",  element: <Home/>
    },
    {
        path: "/landing",  element: <Landing/>
    },
    {
        path: '/login', element: <Login/>
    },
    {
        path: '/register', element: <Register/>
    },
    {
        path: '/categories', element: <Categories/>
    },
    {
        path: "*", element: <Home/>
    }
]);