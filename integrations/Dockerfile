FROM node:lts-alpine

# Working directory
WORKDIR /app

COPY shared ../shared

# Install dependencies
COPY integrations/package.json integrations/yarn.lock ./
RUN yarn

# Copy source
COPY ./integrations .

# Build and cleanup
ENV NODE_ENV=production
RUN npm run build \
 && npm prune

# Start server
CMD ["node", "./node_modules/moleculer/bin/moleculer-runner.js"]
