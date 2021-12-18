const pageName = (state, action) => {
   switch (action.type) {
      case "NAME":
         return state = action.name
      default:
         return state = 'NewsFeed'
   }
}

export default pageName;