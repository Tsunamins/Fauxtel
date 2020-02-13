class ApplicationController < ActionController::API
    before_action :require_login
    
    def encode_token(payload)
        JWT.encode(payload, 'hotel_secret')
    end








    def require_login
        render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
       end
end
