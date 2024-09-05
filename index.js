const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const axios = require('axios');

const app = express();

// const {PORT, BOOKING_PORT, AUTH_PORT} = require('./config/serverConfig');

const PORT = 3004;
const BOOKING_PORT = 3002;
const AUTH_PORT = 3001;

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // Max 5 request from 1 IP in 2 min.
	max: 5,
})

app.use(morgan('combined'));
app.use(limiter);

app.use('/bookingservice', async (req, res, next) => {
  // console.log(req.headers['x-access-token']);
  // console.log(req.headers['Hi']);
    try {
        const response = await axios.get(`http://localhost:${AUTH_PORT}/api/v1/isauthenticated`, {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if(response.data.success) {
            next();
        } else {
            console.log("Unauthorised");
            return res.status(401).json({
                message: 'Unauthorised'
            })
        }
    } catch (error) {
        console.log("Unauthorised");
        return res.status(401).json({
            message: 'Unauthorised'
        })
  }
})

app.use('/bookingservice', createProxyMiddleware({
    target: `http://localhost:${BOOKING_PORT}/`,
    changeOrigin: true,
    pathRewrite: {
        '^/bookingservice': '', // this will remove `/bookingservice` from the forwarded path
    },
}));

app.get('/home', (req, res) => {
    return res.json({message: 'OK'});
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});