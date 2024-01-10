# Stage 1: Build 
FROM node:14 as builder 
WORKDIR /app 
COPY package.json package-lock.json ./ 
RUN npm ci 
COPY . . 
RUN npm run build 

# Stage 2: Runtime 
FROM node:14-alpine 
WORKDIR /app 
COPY --from=builder /app/dist ./dist 
COPY package.json package-lock.json ./ 
RUN npm ci --production 
CMD ["node", "./dist/index.js"] 