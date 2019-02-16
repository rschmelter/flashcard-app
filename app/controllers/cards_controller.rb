class CardsController < ApplicationController

    def index 
    
        deck = Deck.find(params[:deck_id].to_i)
        cards = deck.cards.all 

        render json: cards
    end

    def show
        card = Card.find(params[:id])
        render json: card
    end 

    def create
        deck = get_current_user.decks.find(params[:deck_id].to_i)
        card = deck.cards.build(card_params)
        card.save

        render json: card 
    end

    def destroy 
        card = Card.find(params[:id])
        card.destroy

        render json: card 

    end

    private

    def card_params
        params.require(:card).permit(:front, :back, :difficulty, :dek_id)

    end 

end 