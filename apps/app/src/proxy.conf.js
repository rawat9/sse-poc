const ProxyConf = {
  '/api/**': {
    target: 'http://localhost:3000',
    secure: false,
  },
};

module.exports = ProxyConf;
