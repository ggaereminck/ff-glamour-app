class ReviewsController < ApplicationController
    
    def index 
        render json: Review.all
    end

    def show 
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy 
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params 
        params.permit(:user_id, :post_id,:rating, :comment)
    end


end
