import React from 'react'

import styles from "./styles.module.css"

type RepositoriesProps = {
  name: string,
  visibility: string,
  description: string,
  languages_url: string,
  updated_at: string|Date
}

const Repository = ({ name, visibility, description, updated_at }: RepositoriesProps) => (
  <li className={styles.item} >
    <div className={styles.header} >
      <a href="/" className={styles.link} >{name}</a>
      <span className={styles.visibility} >{visibility}</span>
    </div>
    <p className={styles.description}>{description}</p>
    <div className={styles.footer} >
      <p className={styles.update} >
        {updated_at}
      </p>
    </div>
  </li>
)

export const Repositories = ({ data }: { data: Array<RepositoriesProps>}) => {
  return (
    <ul className={styles.list} >
      {data.map(item => <Repository {...item} />)}
    </ul>
  )
}
