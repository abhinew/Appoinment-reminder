class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.integer :gender
      t.string :country
      t.string :state
      t.string :city
      t.string :password
    end
  end
end
