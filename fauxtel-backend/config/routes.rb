Rails.application.routes.draw do
  
  resources :users
  #resource :users, only: [:create]

  post "/login", to: "auth#login"
   get "/auto_login", to: "auth#auto_login"
   get "/user_is_authed", to: "auth#user_is_authed"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end