FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install && npm run build

FROM oven/bun:alpine AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/server /app/server

RUN bun i --production

EXPOSE 3000
CMD ["bun", "server/app.ts"]
