class ChangeMailingListTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :mailing_list, :mailing_lists
  end
end
