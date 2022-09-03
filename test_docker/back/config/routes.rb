Rails.application.routes.draw do
  delete "/testcon/alldelete", to: "testcon#destroy_all"
  resources :testcon
end
