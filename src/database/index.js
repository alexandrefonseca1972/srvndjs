const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.Promise = global.Promise;

dotenv.config();

mongoose.connect(

    process.env.DB_MONGO || process.env.DB_MONGO_LOCAL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose;