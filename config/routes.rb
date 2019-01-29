Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



  resources :users
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  get '/logout', to: 'applicaiton#logout'

  resources :decks do
    resources :cards
  end




end
