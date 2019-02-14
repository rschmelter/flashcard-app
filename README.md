# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
test
Test
Test

<!-- JSON.parse(sessionStorage.getItem('user'))["user"]["id"] -->

<!-- 

export const signUp = user => {
    return dispatch => {
        return fetch(`${baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(user => {
            sessionStorage.setItem(user.id, user)
            dispatch({
                type: 'SET_USER',
                payload: user.current
            })
        })
    }
} -->

<!-- sessionStorage.getItem('user')
sessionStorage.removeItem('user')

if(sessionStorage.getItem('user')) return <component/> -->