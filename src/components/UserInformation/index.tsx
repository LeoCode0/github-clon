import React from "react"

import styles from "./styles.module.css";
import { MdMailOutline, MdLink, MdGroup } from "react-icons/md";

import { Achievments } from '../Achievements'

type User = {
  name: string,
  username: string,
  contact?: string,
  img: string,
  resume: string,
  site: string,
  followers: string|number,
  following: string|number
}

export const UserInformation = ({ name, username, img, resume, contact, site, followers, following }: User) => {
  return (
    <section className={styles.userInformation} >
      <div className={styles.userDetails} >
         <img src={img} alt={name} className={styles.image} />
        <div>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.username}>{username}</h3>
        </div>
      </div>
      <div className={styles.status} >
        <span>🔴 Focusing</span>
      </div>
      <p className={styles.resume} >
        {resume}
      </p>
       <button className={styles.button} >Edit profile</button>
      { contact && <a href="/" className={styles.link}><span className={styles.icon}><MdMailOutline /></span> {contact} </a>}
      <a href="/" className={styles.link}><span className={styles.icon}><MdLink /></span> {site}</a>
      <div className={styles.metrics} >
        <span className={styles.icon}><MdGroup /></span>
        <p><span className={styles.number} >{followers}</span> Followers</p>
        <p><span className={styles.number} >{following}</span> Following</p>
      </div>
      <Achievments items={[{ name: "Badge", img: "https://picsum.photos/500", url: "/" }]}  />
    </section>
  )
}
