class UsersController < ApplicationController

    def create

        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: {error: 'Failed to Sign Up'}, status: 400
        
            
        end
    end

    def login 
        
     
        user = User.find_by(username: params[:username])
        if user && user.password = params[:password]

            render json: user
          
        else 
            render json: {error: 'Failed to Log In'}, status: 400
        end

    end

    def show
        binding.pry
  
        user = User.find(params[:id])
        render json: user
    end 

private

    def user_params
        params.require(:user).permit(:username, :password)
    end

end 