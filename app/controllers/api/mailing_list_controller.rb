class Api::MailingListController < ApplicationController

  def create
    @mailing_list = MailingList.new(mailing_list_params)    

    if @mailing_list.save
      render json: ['Success'], status: 200
    else
      render json: @mailing_list.errors.full_messages, status: 422
    end
  end

  private

  def mailing_list_params
    params.require(:email).permit(:email)
  end
  
end