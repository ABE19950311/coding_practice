FROM ruby:3.1.2

WORKDIR /backapp
RUN apt-get update -qq && apt-get install -y nodejs yarn 
COPY Gemfile Gemfile.lock* /backapp/
RUN bundle install

CMD ["rails", "server", "-p", "3000", "-b", "0.0.0.0"]