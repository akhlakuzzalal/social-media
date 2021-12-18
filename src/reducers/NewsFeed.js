const NewsFeed = (state = [], action) => {
   switch (action.type) {
      case "NEWSFEED":
         return state = action.data
      default:
         return state
   }
}
export default NewsFeed;