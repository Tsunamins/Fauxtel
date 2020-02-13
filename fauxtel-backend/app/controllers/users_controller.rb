class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create, :update, :index]

    def index
        @users = User.all
        render json: @users
    end

    def create
        user = User.create(user_params)
        if user.valid?
            payload = {user_id: user.id} #payload object created with user id, can have more keys
            token = encode_token(payload) #payload object passed into encode_token method (def in application_controller)
            render json: {user: user, jwt: token}
        else
            data = { errors: [] }
            data[:errors] << user.errors.full_messages
            render json: data, status: :unprocessable_entity
            #render json: {errors: user.errors.full_messages}, status :not_acceptable

        end 
    end

    def update
    end

    private
    def user_params
        params.permit(:username, :password, :first_name, :last_name, :birthday, :phone_number, :address, :apt_suite_number, :city, :state, :zip_code, :favorite_food, :favorite_drink, :favorite_activity)
    end 

end
