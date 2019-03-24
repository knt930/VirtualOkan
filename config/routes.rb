Rails.application.routes.draw do
  root to: 'recipes#index'
  resources :recipes, only: %i[show]
  get 'search', to: 'recipes#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
