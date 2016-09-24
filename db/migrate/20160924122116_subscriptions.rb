class Subscriptions < ActiveRecord::Migration
  def change
    create_table :newsletter_subscriptions do |t|
      t.integer :user_id
      t.integer :newsletter_id
    end
  end
end
