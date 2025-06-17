FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Set the environment variable for the Discord token
# (You can override this at runtime)
ENV TOKEN=""

CMD ["npm", "start"]