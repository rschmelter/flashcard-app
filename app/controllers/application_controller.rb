class ApplicationController < ActionController::API




    def signup

        @new_user = User.new(user_params)
        if @new_user.save
            render json: @new_user
        else
            render json: {error: 'Failed to Sign Up'}, status: 400
        
            
        end
    end

    def login 

        @user = User.find_by(username: params[:user][:username])
        if @user && @user.password = params[:user][:password]
            render json: @user
        else 
            render json: {error: 'Failed to Log In'}, status: 400
        end
       

    end
    private

    def get_current_user 
        if @user != nil
            user = @user
        elsif 
            @new_user != nil
            user = @new_user
        end 
        user

    end 

    def user_params
        params.require(:user).permit(:username, :password)
    end

helper_method :get_current_user

end
