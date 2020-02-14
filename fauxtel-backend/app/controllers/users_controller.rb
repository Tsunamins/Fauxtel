class UsersController < ApplicationController
    skip_before_action :require_login, only: [:create, :update, :index, :show]

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if user.valid?
            @user.save

            render json: { status: :created, user: @user }

        else
            render json: { status: 500, errors: @user.errors.full_messages }
        end 
    end

    def update
    end

    private
    def user_params
        params.permit(:username, :password, :first_name, :last_name, :birthday, :phone_number, :address, :apt_suite_number, :city, :state, :zip_code, :favorite_food, :favorite_drink, :favorite_activity)
    end 

end
