require 'httparty'
require 'nokogiri'
require 'json'

def get_wsg_info
    url = "https://raw.githubusercontent.com/w3c/sustainableweb-wsg/main/guidelines.json"
    response = HTTParty.get(url)
    result = ""

    if response.code == 200
        result = create_wsg_json(JSON.parse(response.body))
    else
        puts "Failed! #{response.code}"
    end
    result
end

def create_wsg_json(wsg_json)
    json_obj = {}
    categories = []
    temp_cats = []
    tags = []
    result_json = []
    wsg_data = {}

    wsg_json[Constant::CATEGORY].each do |category|
        if !category["guidelines"].nil? 
            section_id = category[Constant::ID]
            section_name = category[Constant::NAME]
            category["guidelines"].each do |guideline|
                id = section_id + "." + guideline[Constant::ID].to_s
                topic = guideline["guideline"]
                title = id + " " + topic
                category =  {
                    Constant::ID => section_id,
                    Constant::TITLE => section_name
                }
               
                json_obj[Constant::ID] = id
                json_obj[Constant::TITLE] = title
                json_obj[Constant::CATEGORY] = category
                json_obj[Constant::DESCRIPTION] = guideline[Constant::DESCRIPTION]
                json_obj[Constant::CRITERIA] = guideline[Constant::CRITERIA]
                json_obj[Constant::IMPACT] = generate_impact_effort_objects(guideline[Constant::IMPACT]) 
                json_obj[Constant::EFFORT] = generate_impact_effort_objects(guideline[Constant::EFFORT]) 
                json_obj[Constant::TAGS] = guideline[Constant::TAGS]
                json_obj[Constant::URL] = generate_topic_links(topic)

                categories.append(json_obj[Constant::CATEGORY])
                tags.concat(json_obj[Constant::TAGS])

                result_json.append(json_obj)
                json_obj = {}
            end
        end

        # Find all unique strings and sort
        tags = tags.uniq.sort
        # Find all unique hashes
        categories = categories.uniq

    end

    # Construct the wsg_data json object
    wsg_data["categories"] = categories
    wsg_data["tags"] = tags
    wsg_data["data"] = result_json
    wsg_data
end

def generate_topic_links(topic)
    base_url = Constant::BASEURL

    topic_anchor = "#" + topic.downcase.gsub(/,|'|\s|\(|\)/, '' => '', '\'' => '-', ' ' => '-')
    topic_link = base_url + topic_anchor
end

def generate_impact_effort_objects(title)
    effort_impact_object = {
        Constant::TITLE => title,
        Constant::VALUE => convert_title_to_value(title)
    }
    effort_impact_object
end

def convert_title_to_value(title)
    case title.downcase
    when "low"
        1
    when "medium"
        2
    when "high"
        3
    else # something's wrong
        -1
    end
end

class Constant
    DATA = "data"
    CATEGORY = "category"
    CATEGORIES = "categories"
    ID = "id"
    NAME = "name"
    DESCRIPTION = "description"
    TITLE = "title"
    BENEFITS = "benefits"
    IMPACT = "impact"
    EFFORT = "effort"
    TAGS = "tags"
    FILENAME = "wsg-info"
    BASEURL = "https://w3c.github.io/sustyweb/"
    URL = "url"
    VALUE = "value"
    CRITERIA = "criteria"
end