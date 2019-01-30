class UserSerializer < ActiveModel::Serializer
    attributes :username, :password

    has_many :decks

end