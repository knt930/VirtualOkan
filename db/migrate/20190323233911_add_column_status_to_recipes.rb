class AddColumnStatusToRecipes < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :status, :integer, default: 0, after: :image
  end
end
