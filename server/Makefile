.PHONY: build docker-build docker-run all

# Build your project using pnpm
build:
	pnpm build

# Build the Docker image
docker-build:
	docker build -t server:latest .

# Run the Docker container with port mapping
docker-run:
	docker run -p 8080:8080 server:latest

# Combine all steps
all: build docker-build docker-run