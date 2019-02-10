class ApplicationController < ActionController::API


    def get_current_user
        id = request.headers['AUTHORIZATION']
        user = User.find(id)
        user
    end

end

