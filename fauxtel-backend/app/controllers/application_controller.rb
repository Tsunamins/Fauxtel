class ApplicationController < ActionController::API

    def encode_token(payload)
        JWT.encode(payload, 'hotel_secret')
    end
end
