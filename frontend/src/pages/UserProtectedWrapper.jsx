import React, { useState } from 'react'
import { UserDataContext } from '../context/userContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const UserProtectedWrapper = ({children}) => {
const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = React.useContext(UserDataContext)
    const [IsLoading, setIsLoading] = useState(true)

    if (!token) {    
        navigate('/login')
    }
    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            setUser(response.data.user)
            setIsLoading(false)
        }
    }).catch(err => {
            console.log(err)
          localStorage.removeItem('token')
            navigate('/login')
    })
    if (IsLoading) {
        return <div>Loading...</div>
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper