const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '6h5c9vur',
  dataset: 'slides',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})

module.exports = client