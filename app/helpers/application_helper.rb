module ApplicationHelper

  def devise_mapping
    Devise.mappings[:user]
  end

  def resource_name
    devise_mapping.name
  end

  def resource_class
    devise_mapping.to
  end

  def people_options(options = { host: 'localhost' })
    options[:host] = ENV['LELYLAN_PEOPLE_URL']  if ENV['LELYLAN_PEOPLE_URL']
    options[:port] = ENV['LELYLAN_PEOPLE_PORT'] if ENV['LELYLAN_PEOPLE_PORT']
    puts options
    options
  end

  def people_host
    "#{request.protocol}#{ ENV['LELYLAN_PEOPLE_URL']}:#{ENV['LELYLAN_PEOPLE_PORT']}"
  end
end
