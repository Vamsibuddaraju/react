import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestMenu from "./components/RestMenu"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import CartClass from "./components/CartClass";
import FooterClass from "./components/FooterClass";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery"

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
    return(
    <div className="root">
        <Header />
        <Outlet />
        <FooterClass />
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
                path:"/cart",
                element:<CartClass />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/grocery",
            element:<Suspense fallback = {<h2>Loading.....</h2>}><Grocery /></Suspense>
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/home",
                element:<Body />
            }
        ],
        errorElement:<Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
