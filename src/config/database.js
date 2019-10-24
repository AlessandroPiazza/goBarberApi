module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestramps: true,
    underscored: true,
    underscoredAll: true,
  },
};
