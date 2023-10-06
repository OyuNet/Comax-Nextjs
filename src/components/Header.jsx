"use client"
import React from "react";
import NavButton from "./NavButton";
import { AccountCircle, Home, Info, Work } from "@mui/icons-material";

export default function Header({setIsAccOpen}) {

    return(
        <div class="flex p-4 gap-5 bg-cyan-300 text-center">
            <h1 class="self-center">Comax</h1>
            <div class="flex gap-4 self-center grow justify-center">
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

            <div class="self-center">
                <button onClick={setIsAccOpen}>
                    <AccountCircle />
                </button>
            </div>
            
        </div>
    );
}