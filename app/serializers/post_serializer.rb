class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :image, :likes, :character_class
  belongs_to :user
  has_many :reviews
end
