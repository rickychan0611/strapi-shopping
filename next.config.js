require('dotenv').config()

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        LOCAL_API_URL: process.env.LOCAL_API_URL
    }
}