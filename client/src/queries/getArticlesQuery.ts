import { gql } from "graphql-tag";

export const GET_INITIAL_DATA = gql`
  query ProductList($id: [String!]!, $locale: Locale!, $urlParams:String){
    categories: productLists(ids: $id, locale: $locale, urlParams: $urlParams) {
        name
        articleCount
        childrenCategories: childrenProductLists {
          list {
            name
            urlPath
          }
        }
        categoryArticles: articlesList(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 1
            ) {
              path
            }
          }
        }
      }
  }
`;

export const GET_ARTICLES_DATA = gql`
  query ProductList($id: [String!]!, $locale: Locale!, $urlParams:String){
    categories: productLists(ids: $id, locale: $locale, urlParams: $urlParams) {
        name
        articleCount
        categoryArticles: articlesList(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 1
            ) {
              path
            }
          }
        }
      }
  }
`;