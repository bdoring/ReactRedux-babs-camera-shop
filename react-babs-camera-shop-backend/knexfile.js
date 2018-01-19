let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/camera_shop' : 'postgres://localhost/camera_shop'

module.exports = {
  development: {
      client: 'pg',
      connection: connectionString,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL || 'postgres://postgres:root@localhost/camera_shop',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
