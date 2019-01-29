class ApplicationController < ActionController::API

    def current_user
       user = User.find(params[:id])
        user
    end

end
