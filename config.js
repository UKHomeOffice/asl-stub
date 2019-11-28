module.exports = {
  port: process.env.PORT || 8080,
  // keep log of requests for 30s
  lifetime: process.env.LIFETIME || 30000,
  maxRequests: process.env.MAX_REQUESTS
};
