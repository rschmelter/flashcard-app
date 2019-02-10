class ApplicationController < ActionController::API


    def get_current_user
        id = request.headers['HTTP-AUTHORIZATION']
        user = User.find(id)
        user
    end

end
