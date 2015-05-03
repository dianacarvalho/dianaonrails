class WelcomeController < ApplicationController
	def index
		@contact = Contact.new
	end

	def send_mail
	    name = params[:name]
	    email = params[:email]
	    body = params[:message]
	    ContactMailer.contact_email(name, email, body).deliver
	    redirect_to '/'
	end
end	