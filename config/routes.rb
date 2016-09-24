Rails.application.routes.draw do

  get '/registration', :controller => :application, :action => :registration
  post '/registration', :controller => :application, :action => :registration_save
  root :controller => :application, :action => :registration

end
