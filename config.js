module.exports = {
  port: process.env.PORT || 8080,
  // keep log of requests for 5min
  lifetime: process.env.LIFETIME || 5000
};
