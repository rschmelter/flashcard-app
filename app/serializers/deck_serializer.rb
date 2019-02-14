class DeckSerializer < ActiveModel::Serializer
    attributes :id, :name, :count

    belongs_to :user
    has_many :cards
    

end