Rails.application.routes.draw do
  
  #resources :users
  resources :users, only: [:create, :update, :index]

  post "/login", to: "auth#login"
   get "/auto_login", to: "auth#auto_login"
   get "/user_authorized", to: "auth#user_authorized"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
