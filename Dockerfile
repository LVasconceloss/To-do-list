FROM nginx:alpine

COPY ./IMG/* /usr/share/nginx/html/IMG/
COPY ./index.html /usr/share/nginx/html/
COPY ./style.css /usr/share/nginx/html/
COPY ./scripts.js /usr/share/nginx/html/