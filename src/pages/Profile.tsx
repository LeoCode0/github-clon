import React from 'react'

import { Header } from "../components/Header";
import { UserInformation } from "../components/UserInformation";
import { Repositories } from "../components/Repositories";

const data = {
  name: "Leonardo Espinoza",
  username: "LeoCode0",
  img: "https://picsum.photos/300",
  resume: "I have 4 dogs",
  contact: "contacto@leocode0.dev",
  site: "https://leocode0.dev",
  followers: 10,
  following: 16
}

export const Profile = () => {
  return (
    <>
      <Header />
      <UserInformation {...data} /> 
      <Repositories data={[{ name: "github_clon", visibility: "public", description: "Github clon", languages_url:"https://", updated_at:"2022" }]}  />
    </>
  )
}
