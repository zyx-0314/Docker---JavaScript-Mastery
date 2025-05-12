FROM node:latest

RUN addgroup developer
RUN adduser --ingroup developer ian

USER ian

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R ian:developer .

USER ian

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev