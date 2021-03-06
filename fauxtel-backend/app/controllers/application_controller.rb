class ApplicationController < ActionController::API
    before_action :require_login

    #will generate token from .encode
    def encode_token(payload)
        JWT.encode(payload, Rails.application.secrets.secret_key_base) #encode a JWT build in func params are (payload, and a string repr secret)
    end

    #checks for requests with headers of authorization, used in decoded_token below
    def auth_header
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1] #split here bc will return a string with more than jwt-token, but only jwt-token is needed
            begin
                JWT.decode(token, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
            rescue JWT::DecodeError
                []
            end
        end
    end

    def session_user
        decoded_hash = decoded_token
        if !decoded_hash.empty? 
            puts decoded_hash.class
            user_id = decoded_hash[0]['user_id']
            @user = User.find_by(id: user_id)
        else
            nil 
        end
    end

    def logged_in?
        !!session_user
    end

    def require_login
        render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
    end
end
