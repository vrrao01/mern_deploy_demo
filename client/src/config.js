import pkg from '../package.json';

const endpoints = {
  development: {
    endpoint: pkg.proxy
  },
  production: {
    endpoint: window.location.hostname
  }
};

export default endpoints;
