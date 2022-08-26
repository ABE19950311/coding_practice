
require 'rss'
class IssuesController < ApplicationController
    def feed
    url = 'https://automaton-media.com/feed/'
    @contents = RSS::Parser.parse(url)
    render json: @contents
    end
end
