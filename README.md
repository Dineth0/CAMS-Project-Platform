# CAMS Project Platform

The **Cricket Academy Management System (CAMS) Platform** is a microservices-based system designed to manage cricket academy operations through a scalable and modular architecture.

The main repository acts as the **Maven parent and aggregator project** for the core infrastructure services of the platform.

## Student Information

| **Information**    | **Details**                                              |
| ------------------ | -------------------------------------------------------- |
| **Student Name**   | `Dineth Osanka Nakandala`                                |
| **Student Number** | `241711046`                                              |
| **Slack Handle**   | `https://ijse-eca-hdse-71-72.slack.com/team/U0BERT7M7PH` |
| **GCP Project ID** | `impactful-study-477106-j6`                              |

## Project Description

The **CAMS Project Platform** follows a **microservices architecture**, where different system functionalities are separated into independent services.

This root repository manages the core infrastructure components using **Maven multi-module project configuration** and Git submodules.

The platform includes centralized configuration, service discovery, and API gateway functionality to support communication between microservices.

## Technology Stack

* **Java:** 23
* **Spring Boot:** 4.1.0
* **Spring Cloud:** 2025.1.2
* **Apache Maven**
* **Spring Cloud Gateway**
* **Spring Cloud Config**
* **Netflix Eureka**
* **Git & GitHub**
* **Google Cloud Platform (GCP)**

## Project Structure

```text
CAMS-Project-Platform/
├── .github/
│   └── workflows/
├── API-Gateway/
├── Config-Server/
├── Service-Registry/
├── .gitmodules
├── ecosystem.config.js
├── pom.xml
└── README.md
```

## Core Services

### API Gateway

The **API Gateway** acts as the central entry point for client requests and provides routing, service discovery, and load balancing for the microservices.

### Config Server

The **Config Server** provides centralized configuration management for the microservices within the platform.

### Service Registry

The **Service Registry** uses **Netflix Eureka** to provide service discovery and maintain information about available microservice instances.


## Maven Modules

The root Maven project is configured with `pom` packaging and contains the following modules:

```xml
<modules>
    <module>API-Gateway</module>
    <module>Config-Server</module>
    <module>Service-Registry</module>
</modules>
```

## Prerequisites

* Java JDK 23
* Apache Maven
* Git
* GitHub
* An IDE such as IntelliJ IDEA or Visual Studio Code

Verify the installed versions:

```bash
java -version
mvn -version
git --version
```

## Setup / Getting Started

### 1. Clone the Repository

```bash
git clone <GITHUB_REPOSITORY_URL>
cd CAMS-Project-Platform
```

### 2. Initialize Git Submodules

```bash
git submodule init
git submodule update
```

Or clone the repository together with its submodules:

```bash
git clone --recurse-submodules <GITHUB_REPOSITORY_URL>
```

### 3. Build the Project

From the root directory:

```bash
mvn clean install
```

This builds the Maven modules configured in the root `pom.xml`.

### 4. Run Individual Services

Each service can be started separately from its own directory.

For example:

```bash
cd Config-Server
mvn spring-boot:run
```

```bash
cd Service-Registry
mvn spring-boot:run
```

```bash
cd API-Gateway
mvn spring-boot:run
```

## Git Submodules

The following repositories are maintained as Git submodules:

* **API-Gateway**
* **Config-Server**
* **Service-Registry**

Each submodule contains its own source code and `README.md` documentation.

## Repository Information

**Repository Name:** `CAMS-Project-Platform`

**Repository Description / About:**

> Cricket Academy Management System Platform built using a Spring Cloud microservices architecture with API Gateway, Config Server, and Service Registry.

