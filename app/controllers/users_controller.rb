class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: current_user
        else
            render json: {error: 'Failed to Sign Up'}, status: 400
        else
            
        end
    end

    def login 
        user = User.find_by(username: params[:user][:username])
        if user && user.password = params[:user][:password]
            render json: current_user
        else 
            render json: {error: 'Failed to Log In'}, status: 400
        end

    end

    def show
        render json: current_user
    end 

private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end 