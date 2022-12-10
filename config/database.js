const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '162.214.122.42'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'fazag_web'),
      user: env('DATABASE_USERNAME', 'fazag_admin'),
      password: env('DATABASE_PASSWORD', 'zszsxu5973'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
