class User < ApplicationRecord
    has_many :reservations
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    # validates :email, presence: true
    # validates :email, uniqueness: true

end
