FROM ubuntu:24.04 as ubuntu

RUN apt update
RUN apt install -y \
    git \
    make \
    ruby \
    ruby-dev \
    gcc \
    g++ \
    libreadline-dev \
    libssl-dev \
    libffi-dev \
    zlib1g-dev \
    libyaml-dev

RUN gem install \
    bundler
