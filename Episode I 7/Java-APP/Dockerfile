# Use a JDK base image
FROM openjdk:11

# Set the working directory
WORKDIR /app

# Copy the application JAR file to the container
COPY /src/HelloWorld.java .

# Specify the command to run the application
RUN javac HelloWorld.java

ENTRYPOINT ["java", "-cp", ".", "HelloWorld"]