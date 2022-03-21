import React from 'react'

import { Header } from "../components/Header";
import { UserInformation } from "../components/UserInformation";
import { Tabs } from "../components/Tabs";
import { Filters } from "../components/Filters";
import { Repositories } from "../components/Repositories";

const data = {
  name: "Leonardo Espinoza",
  username: "LeoCode0",
  img: "https://picsum.photos/300",
  resume: "I'm making a Github clon!",
  contact: "contacto@leocode0.dev",
  site: "https://leocode0.dev",
  followers: 10,
  following: 16
}

const dataRepositories = [
  { name: "github_clon", visibility: "public", description: "Github clon", languages_url:"https://", updated_at:"2022" },
  { name: "github_clon", visibility: "public", description: "Github clon", languages_url:"https://", updated_at:"2022" },
]

export const Profile = () => {
  return (
    <>
      <Header />
      <UserInformation {...data} /> 
      <Tabs />
      <Filters />
      <Repositories data={dataRepositories}  />
    </>
  )
}
