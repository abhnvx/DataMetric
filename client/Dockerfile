# pull official base image
FROM node:14-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE 3000
# start app
CMD ["yarn", "start"]