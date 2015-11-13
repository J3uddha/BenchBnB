# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

bench1 = Bench.create(
    description: "This is the first bench on the map, AKA SF",
    lat: 37.7758 ,
    lon: -122.435)

bench2 = Bench.create(
    description: "App Academy NYC",
    lat: 40.7250,
    lon: -73.9968)

bench3 = Bench.create(
    description: "My house",
    lat: 40.6839204,
    lon: -73.9170811)
