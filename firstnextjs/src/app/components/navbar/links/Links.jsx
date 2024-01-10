"use client";

import Link from "next/link";
import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";



const links = [

    {
        title: "HomePage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    }

]

const Links = () => {


    const [open, setOpen] = useState(false)

    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (

        <div className={styles.container}>    

            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} />
                ))
                }
                {

                    // session - if login ( agr admin h to kuch aur aur ni h to kuch aur )
                    session ? (
                        <>
                            {isAdmin && (<NavLink item={{ title: "Admin", path: "/admin" }} />)}
                            <button className={styles.logout}>Logout</button>
                        </>
                    )
                        // if not login 
                        : (
                            <NavLink item={{ title: "Login", path: "/login" }} />)

                }

            </div>

            
            <Image 
            className={styles.menuButton}
             src="/menu.png"
              alt=""
            onClick={() => setOpen((prev) => !prev) } 
            width={30}
             height={30}
             
             />


            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};






export default Links;