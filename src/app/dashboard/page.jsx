import React from "react";
import axios from "axios";
import NotFound from "@/components/404Page";
import Header from "@/components/Header";

export default function Page() {

    const isAuth = async () => {
        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        const res = await axios.get("/auth", { params: { username: username, password: password }})
        const status = res.status;

        if (status === 200) {
            return true;
        } else {
            return false;
        }
    }

    if (isAuth) {
        // Kayıtlı kullanıcıysa sayfa servis edilecek.

        return(
            <main>
                <Header />
                <div>Tebrikler! Login yapmışsın.</div>
            </main>
        )
    } else {
        // Kayıtlı kullanıcı değilse 404 sayfası servis edilecek. Belli bir süre sonunda sayfaya route edilecek.
        return(<NotFound />)
    }
}