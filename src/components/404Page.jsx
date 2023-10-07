import React from "react";
import Header from "./Header";

export default function NotFound() {

    return(
        <main>
            <Header />
            <div className="grid grid-col-1 m-6">
                <h1>Kaybolmuş Gibisin?</h1>
                <h1>404 Not Found</h1>
            </div>
        </main>
    )
}