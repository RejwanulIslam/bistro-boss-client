import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth"

export default function AdminRoute({children}) {
    const [isAdmin, isPending] = useAdmin()
    const { user, loding } = useAuth()
    const location = useLocation();


    if (loding ||isPending) return <p>Loging.............</p>
    if (!user || !isAdmin) return <Navigate to='/' state={{ from: location }}></Navigate>
    if (user && isAdmin) return children
}
