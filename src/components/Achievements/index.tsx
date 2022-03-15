import React from 'react'

import styles from "./styles.module.css";

type AchievmentTypes = {
  url: string, 
  img: string, 
  name: string
}

const Achievment = ({ url, img, name }: AchievmentTypes) => (
  <li className={styles.item} >
    <a href={url}>
      <img src={img} alt={name} />
    </a>
  </li>
)

export const Achievments = ({ items } : { items: Array<AchievmentTypes> }) => {
  return (
    <div>
      <h2 className={styles.title}>Achievments</h2>
      <ul className={styles.list}>
        {items.map(item => <Achievment {...item} />)}
      </ul>
    </div>
  )
}
