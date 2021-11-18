class AddFavoritesToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :favorite, :boolean
  end
end
