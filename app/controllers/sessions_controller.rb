class SessionsController < Devise::SessionsController
  layout 'basic'

        def after_sign_out_path_for(resource_or_scope)
        people_host
      end
end
