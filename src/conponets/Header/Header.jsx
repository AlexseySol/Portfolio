import React from "react"
import header from "./Header.module.scss"




 export const Header = ()=>{
    return(
        <div className={header.wrapper}>
            <ul className={header.nav}>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            
        </div>
    )
}