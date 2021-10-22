module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),
  proxy: env.bool('IS_PROXIED', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
