const proxy = require('http-proxy-middleware');

module.exports = (app)=> {
  app.use("/api",proxy({ 
    target: 'https://webservice.juanpi.com',
    changeOrigin: true,
  }));
  app.use("/home",proxy({ 
    target: 'https://m.juooo.com',
    changeOrigin: true,
    
  }));
  app.use("/v3",proxy({
    target:'https://mall.api.epet.com',
    changeOrigin:true,
  }))
};