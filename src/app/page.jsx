"use client"
import Header from "@/components/Header"
import LoginBox from "@/components/LoginBox";
import { Divider } from "@mui/material"
import React from "react"

export default function Home() {
  const [isAccOpen, setIsAccOpen] = React.useState(false);

  return (
    <main>
      <Header 
        setIsAccOpen={() => {isAccOpen ? setIsAccOpen(false) : setIsAccOpen(true); console.log(isAccOpen)}}
      />
      <Divider />
      <div class="">
        <LoginBox
          isAccVisible={isAccOpen}
          setIsAccOpen={() => {isAccOpen ? setIsAccOpen(false) : setIsAccOpen(true); console.log(isAccOpen)}}
        />
      </div>
    </main>
  )
}
