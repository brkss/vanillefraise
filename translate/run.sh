#!/bin/bash


docker build -t translate-ms .

docker run -p 3040:3040 translate-ms
