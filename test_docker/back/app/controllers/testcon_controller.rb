class TestconController < ApplicationController
    def index
        @todo = Test.all
        render json: @todo
    end

    def create
        @todo = Test.create(test_params)
        render json: @todo
    end
  
    def destroy
        @todo = Test.find(params[:id])
        @todo.delete
        render json: @todo
    end

    def destroy_all
        @todo = Test.destroy_all
        render json: @todo
    end

    private
      
    def test_params
      params.require(:testcon).permit(:name)
    end
end
