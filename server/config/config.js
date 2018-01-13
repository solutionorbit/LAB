module.exports = {
	development: {
  	url: 'mysql://mysql:password@localhost:5432/bookmark',
  	dialect: 'mysql'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: true
    },
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    url: process.env.DATABASE_URL || 'mysql://mysql:password@localhost:5432/bookmark_test',
    dialect: 'mysql',
    logging: false
  }
};
