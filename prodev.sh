#!/bin/sh

echo "Deploy as Production or Development? Enter P or D"
read deploy

if [ $deploy == "P" ]; then
    docker build -t docker-test .
    docker run -p 3000:3000 -e REACT_APP_VERSION="production" -it docker-test
elif [ $deploy == "D" ]; then
    docker build -t docker-test .
    docker run -p 3000:3000 -e REACT_APP_VERSION="development" -it docker-test
else
    echo "error"
    exit 1
fi