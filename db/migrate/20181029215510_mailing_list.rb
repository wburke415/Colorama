class MailingList < ActiveRecord::Migration[5.2]
  def change
    create_table :mailing_list do |t|
      t.string :email, null: false
      t.timestamps
    end

    add_index :mailing_list, :email
  end
end
