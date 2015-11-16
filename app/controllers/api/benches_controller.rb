class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :show
    else
      render json: @index.errors.full_messages, status: 422
    end
  end

  private

    def bench_params
      params.require(:bench).permit(:description, :lat, :lon, :created_at)
    end

end
