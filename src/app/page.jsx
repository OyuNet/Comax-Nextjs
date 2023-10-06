"use client"
import Header from "@/components/Header"
import LoginBox from "@/components/LoginBox";
import RegisterBox from "@/components/RegisterBox";
import { Divider } from "@mui/material"
import React from "react"

export default function Home() {
  const [isAccOpen, setIsAccOpen] = React.useState(false);
  const [isRegOpen, setIsRegOpen] = React.useState(false);

  return (
    <main>
      <Header 
        setIsAccOpen={() => {isAccOpen ? setIsAccOpen(false) : setIsAccOpen(true); console.log(isAccOpen)}}
      />
      <Divider />
      <div class="flex justify-center">
        <LoginBox
          isAccVisible={isAccOpen}
          setIsAccOpen={() => {isAccOpen ? setIsAccOpen(false) : setIsAccOpen(true); console.log(isAccOpen)}}
          clickLogin={() => {/* Login Things */}}
          clickToRegister={() => {setIsAccOpen(false); setIsRegOpen(true)}}
        />
        <RegisterBox 
          isRegVisible={isRegOpen}
          setIsRegOpen={() => {setIsRegOpen(false)}}
          clickRegister={() => {/* Register Things */}}
        />
      </div>
    </main>
  )
}
