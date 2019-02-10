
const baseUrl = 'http://localhost:3001'


export const createDeck = (deck) => {
    let parse = JSON.parse(sessionStorage.getItem('user'))
    
    let id = parse.id
    let data = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': id
      },
      body: JSON.stringify(deck)
    }

  
  
    return dispatch => {

      fetch(`${ baseUrl }/decks`, data)
        .then(response => response.json())
        .then(deck =>            
          dispatch({
            type: 'CREATE_DECK',
            payload: deck
          })  

        )
        .catch(err => err)
    }
  }