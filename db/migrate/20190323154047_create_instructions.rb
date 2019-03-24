class CreateInstructions < ActiveRecord::Migration[5.2]
  def change
    create_table :instructions do |t|
      t.string :body
      t.integer :sort_order
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
