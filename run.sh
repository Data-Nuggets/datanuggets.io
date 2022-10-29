#!/bin/bash

docker build -t data-nuggets-site .
docker run -it -v $(pwd):/usr/src/app -p 8000:8000 data-nuggets-site
