class Api::BenchesController < ApplicationController

  def index
    puts params
    puts "This is params"
    puts params[:bounds]
    puts "this is params[:bounds]"

    @benches = Bench.in_bounds(params)
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      # @benches = Bench.in_bounds(params[:bounds])
      redirect_to '#/'
    else
      render json: @index.errors.full_messages, status: 422
    end
  end

  private

    def bench_params
      params.require(:bench).permit(:description, :lat, :lon, :seating, :created_at)
    end

end
