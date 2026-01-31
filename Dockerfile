FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NEXT_DISABLE_SWC_NATIVE=1

EXPOSE 3000

CMD ["npm","run","dev"]
