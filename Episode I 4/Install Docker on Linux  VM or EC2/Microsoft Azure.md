# Example of Configuring a VM or EC2 Instance to Install Docker on Linux

Cloud Provider: Microsoft Azure

## Step 1: Create a VM Instance

1. Log in to the Microsoft Azure Portal and select the "Virtual Machines" service.
2. Click on "Create" and then "Virtual Machine."
3. Choose a suitable image (e.g., "Ubuntu 20.04 LTS") and region for your VM instance.
4. Select the instance type based on your performance and resource requirements.
5. Configure the network settings, security groups, and other necessary options.
6. Review and confirm the instance details, then click "Create" to create the VM instance.

## Step 2: Connect to the VM Instance

1. After the instance is created, it will be assigned a public IP address.
2. Use a SSH client (e.g., PuTTY on Windows or the terminal on macOS/Linux) to connect to the instance using the assigned public IP address and the default username and password for the chosen Linux distribution.

## Step 3: Install Docker

1. Once connected to the instance via SSH, update the package manager cache:
   ```
   sudo apt-get update
   ```

2. Install Docker using the appropriate commands for your Linux distribution. For example, on Ubuntu or Debian:
   ```
   sudo apt-get install docker.io
   ```

3. Enable and start the Docker service:
   ```
   sudo systemctl enable docker
   sudo systemctl start docker
   ```

## Step 4: Verify Docker Installation

1. To verify that Docker is installed and running properly, run the following command:
   ```
   docker run hello-world
   ```

   You should see a message like "Hello from Docker!" indicating that Docker is working correctly.

## Step 5: Play with Docker

Now that Docker is installed, you can start exploring and experimenting with it. Some common tasks you can perform with Docker include:

- Pulling and running images:
  ```
  docker pull [image name]
  docker run [image name]
  ```

- Building your own images:
  ```
  docker build -t [image name] .
  ```

- Managing containers:
  ```
  docker ps
  docker stop [container ID]
  docker rm [container ID]
  ```

- Configuring volumes and networks:
  ```
  docker volume create [volume name]
  docker network create [network name]
  ```

These are just a few examples to get you started with Docker. You can find more detailed documentation and tutorials on Docker's official website.

Remember to follow the specific instructions for Microsoft Azure and your chosen Linux distribution if there are any variations in the commands or steps.
