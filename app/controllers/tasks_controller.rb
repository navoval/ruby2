class TasksController < ApplicationController

  # created a before_action filter that creates the @tasks instance variable for us automatically
  before_action :all_tasks, only: [:index, :create]
  # respond_to method invoked near the top that will allow us to render both html and javascript responses with all of our controller actions
  respond_to :html, :js

  def new
    @task = Task.new
  end

  def create
    @task = Task.create(task_params)
    respond_to do |format|
      format.json { render action: 'new', status: :created, location: @task }
      format.html { redirect_to root_path }
      format.js { render action: 'new', status: :created, location: @task }
    end
    @task.save
    # redirect_to root_path
  end

  def all_tasks
    @tasks = Task.all.order('created_at DESC')
  end

  private
  def task_params
    params.require(:task).permit(:title, :note, :completed, :photo)
  end
end
