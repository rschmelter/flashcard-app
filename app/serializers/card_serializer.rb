class CardSerializer < ActiveModel::Serializer
    attributes :front, :back, :difficulty

    belongs_to :deck

    

end