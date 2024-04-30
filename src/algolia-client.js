import algoliasearch from 'algoliasearch'

const ALGOLIA_APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID
const ALGOLIA_API_TOKEN = import.meta.env.VITE_ALGOLIA_API_TOKEN
const ALGOLIA_INDEX = import.meta.env.VITE_ALGOLIA_INDEX

const client = algoliasearch(ALGOLIA_APP_ID, "b92fceccc6d592c9e2fbe265811c1601")
const index = client.initIndex(ALGOLIA_INDEX)

export const getPostsData = async (query = '') => {
  try {
    const data = await index.search(query)
    return {
      posts: data.hits,
    }
  } catch (error) {
    return undefined
  }
}