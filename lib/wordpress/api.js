export const ALL_POSTS = `query allPosts {
    posts {
      nodes {
        id
        date
        slug
        title
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        excerpt
      }
    }
  }`