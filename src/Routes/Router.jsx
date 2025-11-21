import { createBrowserRouter } from "react-router";
import HomeLayouts from "../components/HomeLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
    },
    {
        path: "auth",
        element: <h1>home</h1>,
    },
    {
        path: "/*",
        element: <h1 className="text-center">Error</h1>
    }
]);

export default router;