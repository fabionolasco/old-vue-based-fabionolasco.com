#!/bin/sh
NODE_ENV=production sudo forever start -ae errors.log server.js
