class AddUniqueContraintToMailingList < ActiveRecord::Migration[5.2]
  def change
    remove_index :mailing_lists, :email
    add_index :mailing_lists, :email, unique: true
  end
end
