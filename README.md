# CloudOne

A containerized web application demonstrating Docker orchestration with Node.js and Nginx, featuring a multi-stage build process and environment-specific configurations.

## 🚀 Project Overview

CloudOne is a demonstration project that showcases containerization best practices and Docker orchestration. The project implements:

- A Node.js web application serving static content
- Nginx reverse proxy configuration with optimized caching and compression
- Multi-stage Docker builds to minimize production image size
- Separate development and production Docker configurations
- Port mapping and container networking setup

### Key Implementation Details

#### Node.js Application
- Basic Express.js server setup
- Static file serving
- Health check endpoint for container orchestration
- Development mode with hot-reloading

#### Nginx Configuration
- Reverse proxy setup pointing to Node.js application
- Gzip compression enabled for text-based responses
- Cache control headers for static assets
- HTTP/2 support in production
- SSL configuration preparation (commented out in default.conf)

## 🛠️ Tech Stack

- **Backend:** Node.js with Express.js
- **Server:** Nginx (Latest Alpine)
- **Containerization:** Docker & Docker Compose
- **Environment:** Development and Production configurations

## System Requirements

- Node.js v18.x or higher
- Docker Engine 19.03.0+
- Docker Compose 1.27.0+
- Available ports 80 and 3000

## 📁 Project Structure
```bash
cloudone/
├── src/ # Source code directory
│ └── index.js # Main Node.js application entry point
├── .idea/ # IDE configuration
├── Dockerfile-nginx # Multi-stage Nginx container build
│ └── Uses Alpine base for minimal footprint
├── Dockerfile-node # Node.js application container
│ └── Includes development dependencies
├── default.conf # Nginx server configuration
│ └── Reverse proxy and optimization settings
├── docker-compose.yml # Development environment setup
│ └── Volume mounts for hot-reloading
├── docker-compose.prod.yml # Production configuration
│ └── Optimized for deployment
└── .dockerignore # Optimization for Docker builds
```
## 🔧 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/tzone85/cloudone.git
cd cloudone
```


2. Development Environment:

```bash
docker-compose up --build
```

This will:
- Build the Node.js application container
- Set up Nginx reverse proxy
- Enable hot-reloading for development
- Map ports 80 and 3000 to your local machine

3. Production Environment:
```bash
docker-compose -f docker-compose.prod.yml up --build
```
This will:
- Build optimized production images
- Enable Nginx caching and compression
- Run containers in production mode

## 🌟 Features

### Development Environment
- Hot-reloading enabled for Node.js application
- Volume mounting for real-time code updates
- Development-specific Nginx configuration
- Exposed ports for debugging

### Production Environment
- Multi-stage builds for minimal image size
- Optimized Nginx configuration
- Proper cache headers and compression
- Security-focused settings

### Nginx Configuration Features
- Reverse proxy to Node.js application
- Gzip compression for text/html, text/css, application/javascript
- Cache control headers
- HTTP/2 ready
- Load balancing preparation (commented configuration available)

## 🔨 Development

### Local Development
The development environment is configured for optimal developer experience:
```bash
# Start development environment
docker-compose up

# View logs
docker-compose logs -f

# Rebuild containers
docker-compose up --build
```

### Making Changes
1. Edit files in the `src` directory
2. Changes will automatically reflect in the development environment
3. For production builds, rebuild using the production compose file

## 🚀 Deployment

### Prerequisites
- Docker Engine 19.03.0+
- Docker Compose 1.27.0+
- Available ports 80 and 3000

### Production Deployment Steps
1. Configure environment variables if needed
2. Build and start the production stack:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Monitoring
```bash
# Check container status
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

## 🔒 Security Considerations

- Nginx configured with security best practices
- Production builds minimize included dependencies
- Container isolation and proper networking
- Prepared SSL configuration (needs certificates)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Project Link: [https://github.com/tzone85/cloudone](https://github.com/tzone85/cloudone)

## 🔍 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)

## 🥸 Author
> This project is created by [@tzone85](https://github.com/tzone85)
> A.K.A. Thando Village Boy Mini