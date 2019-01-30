class DeckSerializer < ActiveModel::Serializer
    attributes :name, :count

    belongs_to :user
    has_many :cards
    

end