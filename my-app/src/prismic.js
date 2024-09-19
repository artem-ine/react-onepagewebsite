import * as prismic from '@prismicio/client'

export const repositoryName = 'react-onepagewebsite'

export const client = prismic.createClient(repositoryName, {

  routes: [
    {
        type: 'home',
        path: '/',
      },  
  ],
})