import useAuth from '../../hooks/useAuth'

export default function UserHome() {
     const { user } = useAuth()
    return (
        <div>
            <h2 className="text-3xl">
                <span> Hi, Wellcome</span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h2>
            
        </div>
    )
}
