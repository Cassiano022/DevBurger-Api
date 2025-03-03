module.exports = {
  dialect: 'postgres',
  host: 'localhost',   // ou o IP do seu container Docker se não estiver usando localhost
  port: 5432,
  username: 'postgres',
  password: 'postgres',  // A senha que você configurou no Docker
  database: 'devburger',
  define: {
    timestamps: true,
    underscored: true,
  },
};

