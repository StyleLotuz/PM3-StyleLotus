import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/appointmentReducer'

export default function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutUserFn = () => {
        dispatch(logoutUser())
    }

    return (
        <button onClick={() => logoutUserFn()}>LogoutBtn</button>
    )
}
