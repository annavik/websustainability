require './wsg-info'
require 'json'

wsg_json = get_wsg_info()

filePath = "../../src/" + Constant::FILENAME+".json"

File.open(filePath, "wb") { |json|
    json.write(JSON.pretty_generate(wsg_json))
}

puts ">> Finished!"