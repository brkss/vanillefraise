#!bin/bash

docker-compose down

rm -Rf dist

tsc 

docker-compose up --build
