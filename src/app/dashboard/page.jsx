"use client"
import React, { useEffect } from "react";
import axios from "axios";
import NotFound from "@/components/404Page";
import Header from "@/components/Header";
import { Divider } from "@mui/material";
import LoginBox from "@/components/LoginBox";
import RegisterBox from "@/components/RegisterBox";

async function checkUser(username, password, setAuth) {
    const res = await axios.get("http://localhost:8000/auth", { params: { username: username, password: password }})
    const data = res.data;

    const status = data["status"]

    if (status === "ok") {
        setAuth(true);
    }
}

export default function Page() {

    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")

    const [auth, setAuth] = React.useState(false)
    const [menuStatus, setMenuStatus] = React.useState(false);
    const [isAccOpen, setIsAccOpen] = React.useState(false);
    const [isRegOpen, setIsRegOpen] = React.useState(false);

    checkUser(username, password, setAuth);

    if (auth) {
        // Kayıtlı kullanıcıysa sayfa servis edilecek.

        return (
            <main>
                <Header 
                    setIsRegOpen={() => {
                    if (isAccOpen) { setIsAccOpen(false) }
                    setMenuStatus(false)
                    setIsRegOpen(true)
                    }}
                    setIsAccOpen={() => {
                    if (isRegOpen) { setIsRegOpen(false) }
                    setMenuStatus(false)
                    setIsAccOpen(true)
                    }}
                    menu={() => {
                    menuStatus ? setMenuStatus(false) : setMenuStatus(true)
                    }}
                    open={menuStatus}
                />
                <Divider />
                <div className="flex justify-center">
                    <LoginBox
                    isAccVisible={isAccOpen}
                    setIsAccOpen={() => {isAccOpen ? setIsAccOpen(false) : setIsAccOpen(true); console.log(isAccOpen)}}
                    clickLogin={async () => {
                        if (password.length < 8) {
                        return console.error("Pass length must be higher than 7.")
                        }

                        const res = await axios.get("http://localhost:8000/auth", { params: { username: `${username}`, password: `${password}` }})
                        const data = res.data;

                        const status = data["status"]

                        if (status === "ok") {
                        localStorage.setItem("username", username)
                        localStorage.setItem("password", password)
                        router.push("/dashboard")
                        } else {
                        console.error("Auth error.")
                        }
                    }}
                    clickToRegister={() => {setIsAccOpen(false); setIsRegOpen(true)}}
                    watchUsername={(event) => {setUsername(event.target.value)}}
                    watchPassword={(event) => {setPassword(event.target.value)}}
                    />
                    <RegisterBox 
                    isRegVisible={isRegOpen}
                    setIsRegOpen={() => {setIsRegOpen(false)}}
                    clickRegister={async () => {
                        const res = await axios.get("http://localhost:8000/register", { params: { username: `${regUsername}`, password: `${regPassword}` }});
                        const data = res.data;

                        const status = data["status"]

                        status==="ok" ? setIsRegOpen(false) && setIsAccOpen(true) : console.log("Registration failed.");
                    }}
                    watchUsername={(event) => {setRegUsername(event.target.value)}}
                    watchPassword={(event) => {setRegPassword(event.target.value)}}
                    />
                </div>
                <div>Hoş Geldin {username}</div>
            </main>
        )
    } else {
        // Kayıtlı kullanıcı değilse 404 sayfası servis edilecek. Belli bir süre sonunda sayfaya route edilecek.
        return (<NotFound />)
    }
}