import React from 'react'

import { Header } from "../components/Header";
import { UserInformation } from "../components/UserInformation";
import { Tabs } from "../components/Tabs";
import { Filters } from "../components/Filters";
import { Repositories } from "../components/Repositories";

import { gql, useQuery } from "@apollo/client";

interface ProfileInfo {
  viewer: {
    login: string,
    bio: string,
    avatarUrl: string,
    email: string,
    location: string,
    name: string,
    twitterUsername: string,
    url: string,
    websiteUrl: string,
    followers: {
      totalCount: string
    },
    following: {
      totalCount: string
    }
  }
}

const PROFILE = gql`
{
  viewer {
    login
    bio
    avatarUrl
    email
    location
    name
    twitterUsername
    url
    websiteUrl
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
}
`

interface Repositories {
  viewer: {
    edges: {
      node: {
        id: string,
        description: string,
        name: string,
        url: string,
        updatedAt: string,
        visibility: string,
        languages: {
          nodes: {
            name: string,
            id: string,
            color: string
          }
        }
      }
    }
  }
}

const REPOSITORIES = gql`
{
  viewer {
    repositories(
      privacy: PUBLIC
      orderBy: {field: UPDATED_AT, direction: DESC}
      first: 10
    ) {
      edges {
        node {
          id
          description
          name
          url
          updatedAt
          visibility
          languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
            nodes {
              name
              id
              color
            }
          }
        }
      }
    }
  }
}
`

export const Profile = () => {
  const { data: { viewer: userData } = {},  loading: loadingProfile, } = useQuery<ProfileInfo>(PROFILE)
  const { data: { viewer: userRepositories } = {}, loading: loadingRepositories } = useQuery(REPOSITORIES)

  if(loadingProfile || loadingRepositories ){
    return <h1>Loading</h1>
  }

  if(userData && userRepositories){
    return (
      <>
        <Header />
        <UserInformation
          name={userData.name}
          username={userData.login} 
          img={userData.avatarUrl} 
          resume={userData.bio} 
          site={userData.websiteUrl} 
          followers={userData.followers.totalCount} 
          following={userData.following.totalCount} 
          contact={userData.email}
        /> 
        <Tabs />
        <Filters />
        <Repositories data={userRepositories.repositories.edges}  />
      </>
    )
  }

}
