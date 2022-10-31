#!/bin/bash

curl -s --user 'api:936a2ba4dc00716ae3d629f675a0f71c-d117dd33-5167dea1' \
    https://api.eu.mailgun.net/v3/vanillefraise.me/messages \
    -F from='Excited User <mailgun@vanillefraise.me>' \
    -F to=berkassebrahim@gmail.com \
    -F subject='Hello' \
    -F text='Testing some Mailgun awesomeness!'
