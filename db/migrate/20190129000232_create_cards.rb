class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :front
      t.string :back
      t.integer :difficulty

      t.timestamps
    end
  end
end
