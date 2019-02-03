class ApplicationController < ActionController::API


private

    def get_current_user 
        id = request.headers['HTTP_AUTHORIZATION']
        user = User.find(id)
        user

    end

helper_method :get_current_user

end
