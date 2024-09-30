FROM eclipse-temurin:17-jdk-alpine
WORKDIR /server

COPY pom.xml mvnw .
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw package

ENTRYPOINT ["java", "-jar", "target/Server-1.jar"]
