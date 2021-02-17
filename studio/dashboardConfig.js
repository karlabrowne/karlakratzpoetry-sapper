export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602c758660b3e301581de8bf',
                  title: 'Sanity Studio',
                  name: 'karlakratzpoetry-sapper-studio',
                  apiId: '81c3cbb6-0cf2-4d32-b51f-d56cc07b4cf8'
                },
                {
                  buildHookId: '602c7586bea2ed00913f1368',
                  title: 'Blog Website',
                  name: 'karlakratzpoetry-sapper',
                  apiId: 'f49079e1-490c-41af-beb4-d643d3cad565'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karlabrowne/karlakratzpoetry-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://karlakratzpoetry-sapper.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
