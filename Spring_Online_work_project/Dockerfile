FROM openjdk:11 as build
WORKDIR '/app'
ADD target/Spring_Online_work_project-0.0.1-SNAPSHOT.jar Spring_Online_work_project-0.0.1-SNAPSHOT.jar
EXPOSE 8088
COPY . .
ENTRYPOINT ["java", "-jar", "Spring_Online_work_project-0.0.1-SNAPSHOT.jar"]
