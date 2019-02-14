class CardSerializer < ActiveModel::Serializer
    attributes :id, :front, :back, :difficulty

    belongs_to :deck

    

end