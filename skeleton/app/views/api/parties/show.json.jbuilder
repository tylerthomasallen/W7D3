json.extract! @party, :name, :location

json.guests @party.guests do |guest|
  json.extract! guest, :name, :age, :favorite_color
  json.gifts guest.gifts do |gift|
    json.extract! gift, :title
  end

  #   json.array! guest.gifts, :title, :description
  # end
end

# json.extract! @guest, :name, :age, :favorite_color
# json.gifts do
#   json.array! @guest.gifts, :title, :description
# end
