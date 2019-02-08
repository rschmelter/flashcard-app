Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


    post '/signup', to: 'application#signup'
    post '/login', to: 'application#login'
    resources :users, only: [:show]
    
      resources :decks do
        resources :cards
      end



    

end
