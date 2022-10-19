# backend basic CRUD

# About Project

This is a Backend application, built for study purposes.

Application and summarized in a basic CRUD by three modules, User, Student and Teacher. where we can create, edit, list and delete each entity.

Aas made in the simplest way possible following the documentation of the respective technologies mentioned below, to facilitate the reader's understanding.

The project was implemented JWT Authentication, Authorization with USER access for Students and ADMIN for Teachers.

# Endpoints by modules

## Studenty
- create Studenty
- find all Studenty
- find one Stydenty
- delete Studenty
- update Studenty

## Teacher
- create Teacher
- find all Teacher
- find one Teacher
- delete Teacher
- update Teacher

## User
- Find all users
- findByEmail

# technologies used
- nodejs
- NestJS
- Mysql
- typescript
- prisma

## Stay in touch

# database modeling
Database contains three tables. User, Student and Teacher, they have a one-to-one relationship. Teacher and Student tables store their entities and User table stores authentication data for both Teacher and Stydenty tables.

![db](https://user-images.githubusercontent.com/89228679/196759230-fdcd9b44-da2f-4ebf-b739-41ff4bb9c597.png)



- Author - [santosneto_](https://www.instagram.com/santosneto_/)
- Website - [https://devnetosantos.vercel.app/](https://devnetosantos.vercel.app/)
- Twitter - [@santosneto_](https://twitter.com/santosneto_)

## License

[MIT licensed](LICENSE).
