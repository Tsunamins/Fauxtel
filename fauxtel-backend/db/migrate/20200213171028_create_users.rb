class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.date :birthday
      t.string :phone_number
      t.string :address
      t.integer :apt_suite_number
      t.string :city
      t.string :state
      t.integer :zip_code
      t.string :favorite_food
      t.string :favorite_drink
      t.string :favorite_activity
      


      t.timestamps
    end
  end
end
