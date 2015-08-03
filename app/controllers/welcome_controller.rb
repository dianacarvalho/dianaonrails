class WelcomeController < ApplicationController
	

	def send_mail
	    name = params[:name]
	    email = params[:email]
	    body = params[:message]
	    ContactMailer.contact_email(name, email, body).deliver
	    redirect_to '/#contacts', flash:{success: "Your message has been sent. I will get in touch as soon as possible.Thank you!"}
	end
end	