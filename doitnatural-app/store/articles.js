// const initialState = {
//     articles: false,
//     errors: false,
//   }
  
//   export const state = () => deepClone(initialState)
  
//   export const getters = {
//     [globalKeys.getters.SET_ARTICLES] (state, articles) {
//       return state.articles = articles
//     },
//     [globalKeys.getters.SELECTED_ARTICLE_BY_ID] (state) {
//       return state.article.find(({ id }) => id === state.selectedArticleId)
//     },
//   }
  
//   export const mutations = {
//     [globalKeys.mutations.SET_ARTICLES]: (state, brands) => {
//       state.brands = brands
//     },
//     [globalKeys.mutations.SELECTED_ARTICLE_BY_ID]: (state, selectedBrandId) => {
//       state.selectedBrandId = selectedBrandId
//     },
//     [globalKeys.mutations.START_LOADING]: (state) => {
//       state.loading = true
//     },
//     [globalKeys.mutations.STOP_LOADING]: (state) => {
//       state.loading = false
//     },
//     [globalKeys.mutations.CLEAN_ERRORS]: (state) => {
//       state.errors = false
//     },
//     [globalKeys.mutations.SET_ERRORS]: (state) => {
//       state.erros = true
//     },
//   }
  
//   export const actions = {
//   }