
all: build

config:
	bundle install

build:
	bundle exec jekyll build

serve: build
	bundle exec jekyll serve

check:
	bundle exec htmlproofer --allow-hash-href ./_site --url-ignore "https://angel.co/adam-stamand,https://www.linkedin.com/in/adam-st-amand/,/#.*/"

clean:
	rm -rf _site/