const user = (state = {}, action) => {
   switch (action.type) {
      case 'SETUSER':
         return state = action.data
      default:
         return state
   }
}
export default user;