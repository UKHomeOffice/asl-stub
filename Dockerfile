FROM quay.io/ukhomeofficedigital/asl-base:v1

RUN apk upgrade --no-cache

USER 999

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci --production --no-optional --ignore-scripts
COPY . /app

CMD node index.js
