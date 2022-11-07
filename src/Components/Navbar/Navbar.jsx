import React, { useState, useEffect } from "react";
import './Navbar.css';
import '../common.css'

import { useNavigate } from "react-router-dom";


const Loginprofile = () => {

  const navigate = useNavigate();

  const signout = () =>{
    localStorage.removeItem('emailid');
    localStorage.removeItem('username');
    navigate("/");
  }

  if (localStorage.getItem("emailid") == null) {
    return (
      <>
        <div class=" py-1 px-3 p-small login_border cursor_pointer ">
          <a href="/login" style={{ "color": "black" }}>Login</a>
        </div>
        <div class=" py-1 px-3 p-small login_border cursor_pointer mx-2">
          <a href="/register" style={{ "color": "black" }}>Signup</a>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div class=" py-1 px-3 p-small login_border cursor_pointer ">
          <a href="/profile" style={{ "color": "black" }}>My Resume</a>
        </div>
        <div class=" py-1 px-3 p-small  cursor_pointer text-danger" onClick={signout}>
          logout  <i class="fa fa-sign-out px-2" aria-hidden="true"></i>
        </div>
      </>
    )
  }
}

const Navbar = () => {


  const printDocument = () => {
    window.print();

  }
  return (


    <>
      <div id="navbar" class=" outerNavbar " >
        <div class=" innerNavbar" >
          <div class=" container ">
            <div class=" row py-2 ">

              <div class=" col-lg-4 ">
                <a class="cursor_pointer" href="/"><h3 style={{ "color": "#3c4852" }}> Resume Maker </h3></a>
              </div>

              <div class=" col-lg-8 ">
                <div class=" d-flex flex-row navbar_option ">
                  <div class=" py-1 px-3 p-small cursor_pointer">
                    About
                  </div>
                  <div class=" py-1 px-3 p-small cursor_pointer ">
                    <a href="/#learn" style={{ "color": "#7e898a" }}>Learn </a>
                  </div>

                  <Loginprofile />

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>




    </>
  )
}




export default Navbar;