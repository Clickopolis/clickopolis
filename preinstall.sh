#!/bin/bash

if [[ -z "${CIRCLECI}" ]]; then
    npm i -g ts-node lerna webpack@3 webpack-cli@3 &&\
    lerna init &&\
     lerna bootstrap &&\
      cd ./packages/roadmap &&\
       mkdir ./dist &&\
        touch ./dist/index.html
else
    sudo npm i -g ts-node lerna webpack@3 webpack-cli@3 &&\
    sudo lerna init &&\
     lerna bootstrap &&\
      cd ./packages/roadmap &&\
       sudo mkdir ./dist &&\
        sudo touch ./dist/index.html
fi