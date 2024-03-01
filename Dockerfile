FROM node:18.15.0-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:18.15.0-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/test/server ./
CMD node server.mjs
EXPOSE 4000