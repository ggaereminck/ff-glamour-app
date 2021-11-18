# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: 'charlie', password: '123')

post1 = Post.create(user_id: 1,title: 'My christmas gear', image: 'https://onlinestore-img.finalfantasyxiv.com/onlinestore/item/976a2dbfe53785b6435840a146fab68409fc5ba171cfec55fd6fa13e6164ae28/0078/949b511f21a416ad4c3d361ed87772726afbd5910cd57ecea2232c22d9956143_m_list.jpg', character_class: 'Scholar', likes: 9, favorite: false )

review1 = Review.create(user_id: 1, post_id: 1, rating: 4, comment: 'This shit looks good')