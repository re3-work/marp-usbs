# syntax=docker/dockerfile:1

FROM marpteam/marp-cli:v4.1.1

RUN npm install -g --save-prod markdown-it-container markdown-it-mark markdown-it-variable markdown-it-admon

COPY assets /home/marp/core

ENV NODE_PATH=/usr/local/lib/node_modules