const userPost = (state = [], action) => {
   switch (action.type) {
      case "USERPOST":
         return state = action.data
      default:
         return state
   }
}
export default userPost;