
require('dotenv').config();
let CONFIG = {} //Make this global to use all over the application
CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT ;

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'postgres';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
//CONFIG.db_storage   = process.env.DB_STORAGE    || 'postgres';
CONFIG.db_port      = process.env.DB_PORT       || ' 5432';
CONFIG.db_name      = process.env.DB_NAME       || 'gifts';
CONFIG.db_user      = process.env.DB_USER       || 'postgres';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'History99$$';
CONFIG.Boss_Mail  = process.env.Boss_Mail   || '';
CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || '';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';
CONFIG.jwtSecret  = process.env.JWT_SECRET || 'secret';


module.exports = CONFIG;