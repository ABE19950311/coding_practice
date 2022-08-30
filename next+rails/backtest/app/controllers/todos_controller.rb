class TodosController < ApplicationController
    def index
        @todo = Todo.all
        render json: @todo
    end

    def create
        @todo = Todo.create(todo_params)
        render json: @todo
    end
  
    def destroy
        @todo = Todo.find(params[:id])
        @todo.delete
        render json: @todo
    end

    def destroy_all
        @todo = Todo.destroy_all
        render json: @todo
    end

    private
      
    def todo_params
      params.require(:todo).permit(:name, :is_completed)
    end
end
