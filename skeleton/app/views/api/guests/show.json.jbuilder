json.extract! @guest, :name, :age, :favorite_color
json.gifts do
  json.array! @guest.gifts, :title, :description
end

# json.gifts @guest.gifts.each do |gift|
#   json.extract! gift, :title, :description
# end
