import React from 'react'
import { getDaysAgo } from "../../utilities/getDaysAgo";

import styles from "./styles.module.css"


type LanguesProps = {
  name: string,
  id: string,
  color: string
}

type RepositoriesProps = {
  name: string,
  visibility: string,
  description: string,
  languages: {
    nodes: Array<LanguesProps>
  },
  updatedAt: string,
  id: string
}

const Repository = ({ name, visibility, description, updatedAt, languages }: RepositoriesProps) => (
  <li className={styles.item} >
    <div className={styles.header} >
      <a href="/" className={styles.link} >{name}</a>
      <span className={styles.visibility} >{visibility}</span>
    </div>
    <p className={styles.description}>{description}</p>
    <div className={styles.footer} >
      {
        languages.nodes.map(language => <span key={language.id}>{language.name}</span> )
      }
      <p className={styles.update} >
        {getDaysAgo(updatedAt, Date.now())}
      </p>
    </div>
  </li>
)

export const Repositories = ({ data }: { data: { node: RepositoriesProps }[]}) => {
  return (
    <ul className={styles.list} >
      {data.map(item => {
        const { node }  = item
        return  <Repository {...node} key={node.id} />}
      )}
    </ul>
  )
}
