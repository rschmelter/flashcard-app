class ApplicationController < ActionController::API


private
    def current_user
       user = User.find(params[:id])
        user
    end

helper_method :current_user

end
