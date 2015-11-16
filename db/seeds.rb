# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


i = 0
while i < 100
  Bench.create(
      description: i,
      lat: (rand() + 40.0001),
      lon: (rand() - 74.0001),
      seating: (rand(16)))
  i += 1
end

bench2 = Bench.create(
    {description: "App Academy NYC",
    lat: 40.7250,
    lon: -73.9968,
    seating: 2})

bench3 = Bench.create(
    {description: "My house",
    lat: 40.6839204,
    lon: -73.9170811,
    seating: 10})
