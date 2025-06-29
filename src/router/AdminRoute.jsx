import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth"

export default function AdminRoute() {
    const [isAdmin, isPending] = useAdmin()
    const { user, loding } = useAuth()
    const location = useLocation();


    if (loding ||isPending) return <p>Loging.............</p>
    if (user &&isAdmin) return children
    if (!user) return <Navigate to='/login' state={{ from: location }}></Navigate>
}
