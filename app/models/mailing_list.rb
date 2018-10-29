class MailingList < ApplicationRecord
  validates :email, presence: true
end