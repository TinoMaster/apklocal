FROM node:16

RUN mkdir -p /home/apklocal

COPY . /home/apklocal

WORKDIR /home/apklocal

RUN npm install

EXPOSE 3000

CMD ["node","src/app.js"]