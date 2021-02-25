# Step 1
FROM node:alpine

# Set working directory
WORKDIR /src

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]
