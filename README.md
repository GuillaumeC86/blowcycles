# How to build the website with Jekyll and Docker

```bash
docker run --rm  --volume="${PWD}/src:/srv/jekyll:Z"  -it jekyll/jekyll:3.8  jekyll build 
```

# Serve a development version of the website

```bash
docker run --rm  --volume="${PWD}/src:/srv/jekyll:Z" -p 4000:4000 -it jekyll/jekyll:3.8  jekyll serve 
```