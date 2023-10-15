"use client"
import React, { useEffect } from "react";
import NavButton from "./NavButton";
import { AccountCircle, Home, Info, Work } from "@mui/icons-material";
import { Menu, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

async function check(username, password) { // reakti yedim
    const res = (await axios.get("http://localhost:8000/auth", { params: { username: username, password: password }}));

    const status = res.data["status"];

    if (status === "ok") {
        return true;
    } else {
        return false;
    }
}

export default function Header({setIsAccOpen, setIsRegOpen, menu, username, password, open, routeDash, logout}) {

    const isAuth = check(username, password) ? true : false

    let content;

    if (isAuth) {
        content = [(<MenuItem key="panel" onClick={routeDash}>Panel</MenuItem>), (<MenuItem key="logout" onClick={logout}>Çıkış yap</MenuItem>)]                
    } else {
        content = [(<MenuItem key="login" onClick={setIsAccOpen}>Giriş yap</MenuItem>), (<MenuItem key="register" onClick={setIsRegOpen}>Kayıt ol</MenuItem>)]
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
                <button onClick={menu}>
                    <AccountCircle />
                </button>
                    <Menu key="menu" open={open}>
                        {content.map((x) => {
                            return x;
                        })}
                    </Menu>
            </div>
            
        </div>
    );
}