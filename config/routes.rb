Rails.application.routes.draw do
  
  resources :posts, only: [:index, :show, :create,:destroy, :update]
  # patch "/posts/:id/like", to:"posts#increment_likes"
  resources :reviews
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
