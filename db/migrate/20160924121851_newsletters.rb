class Newsletters < ActiveRecord::Migration
  def change
    create_table :newsletters do |t|
      t.string :name
    end
  end
end
