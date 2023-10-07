import React from "react";
import { Paper, TextField, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function RegisterBox({isRegVisible, setIsRegOpen, clickRegister, watchUsername, watchPassword}) {

    return(
        <div>
            {isRegVisible && <Paper className="rounded-md bg-green-200 p-4 m-4 backdrop-blur-md">
                <div>
                    <div className="flex">
                        <button onClick={setIsRegOpen}>
                            <ArrowBack />
                        </button>
                        <h1 className="grow text-center">Aramıza Hoş Geldin!</h1>
                    </div>

                    <div className="m-4 grid grid-cols-1 gap-2 justify-center">
                        <TextField label="Kullanıcı Adınız" required type="username" onChange={watchUsername}/>
                        <TextField label="Şifreniz" required type="password" onChange={watchPassword}/>
                        <Button variant="outlined" style={{ margin: "0px 75px" }} onClick={clickRegister}>Kayıt Ol</Button>
                    </div>
                </div>
                </Paper>}
        </div>
    )
}