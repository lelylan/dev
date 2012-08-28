Dev::Application.routes.draw do
  root to: 'pages#show', id: 'index'
  match '*id' => 'pages#show', as: 'static', via: 'get'
end
