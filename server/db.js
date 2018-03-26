// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  account : String,
  password : String
});
/************** 定义模型Model **************/
const Models = {
  Login : mongoose.model('Login',loginSchema)
};
module.exports = Models;