#!/bin/bash

if [[ -z "${CIRCLECI}" ]]; then
    npm i -g ts-node lerna webpack webpack-cli &&\
    lerna init &&\
     npm run bootstrap &&\
      cd ./packages/roadmap &&\
       mkdir ./dist &&\
        touch ./dist/index.html
else
    sudo npm i -g ts-node lerna webpack webpack-cli &&\
    sudo lerna init &&\
     npm run bootstrap &&\
      cd ./packages/roadmap &&\
       sudo mkdir ./dist &&\
        sudo touch ./dist/index.html
fi