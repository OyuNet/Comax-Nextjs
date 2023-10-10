"use client"
import Header from "@/components/Header"
import LoginBox from "@/components/LoginBox";
import RegisterBox from "@/components/RegisterBox";
import { Divider } from "@mui/material"
import React from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isAccOpen, setIsAccOpen] = React.useState(false);
  const [isRegOpen, setIsRegOpen] = React.useState(false);
  const router = useRouter()

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [regUsername, setRegUsername] = React.useState("");
  const [regPassword, setRegPassword] = React.useState("");

  const [menuStatus, setMenuStatus] = React.useState(false);

  return (
    <main>
      <Header 
        setIsAccOpen={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true)
          isRegOpen ? setIsRegOpen(false) : null;
          isAccOpen ? setIsAccOpen(false) : null;
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
              return console.log("Pass length must be higher than 7.")
            }

            const res = await axios.get("http://localhost:8000/auth", { params: { username: `${username}`, password: `${password}` }})
            const status = res.status;

            status===200 ? localStorage.setItem("username", username) && localStorage.setItem("password", password) && router.push("/dashboard") : console.log("Auth failed.")
          }}
          clickToRegister={() => {setIsAccOpen(false); setIsRegOpen(true)}}
          watchUsername={(event) => {setUsername(event.target.value)}}
          watchPassword={(event) => {setPassword(event.target.value)}}
        />
        <RegisterBox 
          isRegVisible={isRegOpen}
          setIsRegOpen={() => {setIsRegOpen(false)}}
          clickRegister={async () => {
            const res = await axios.get("http://localhost:8000/register", { params: { username: `${regUsername}`, password: `${regPassword}` }})
            const status = res.status;

            status===200 ? setIsRegOpen(false) && setIsAccOpen(true) : console.log("Registration failed.")
          }}
          watchUsername={(event) => {setRegUsername(event.target.value)}}
          watchPassword={(event) => {setRegPassword(event.target.value)}}
        />
      </div>
    </main>
  )
}
