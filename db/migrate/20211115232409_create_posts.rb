class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :title
      t.string :image
      t.integer :likes
      t.string :character_class

      t.timestamps
    end
  end
end
