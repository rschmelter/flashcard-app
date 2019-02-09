
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
      body: JSON.stringify({user})
    }

  
  
    return dispatch => {

      fetch(`${ baseUrl }/login`, data)
        .then(response => response.json())
        .then(user => {
          sessionStorage.setItem('user', JSON.stringify({user}))
          debugger;
          dispatch({
            type: 'SET_USER',
            payload: user.current
          })
          callback()
  

        })
        .catch(err => err)
    }
  }


