import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const user = useSelector(state => state.user)
   const loading = useSelector(state => state.loading)
   const location = useLocation();
   if (loading) {
      return (
         <div className="App">
            <h2>Loading.......</h2>
         </div>
      )
   }
   if (!user.email) {
      return <Navigate to="/login" state={{ from: location }} />;
   }

   return children;

}

export default PrivateRoute;