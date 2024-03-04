import { RouterProvider } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routes";
import { useSelector } from "react-redux";


function App() {

  const userRole = useSelector((state) => state?.data?.additional?.role_id);



  return (
    <>
      <RouterProvider router={userRole === 1 ? privateRoutes : publicRoutes} />
    </>
  );
}

export default App;
