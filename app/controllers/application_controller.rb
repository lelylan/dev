class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :body_style, :title, :index_page?

  def body_style
    index_page? ? 'index' : 'description'
  end

  def index_page?
    Settings.index_pages.include?(params[:id])
  end

  def title
    Settings.titles[params[:id]] || 'Develop the connected house'
  end
end
