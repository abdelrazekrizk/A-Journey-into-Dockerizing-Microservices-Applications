
# Use a JDK base image
FROM openjdk:11

# Set the working directory
WORKDIR /app

# Copy the application JAR file to the container
COPY myapp.jar .

# Specify the command to run the application
CMD [ "java", "-jar", "myapp.jar" ]
