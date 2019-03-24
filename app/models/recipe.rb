class Recipe < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_many :instructions, dependent: :destroy

  enum status: { cho_zubora: 0, zubora: 1 }
end
