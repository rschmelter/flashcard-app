class DecksController < ApplicationController

    def index 
       decks = get_current_user.decks

        
       render json: decks
    end

    def show
        deck = Deck.find(params[:id])

        render json: deck

    end

    def create 
        
        
        deck = get_current_user.decks.build(deck_params)
        deck.save

        render json: deck
    end

    def destroy 
        deck = Deck.find(params[:id])
        deck.destroy

        render json: deck
    end 

    private

    def deck_params
        params.require(:deck).permit(:name, :count, :user_id)
    end

end 