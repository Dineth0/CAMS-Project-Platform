module.exports = {
  apps : [
    {
      name: "Config-Server",
      script: "java",
      args: "-jar ./Config-Server/target/Config-Server-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/config-server.log"
    },
    {
      name: "Service-Registry",
      script: "java",
      args: "-jar ./Service-Registry/target/Service-Registry-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/config-server.log",
    },
    {
      name: "API-Gateway",
      script: "java",
      args: "-jar ./API-Gateway/target/API-Gateway-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/API-Gateway.log",
    }
  ]
};