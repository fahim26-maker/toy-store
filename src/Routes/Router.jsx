import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/HomeLayouts";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
    {
        index:true,
        element: <Home></Home>,
        loader: () => fetch('/cars.json')
        
    },
    {
        path: "my-profile",
        element: <h1>home</h1>,
    },
    {
        path: "/*",
        element: <h1 className="text-center">Error</h1>
    }
]
    }
]);

export default router;