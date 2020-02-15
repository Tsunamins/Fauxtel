class ApplicationController < ActionController::API
       before_action :require_login
       #helper_method :current_user, :logged_in? 

    private

    def current_user
        #@current_user ||= User.find(session[:user_id]) if session[:user_id]
        User.find_by(id: session[:user_id])
    end

    def logged_in?
        !!current_user
    end

    def require_login
        render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
    end
end
