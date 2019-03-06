# README


# Introduction
This is my first React-Redux application. It was built using a Rails API to persist flashcard decks and cards.

# Installation
Fork the repository. Then bundle install, rake db:migrate, and npm install. For the time being the Rails and Client servers need to be run on different ports.

# Contributors Guide
This was an educational project, and I appreciate any feedback or submissions for pull requests.

# Licensing
This project has been licensed under the MIT open source license.

<button onClick={() => this.props.sort}>Sort Cards</button>



        function sort(cardsForSort) {
            cardsForSort.sort(function(a, b) {
            return a.front > b.front;
        })
    }


        sortCards = cards => {
        cards.sort(function(a, b) {
            return a.front > b.front;
        })
    }



    const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCards: () => {
            dispatch(fetchCards(ownProps.deckId))
        },
        sortCards: () => {
            dispatch(sortCards)
        }        
    }
}