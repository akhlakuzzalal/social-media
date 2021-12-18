const loading = (state = false, action) => {
   switch (action.type) {
      case 'SETLOAD':
         return state = action.value
      default:
         return state
   }
}
export default loading;