class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :rating, :comment
end
