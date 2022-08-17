#!/bin/bash

docker build -t recipe-ms .

docker run -p 3001:3001 recipe-ms
