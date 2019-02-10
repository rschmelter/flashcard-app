
const baseUrl = 'http://localhost:3001'


export const signUp = (user, callback) => {
    
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

  
  
    return dispatch => {

      fetch(`${ baseUrl }/signup`, data)
        .then(response => response.json())
        .then(user => {
          sessionStorage.setItem('user', user)
            
          dispatch({
            type: 'SET_USER',
            payload: user.current
          })
  
          callback()
        })
        .catch(err => err)
    }
  }

  export const login = (user, callback) => {
    
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }

  
  
    return dispatch => {

      fetch(`${ baseUrl }/login`, data)
        .then(response => response.json())
        .then(user => {
          sessionStorage.setItem('user', JSON.stringify(user))


          dispatch({
            type: 'SET_USER',
            payload: user
          })
          callback()
  

        })
        .catch(err => err)
    }
  }

  export const fetchUser = () => {
    let parse = JSON.parse(sessionStorage.getItem('user'))
    
    let id = parse.id
    let data = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': id
      },

    }

  
  
    return dispatch => {

      fetch(`${ baseUrl }/users/${id}`, data)
        .then(response => response.json())
        .then(user => { 
          sessionStorage.setItem('user', JSON.stringify(user))

          dispatch({
            type: 'SET_USER',
            payload: user
            
          })
  
  

        })
        .catch(err => err)
    }
  }






