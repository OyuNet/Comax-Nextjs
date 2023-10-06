"use client"
import { useRouter } from "next/navigation";
import React from "react";

export default function NavButton({name, slug, icon}) {

    const router = useRouter();

    const route = () => {
        router.push(`${slug}`)
    }

    return(
        <button class="flex justify-center bg-gray-100 p-3 rounded-lg gap-1" onClick={route}>
            {icon}
            <p>{name}</p>
        </button>
    );
}