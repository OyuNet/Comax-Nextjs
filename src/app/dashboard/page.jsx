"use client"
import React, { useEffect } from "react";
import axios from "axios";
import NotFound from "@/components/404Page";
import Header from "@/components/Header";

export default function Page() {

    const username = localStorage.getItem("username")
    const password = localStorage.getItem("password")

    const [auth, setAuth] = React.useState(false)

    useEffect(() => {
        const isAuth = async () => {

            const res = await axios.get("/auth", { params: { username: username, password: password }}).catch((err) => {
                console.log("Axios hatası: ", err)
            })
            const status = res.status;
    
            if (status === 200) {
                setAuth(true)
            } else {
                setAuth(false)
            }
        }

        isAuth();
    }, [username, password]);

    

    if (auth) {
        // Kayıtlı kullanıcıysa sayfa servis edilecek.

        return (
            <main>
                <Header />
                <div>Hoş Geldin {username}</div>
            </main>
        )
    } else {
        // Kayıtlı kullanıcı değilse 404 sayfası servis edilecek. Belli bir süre sonunda sayfaya route edilecek.
        return (<NotFound />)
    }
}