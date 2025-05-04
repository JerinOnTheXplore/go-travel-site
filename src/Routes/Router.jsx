import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryPlace from "../Pages/CategoryPlace";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/category/:id",
                element:<CategoryPlace></CategoryPlace>,
                loader:()=> fetch("/places.json"),
            }
        ]
    },
    {
        path:"/auth",
        element:<h2>Authentication Layout</h2>
    },
    {
        path:"/display-places",
        element:<h2>Places Layout</h2>
    },
    {
        path:"/*",
        element:<h2>Error 404</h2>
    },
])

export default router;