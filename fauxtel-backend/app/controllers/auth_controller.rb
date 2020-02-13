class AuthController < ApplicationController
    skip_before_action :require_login, only: [:login, :auto_login]

def login 
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
        payload = {user_id: user.id}
        token = encode_token(payload)
        render json: {user: user, jwt: token, success: "Time to relax, #{user.username}"}
    else
        render json: {failure: "No match for Username and Password combination, try again, or if needed, create a new account"}
    end
end


def auto_login
    if session_user
      render json: session_user
    else
      render json: {errors: "No User Logged In"}
    end
  end


  def user_authorized
    render json: {message: "You are authorized"}
  end













end 