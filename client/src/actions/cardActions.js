const baseUrl = 'http://localhost:3001'

export const fetchCards = id => {
    let data = {
        method: 'GET',
        headers: {
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        }
    }

    return dispatch => {
        fetch(`${baseUrl}decks/${id}/cards`, data)
        .then(response => response.json())
        .then(cards => {
            dispatch({
                type: 'FETCH-CARDS',
                payload: cards
            })
        })
        .catch(err => err)
    }

}