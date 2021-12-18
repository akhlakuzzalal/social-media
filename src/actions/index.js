export const pageHolder = (name) => {
   return {
      type: 'NAME',
      name: name
   }
}

export const setPost = (data) => {
   return {
      type: 'NEWSFEED',
      data: data
   }
}


export const setUserPost = (data) => {
   return {
      type: 'USERPOST',
      data: data
   }
}

export const setUser = (data) => {
   return {
      type: 'SETUSER',
      data: data
   }
}

export const setLoading = (data) => {
   return {
      type: 'SETLOAD',
      value: data
   }
}