import React from "react";
import Link from "next/link";

export default function Custom404()  {
    return(
        <>
         <h1>404 - Country not found</h1>
        <p>Oops! The country you`re looking for doesn’t seem to exist.</p>

        <Link href="/">Back to Home</Link>
        </>
       
    )
}