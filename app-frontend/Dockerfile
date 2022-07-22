FROM node:18.6.0-alpine
WORKDIR /var/www/app-front
COPY . .
RUN npm install
ENTRYPOINT npm rebuild esbuild && npm run dev