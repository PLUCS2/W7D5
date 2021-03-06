class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user 
            login!(@user)
            render :show 
        else 
            render json: ["Improper credentials"], status: 401
        end 
    end 

    def show 
        @user = current_user
    end 

    def destroy 
        if current_user 
            logout!
            render json: {}
        else 
            render json: ["No current user"], status: 404
        end 
    end 

end 