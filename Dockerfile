FROM node:16.14.2


WORKDIR /app
COPY . .

RUN npm install

WORKDIR /app/client
RUN npm install 

EXPOSE 3000

WORKDIR /app
CMD ["npm", "run","catapp"]