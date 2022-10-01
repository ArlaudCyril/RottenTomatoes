import React from 'react';
import Link from "next/link";
import { useState, useEffect } from 'react';

const navbar = () => {

  const [user, setUser] = useState({});

  useEffect(() => {
      // Perform localStorage action
      if(localStorage.getItem('user') != undefined)
      {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
      }
      //console.log(item);
    }, []);
  
  //console.log(user);

  function logout()
  {
    localStorage.removeItem("user");
    setUser({});
  }

  return (
    <div className="navbar bg-black">
      <div className=" flex-1 placeholder:font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/movies">
          <a className="text-base text-white md:text-2xl">Rotten
            <span className="text-red-600">Tomatoes</span>
          </a>
        </Link>
        
      </div>
      {/* <h1>{user.name}</h1> */}
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered text-white" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn flex items-center">
            <ul>
              <li className="text-base text-white md:text-1xl tracking-widest font-neue">Welcome</li>
              <li className="text-base text-red-600 md:text-1xl tracking-widest font-neue">{user.name}</li>
            </ul>
          </label>
          <ul tabIndex={0} className=" text-white mt-3 p-4 shadow menu menu-compact dropdown-content bg-black rounded-box w-52">
            {
              Object.keys(user).length === 0 &&
              
              <Link href="/login">
                <li><a className="justify-between">Login<span className="badge text-red-600">New</span></a></li>
              </Link>
            }
            {
              Object.keys(user).length !== 0 &&
              
              <li><a onClick={logout} className="justify-between">Logout<span className="badge text-red-600">New</span></a></li>
            }
            {
              user.is_admin == 1 &&
              
              <div>
                <Link href="/cruduser">
                  <li><a>Settings User<span className="badge text-red-600">Admin</span></a></li>
                </Link>

                <Link href="/crudmovies">
                  <li><a>Settings Movies<span className="badge text-red-600">Admin</span></a></li>
                </Link>
              </div>
            }
          </ul>
        </div>
      </div>
    </div>

  )
}

export default navbar