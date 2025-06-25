import { useContext } from "react"
import { authContex } from "../contex/authprovider/Authprovider"

export default function useAuth() {
    const auth = useContext(authContex)
    return auth
}

