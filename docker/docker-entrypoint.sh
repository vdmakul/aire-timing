#!/bin/bash

cd /var/www/aire-timing-web

if [ ! -d /var/www/aire-timing-web/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start
