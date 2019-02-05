const baseUrl = 'http://localhost:3001'



export const signUpUser = (user) => {
    let data = {
        method: 'POST',
        headers: {
            'Accpet': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    }

    return dispatch => {
        fetch(`${baseUrl}/create`, data)
        .then(response => response.json())
        .then(user => {
            sessionStorage.setItem(user)
            dispatch({
                type: 'SET_USER',
                payload: user.current
            })
        })
    }



}