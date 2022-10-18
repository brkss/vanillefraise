#!/bin/bash

docker build -t recipe-api .

docker run -p 3001:3001 recipe-api
