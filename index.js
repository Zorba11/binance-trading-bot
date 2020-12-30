require('dotenv').config;
const ccxt = require('ccxt');
const axios = require('axios');

const tick = async () => {

};

const run = () => {
    const config = {
        asset: 'BTC',
        base: 'USDT',
        allocation: 0.1,
        spread: 0.2,
        tickInterval: 2000
    }
}