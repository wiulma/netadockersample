FROM node:16-alpine as build
WORKDIR /app
COPY ./TestUI/src ./src
COPY ./TestUI/*.json ./
RUN npm i -g @angular/cli@12.2.1
RUN npm i
RUN ng build --prod

FROM nginx:alpine as deploy
WORKDIR /app
COPY --from=build /app/dist/TestUI/*.* /usr/share/nginx/html/