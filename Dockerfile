# Step 1
FROM node:18-alpine as builder

WORKDIR /src
COPY . . 

# Installation des dependances
RUN npm install
# Faire le build
RUN npm run build

# Step 2 deploy

FROM node:18-alpine

WORKDIR /src
COPY --from=builder /src/dist ./dist
COPY --from=builder /src/package.json ./
RUN npm install --omit=dev

# run sur quelle port
EXPOSE 3000:3000

# Execution de l'application 
CMD ["node", "dist/main.js"]