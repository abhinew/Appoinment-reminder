class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def registration

  end

  def registration_save
    user = User.new({
                        username: params[:username],
                        email: params[:email],
                        gender: params[:gender],
                        country: params[:country],
                        state: params[:state],
                        city: params[:city],
                        password: params[:password]
                    })
    user.save!
    render json: {
        success: true
    }
  end

end
