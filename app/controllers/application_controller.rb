class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :body_style, :title, :index_page?, :code_page?, :people_options, :people_host

  def body_style
    index_page? ? 'index' : 'description'
  end

  def title
    Settings.titles[params[:id]] || 'Building the Connected Home'
  end

  def index_page?
    Settings.index_pages.include?(params[:id])
  end

  def code_page?
    Settings.code_pages.include?(params[:id])
  end

  def people_options(options = { host: 'localhost', port: 80 })
    options[:host] = ENV['LELYLAN_PEOPLE_URL']  if ENV['LELYLAN_PEOPLE_URL']
    options[:port] = ENV['LELYLAN_PEOPLE_PORT'] if ENV['LELYLAN_PEOPLE_PORT']
    options
  end

  def people_host
    "#{request.protocol}#{ ENV['LELYLAN_PEOPLE_URL']}:#{ENV['LELYLAN_PEOPLE_PORT']}"
  end
end
