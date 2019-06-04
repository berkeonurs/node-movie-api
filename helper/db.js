const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://movie_user:abcd1234@movie-api-r2izo.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true });
  mongoose.connection.on('open', () => {
      console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
      console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};