# syntax=docker/dockerfile:1

FROM marpteam/marp-cli:latest

RUN apk update && apk add --no-cache git
RUN npm install -g --save-prod markdown-it-container markdown-it-mark markdown-it-variable

COPY assets /home/marp/core

ENV NODE_PATH=/usr/local/lib/node_modules