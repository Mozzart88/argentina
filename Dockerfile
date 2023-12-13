FROM ruby:3.0-alpine

RUN apk add git build-base
COPY . /app
VOLUME [ "/app" ]
WORKDIR /app

RUN script/bootstrap
EXPOSE 4000
CMD [ "bundle", "exec","jekyll", "serve", "--host", "0.0.0.0" ]