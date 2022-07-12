FROM ruby:3.0

ARG WORKDIR=/var/www/backend
# デフォルトの locale `C` を `C.UTF-8` に変更する
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
# タイムゾーンを日本時間に変更
ENV TZ Asia/Tokyo

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

COPY Gemfile $WORKDIR/Gemfile
COPY Gemfile.lock $WORKDIR/Gemfile.lock
RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3333

# Start the main process
CMD ["rails", "server", "-p", "3333", "-b", "0.0.0.0"]