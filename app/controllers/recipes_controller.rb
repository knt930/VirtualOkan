class RecipesController < ApplicationController
  def index
    @recipes = Recipe.order("RAND()").limit(4)
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def search
    @ingredients = Ingredient.all
  end
end
