Dev::Application.routes.draw do
  devise_for :users, :controllers => { :sessions => "sessions" }

  root to: 'pages#show', id: 'index'
  match '*id' => 'pages#show', as: 'static', via: 'get'

end
