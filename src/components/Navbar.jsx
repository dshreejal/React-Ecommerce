import React, { useState, useEffect, useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscSignIn, VscSignOut } from 'react-icons/vsc'
import logo from '../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection, getCountFromServer } from "firebase/firestore";
import { db, } from "../firebase/config"
const Navbar = () => {

    const [count, setCount] = useState(0);
    let a
    const uid = localStorage.getItem('uid')
    const getCount = async () => {
        const colRef = collection(db, `${"cart-"}${uid}`);
        const snapshot = await getCountFromServer(colRef)
        setCount(snapshot.data().count)
        a = count
    }

    useEffect(() => {
        getCount()
    }, [])

    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-between items-center p-4 z-[100] w-full bg-[#081621] h-[10vh]'>
            <NavLink to='/'>
                <h1 className=' cursor-pointer flex justify-center items-center'><img src={logo} alt="logo" className='w-10' /></h1>
            </NavLink>
            <div className='flex'>
                {user ?
                    <NavLink to='/cart' className='px-1 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center  hover:scale-110 '>
                        <AiOutlineShoppingCart /> Cart
                        <span className='text-white relative bottom-3 bg-red-400 rounded-lg px-1 py text-sm'>{count}</span>
                    </NavLink>
                    : <Link to='/signin' className='px-1 py-2 cursor-pointer text-white  pl-4 flex  gap-1 items-center justify-center  hover:scale-110 '>
                        <AiOutlineShoppingCart /> Cart
                        <span className='text-white relative bottom-3 bg-red-400 rounded-lg px-1 py text-sm'>0</span>
                    </Link>}
                <button to='/signin' className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center  hover:scale-110'>
                    {user ? <Link to="/" onClick={() => auth.signOut(auth)} className='flex items-center justify-center gap-1 hover:text-[#A167A5]'><VscSignOut />Sign Out</Link> : <NavLink to='/signin' className='flex items-center justify-center gap-1'><VscSignIn />Sign In</NavLink>}
                </button>
            </div>
        </div>
    )
}

export default Navbar