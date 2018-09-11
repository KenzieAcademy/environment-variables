#!/usr/bin/env bash
docker build -t docker-test .
docker run -p 3000:3000 -it docker-test