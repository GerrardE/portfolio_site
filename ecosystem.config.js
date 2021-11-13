module.exports = {
  apps: [
    {
      name: "client",
      script: "npm",
      args: "serve:client"
    },
    {
      name: "server",
      script: "npm",
      args: "start:server",
    }
  ]
}
