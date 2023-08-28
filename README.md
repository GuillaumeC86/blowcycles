# How to build the website with Jekyll and Docker

```bash
docker run --rm  --volume="${PWD}/src:/srv/jekyll:Z"  -it jekyll/jekyll:3.8  jekyll build
```

# Serve a development version of the website

```bash
docker run --rm  --volume="${PWD}/src:/srv/jekyll:Z" -p 4000:4000 -it jekyll/jekyll:3.8  jekyll serve
```

# Serve a local dev version of the website (without docker)

Install bundler and jekyll

```bash
gem install bundler
```

Install dependencies

```bash
bundle install
```

Serve the website (with live reload)

```bash
bundle exec jekyll serve --livereload
```

