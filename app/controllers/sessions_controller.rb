class SessionsController < Devise::SessionsController
  layout false

  def after_sign_out_path_for(resource_or_scope)
    people_host
  end
end
