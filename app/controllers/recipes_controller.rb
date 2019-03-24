class RecipesController < ApplicationController
  def index
    if params[:ingredient1].nil?
      @recipes = Recipe.order("RAND()").limit(10)
    else
      @recipes = Recipe.joins(:ingredients).where(ingredients: {name: params[:ingredient1]})
                     .or(Recipe.joins(:ingredients).where(ingredients: {name: params[:ingredient2]}))
                     .or(Recipe.joins(:ingredients).where(ingredients: {name: params[:ingredient3]}))
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def search
    @ingredients = Ingredient.all
  end
end
