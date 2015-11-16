class Bench < ActiveRecord::Base

  validates :description, :lat, :lon, presence: true

  def self.in_bounds(bounds)

    p bounds
    puts "^ this is bounds"

    east = bounds[:east].to_f
    north = bounds[:north].to_f
    south = bounds[:south].to_f
    west = bounds[:west].to_f
    minSeats = bounds[:minSeats].to_f
    maxSeats = bounds[:maxSeats].to_f

    benches = []

    Bench.all.each do |bench|

      if (
        bench.lat > west &&
        bench.lat < east &&
        bench.lon > south &&
        bench.lon < north &&
        bench.seating > minSeats &&
        bench.seating < maxSeats
        )

        benches << bench
      end
    end

    benches
  end

end
