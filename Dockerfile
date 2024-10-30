FROM node:20-alpine AS base
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . .
RUN npm run build

FROM base AS development
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM base AS test
CMD [ "npx", "jest", "--coverage" ]

FROM base  AS production
EXPOSE 3000
CMD ["node", "dist/main"]