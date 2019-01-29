class User < ApplicationRecord
    has_many :decks

    validates :username, uniqueness: true

end
