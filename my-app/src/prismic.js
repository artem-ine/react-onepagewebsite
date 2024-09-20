import * as prismic from '@prismicio/client'

export const repositoryName = 'react-onepagewebsite'

export const client = prismic.createClient(repositoryName, {

  accessToken: "",

  routes: [
    {
        type: 'home',
        path: '/',
      },  
  ],
})