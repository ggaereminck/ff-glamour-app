class User < ApplicationRecord
    has_many :posts
    has_many :reviews, through: :posts

    has_secure_password
    validates :username, uniqueness: true
    validates :password, length: {minimum: 5}
end
