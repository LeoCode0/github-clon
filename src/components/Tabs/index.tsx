import React from "react"

import styles from "./styles.module.css"

export const Tabs = () => {
  return (
    <>
      <nav className={styles.nav} >
        <a className={styles.link} href="/">Overview</a>
        <a className={styles.link} href="/">Repositories</a>
        <a className={styles.link} href="/">Projects</a>
        <a className={styles.link} href="/">Packages</a>
        <a className={styles.link} href="/">Stars</a>
      </nav>
      <button className={styles.button} type="button">New</button>
    </>
  )
}
