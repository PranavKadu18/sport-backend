const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect(process.env.CONNECTIONSTRING)
}

module.exports = {connect}