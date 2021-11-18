class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    

    def index 
        render json: Post.all
    end

    def show 
        post = Post.find(params[:id])
        render json: post, status: :ok
    end

    def create 
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def destroy 
        post = Post.find(params[:id])
        post.destroy
     end
   

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end


    private 

    def post_params 
        params.permit(:user_id, :title, :image, :likes, :character_class, :favorite, :id )
    end

end
