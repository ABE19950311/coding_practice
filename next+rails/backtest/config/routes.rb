Rails.application.routes.draw do
  delete "/todos/alldelete", to: "todos#destroy_all"
  resources :todos
end
