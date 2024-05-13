FROM node:20.10.0

COPY . /app
WORKDIR /app

RUN npm ci

CMD ["npm", "run", "storybook"]
