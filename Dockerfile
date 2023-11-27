FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npx next build
CMD ["npm", "run", "start"]