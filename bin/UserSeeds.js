const mongoose = require('mongoose');
const User = require('../models/User');

const dbName = 'click-for-pizza';
mongoose.connect(`mongodb://localhost/${dbName}`);
// mongoose.connect(`mongodb://admin:1234@ds013405.mlab.com:13405/click-for-pizza`);

const user = [{
  username: 'admin',
  email: 'admin@admin.com',
  password: 'admin'
}];

User.create(user)
  .then(user => {
    console.log("Created admin");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
