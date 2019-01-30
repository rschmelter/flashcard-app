class ApplicationController < ActionController::API


private
    def get_current_user
       @user = User.find(params[:id])
        @user
    end

    def current_user
        @user

    end

helper_method :current_user

end
