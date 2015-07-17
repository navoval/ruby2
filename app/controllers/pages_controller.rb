class PagesController < ApplicationController
  def home
    @tasks = Task.all.order('created_at DESC')
  end
end
