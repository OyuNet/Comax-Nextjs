"use client"
import React, { useEffect } from "react";
import NavButton from "./NavButton";
import { AccountCircle, Home, Info, Work } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

async function check(isAuth, username, password) { // reakti yedim
    const status = await (await axios.get("/auth", { params: { username: username, password: password }})).status.catch((err) => {
        console.error(err)
    })

    isAuth = status === 200 ? true : false;
}

export default function Header({setIsAccOpen, setIsRegOpen, menu, username, password, open}) {

    const routeDash = () => {
        const router = useRouter();
        router.push("/dashboard")
    }

    const logout = () => {
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }

    let isAuth;

    check(isAuth, username, password);

    let content;

    if (isAuth) {
        content = (
            <>
                <MenuItem onClick={routeDash}>Panel</MenuItem>
                <MenuItem onClick={logout}>Çıkış yap</MenuItem>
            </>
        )
    } else {
        content = (
            <>
                <MenuItem onClick={setIsAccOpen}>Giriş yap</MenuItem>
                <MenuItem onClick={setIsRegOpen}>Kayıt ol</MenuItem>
            </>
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
                <button onClick={menu}>
                    <AccountCircle />
                </button>
                <div className="flex justify-end">
                    <Menu
                        open={open}
                    >
                        {content}
                    </Menu>
                </div>
            </div>
            
        </div>
    );
}