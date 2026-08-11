FROM node:18-alpine

WORKDIR /app

COPY flag.txt /flag.txt
RUN chmod 444 /flag.txt

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3000
USER node

CMD ["node", "app.js"]