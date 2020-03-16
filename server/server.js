const app = require('./app');
const mongoose = require('mongoose')
const dotenv= require('dotenv')
dotenv.config({path: './config.env'})
const DB = process.env.DATABASE

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(con => {
  console.log('DB connection sucessfully');
})




const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
