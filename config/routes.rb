Dev::Application.routes.draw do
  root to: 'high_voltage/pages#show', id: 'index'
  get '/:id' => 'pages#show', as: 'dev'
end
