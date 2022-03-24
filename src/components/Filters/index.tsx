import React from 'react'

import styles from "./styles.module.css"

export const Filters = () => {
  return (
    <form className={styles.form} >
      <input className={styles.input} type="text" placeholder='Find a repository...' />
      <div className={styles.select_container} >
        <select name="type" className={styles.select} >
          <option defaultValue="" value="">Type</option>
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <select name="language" className={styles.select} >
          <option defaultValue="" value="" >Language</option>
          <option value="html">Html</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
        </select>
        <select name="sort" className={styles.select} >
          <option defaultValue="" value="">Sort</option>
          <option value="updated">Last updated</option>
          <option value="name">Name</option>
          <option value="stars">Stars</option>
        </select>
      </div>
    </form>
  )
}
