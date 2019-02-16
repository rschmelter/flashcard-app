const baseUrl = 'http://localhost:3001'

export const fetchCards = id => {
    let parse = JSON.parse(sessionStorage.getItem('user'))
    
    let userId = parse.id
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json',
            'Authorization': userId
        }
    }
   
    return dispatch => {
        fetch(`${baseUrl}/decks/${id}/cards`, data)
        .then(response => response.json())
        .then(cards => {
            dispatch({
                type: 'FETCH_CARDS',
                payload: cards
            })
        })
        .catch(err => err)
    }

}