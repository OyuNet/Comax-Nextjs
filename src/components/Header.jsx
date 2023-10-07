"use client"
import React from "react";
import NavButton from "./NavButton";
import { AccountCircle, Home, Info, Work } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import axios from "axios";

export default function Header({setIsAccOpen, menuOpen, username, password}) {

    const logout = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }

    const isAuth = async () => { 
        const res = await axios.get("/auth", { params: { username: username, password: password }})
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }

    let content;

    if (isAuth) {
        content = (
            <MenuItem></MenuItem>
        )
    }

    return(
        <div className="flex p-4 gap-5 bg-cyan-300 text-center">
            <h1 className="self-center">Comax</h1>
            <div className="flex gap-4 self-center grow justify-center">
                <NavButton
                    name="Ana Sayfa"
                    slug="/"
                    icon={<Home />}
                />

                <NavButton 
                    name="Projelerimiz"
                    slug="/projects"
                    icon={<Work />}
                />

                <NavButton
                    name="Hakkımızda"
                    slug="/about-us"
                    icon={<Info />}
                />
            </div>

            <div className="self-center">
                <button onClick={setIsAccOpen}>
                    <AccountCircle />
                </button>
                <Menu
                    open={menuOpen}
                >
                    {}
                </Menu>
            </div>
            
        </div>
    );
}