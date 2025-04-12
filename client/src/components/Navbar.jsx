import { useEffect, useState,  } from 'react'
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react';




const Navbar = () => {
    const [open, setOpen] = useState(false);

    const {getToken} = useAuth()

    useEffect(() => {
        getToken().then((token) =>  console.log(token));
    }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
       {/* LOGO */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold"> 
        <img src="logo.png" alt="logo" width={32} height={32}/>   
        <span>Blog</span>
         </Link>
        {/* MOBILE MENU */}
        <div className="md:hidden">
            {/* MOBILE BUTTON */}
            <div
                className="cursor-pointer text-4xl" 
                onClick={() => setOpen(!open)}
                > 
                {open ? "X" : "☰"}
            </div>
            {/* MOBILE LINK LIST */}
            <div className={`w-full h-screen bg-[#bae6ba] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
                >
                <Link to="/">🏠 Home</Link>
                <Link to="/">📈 Trending</Link>
                <Link to="/">🔥 Most Popular</Link>
                <Link to="/">ℹ️ About</Link>
                <Link to="/">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">🔑 Login </button>
            </Link>
            </div>
        </div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 xl:gap-16 font- medium">
            <Link to="/">🏠 Home</Link>
            <Link to="/">📈 Trending</Link>
            <Link to="/">🔥 Most Popular</Link>
            <Link to="/">ℹ️ About</Link>
            <SignedOut>
            <Link to="/Login">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    🔑 Login 
                </button>
            </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            
        </div>
    </div>
  )
}

export default Navbar