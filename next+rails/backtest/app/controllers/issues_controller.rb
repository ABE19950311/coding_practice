
require "faraday"
require "faraday_middleware"
require 'google/apis/youtube_v3' 

class IssuesController < ApplicationController
  #  def feed
   # response = Faraday.new("https://news.yahoo.co.jp/rss/topics/top-picks.xml") do |far|
    #    far.request :url_encoded
     #   far.adapter Faraday.default_adapter # デフォルトアダプタ指定
   # end
   # res = response.get
   # render plain:Hash::from_xml(res.body).to_json
   # end
   youtube = Google::Apis::YoutubeV3::YoutubeService.new

end
