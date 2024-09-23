FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /server

COPY pom.xml mvnw .
COPY .mvn .mvn
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw package


FROM eclipse-temurin:17-jdk-alpine
WORKDIR /server
COPY --from=build /server/target/Server-1.jar ./target/Server-1.jar
ENTRYPOINT ["java", "-jar", "target/Server-1.jar"]

