const localtunnel = require('localtunnel');
localtunnel(5000, {
    subdomain: "iemfoieasyyaoi"
  },
  function (err, tunnel) {
    console.log('LT running')
  }
);