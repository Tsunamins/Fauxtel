class AuthController < ApplicationController


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















end 