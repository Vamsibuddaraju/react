import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Error from "./components/Error"
import RestMenu from "./components/RestMenu"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"


const AppLayout = () =>{
    return(
    <div className="root">
        <Header />
        <Outlet />
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/restaurant/:id",
                element:<RestMenu />
            },
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/home",
                element:<Home />
            }
        ],
        errorElement:<Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
