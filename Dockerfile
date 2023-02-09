# Build Project with mvn
FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /app

COPY pom.xml .
COPY src /app/src

RUN mvn clean package

# Copy the generated jar into jdk container
FROM openjdk:17-alpine

WORKDIR /app
COPY src /app/src

COPY --from=build /app/target/assignment-0.0.1-SNAPSHOT.jar /app/app.jar

EXPOSE 8080

CMD ["java", "-jar", "app/app.jar"]