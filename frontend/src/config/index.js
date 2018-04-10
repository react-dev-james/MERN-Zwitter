// Configurations for Frontend
const NODE_ENV = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

let config = {
    url: {}
};

config.url.api = '/'

export default config;