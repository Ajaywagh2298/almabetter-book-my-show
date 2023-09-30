## Alma BETTER  BACKEND PROJECT

# Book My Show
## Group Avalanche



[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)


## Description

- BookMyShow website is basically for entertainment and knowledge purpose. 
- In this app, a user can book movie ticket by choosing the diiferent timing and movies accordingly

- ✨Magic ✨the user can select a seat  and  bookthe  show

## Features
- Users choose the date, time and number of tickets they wish to purchase and pay for them online.
- Users can also select the seats they want to book beforehand.

1. Event listings: BookMyShow offers information on a wide range of events, including films, plays, concerts, sporting events, and more.

2. Show timings and seat availability: BookMyShow gives consumers access to show timings and seat availability for the events they're interested in, making it simpler for them to plan their trip.

3. Seat selection: BookMyShow gives users the option to choose their seats from an seats schedules, making it simple to choose the best seats available.

4. Available payment methods: In order to make the booking process as smooth as possible, BookMyShow provides a wide range of payment methods, including credit cards, debit cards, net banking, and mobile wallets.


## Functions assciated with the app
- A user can visit the home page and can see the Movies, schedule timing, schedules of seats etc.
- user can view all the movies and select the movies by clicking on any movie  button on the display screen. 
- User would be able to select the movie they wanted to watch.
- They  can book that particular movie by clicking the Book now button.
- After selecting movie, the user can choose the timing of the movie.
- Now, the user can click on the select schedule of the timing. and can see the preview of their selection. 
- After selecting timing of the movie, the user can select seats.
- At the end, user clicking the book now button. 


# Back_End
All API Details

## Installation
Install the dependencies and devDependencies and start the server.


## for backend
```sh
cd back-end
npm i
npm start
```

Use the package manager [npm](https://www.npmjs.com/) to install folder or Use follow command.

```bash
npm install express
```
```bash
npm install cors
```
```bash
npm install mongodb
```
## or
```bash
npm install
```
# Usage
##Run Backend Folder

```bash
npm start
```
OR
```bash
node ./index.js
```
#API TABLE
                            
| Method | URL                                                     | Parameters                                            |
|--------|---------------------------------------------------------|-------------------------------------------------------|
| GET    | http://localhost:9000/login-user    | { bodyParams :{ user_name, password} } |
| POST   | http://localhost:9000/users                          | body: { full_name, user_name, password, email, mobile_number } }                                                  |
| GET  | localhost:9000/updateContact/id?data_store=:data_store  | { body : {num1, num2, len} } |


# Front_end
All API Details

## Installation
## for frontend
```sh
cd front-end
npm i 
npm start
```

Use the package manager [npm](https://www.npmjs.com/) and [React js](https://reactjs.org/) to install folder or Use follow command.


```bash
npm install
```
Usage
##Run fronted Folder

```bash
npm start
```
OR
```bash
npm run
```
OR
```bash
npm run build
```
#API TABLE
| Method | URL                                                     | Description                                           |
|--------|---------------------------------------------------------|-------------------------------------------------------|
| GET    |  http://localhost:3000/  | Login Page API |
| POST   | http://localhost:3000/register                         |   Registration Page API                                           |
| GET  | http://localhost:3000/calculator  | Fibonacci Series API |
