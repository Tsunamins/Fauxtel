class SessionsController < ApplicationController
    skip_before_action :require_login
    

    def create
        #have to check in this general manner, or else doesn't try to make sure password actually matches the user
        @user = User.find_by(username: params[:user][:username])
            if @user && @user.authenticate(params[:user][:password])
                session[:user_id] = @user.id
                render json: { logged_in: true, user: @user }
            else
                render json: { status: 401, errors: ['No match for username and password', 'try again or sign up'] }
            end    
      end

     

      def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
      end

     

end   