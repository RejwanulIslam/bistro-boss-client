import { useEffect, useState } from "react"

const useManu = () => {
    const [manu, setmanu] = useState([])
    const [loding, setloding] = useState(true)
    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                setmanu(data)
                setloding(false)
            })
    }, [])
    return [manu,loding]
}

export default useManu;