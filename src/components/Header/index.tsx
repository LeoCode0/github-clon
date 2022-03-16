import React from "react"

import styles from "./styles.module.css";

import { MdMenu, MdNotificationsNone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <header className={styles.header} >
      <button className={styles.button}><MdMenu color="#FFF" /></button>
      <a href="/"><span><FaGithub color="#FFF" /></span></a>
      <a href="/"><span><MdNotificationsNone color="#FFF" /></span></a>
    </header>
  )
}
