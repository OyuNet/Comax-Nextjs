import { ArrowBack } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import React from "react";

export default function LoginBox({ isAccVisible, setIsAccOpen }) {

    return(
        <div>
            {isAccVisible && <Paper class="rounded-md bg-gray-200 p-4 m-4 w-1/4">
                <div>
                    <div class="flex">
                        <button onClick={setIsAccOpen}>
                            <ArrowBack />
                        </button>
                        <h1 class="grow text-center">Tekrar Hoş Geldin!</h1>
                    </div>

                    <div class="m-4 grid grid-cols-1 gap-2 justify-center">
                        <TextField label="Kullanıcı Adınız" required type="username"/>
                        <TextField label="Şifreniz" required type="password"/>
                        <Button variant="outlined" style={{ margin: "0px 75px" }}>Giriş Yap</Button>

                        <p class="text-center" onClick={() => {console.log("Buraya register sayfasını açma şeysini ekleyeceğim.")}}>Kayıtlı değil misin?</p>
                    </div>
                </div>
                </Paper>}
        </div>
    )
}