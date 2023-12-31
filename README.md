# Famous People List

Start with the code provided here. 

The server side code and routes have been provided for you. You shouldn't have to change anything in the server.

Please create a database called `famous_people` and use the `database.sql` file to help you spin it up.

```npm install``` 

```npm run server``` 

```npm run client``` 



## Required Features

X In the `FamousSection` Component, there should be a GET request and it should fire off on load of the component. Take the response.data and assign it to the famousPeopleArray.
X Add a bullet list of everyone in the `famousPeopleArray` array to the bottom of the `FamousSection` Component.
X When the Submit button is clicked, add the new famous person to the database with a POST request.
X Once a successful POST request has been made, the list on the DOM should update to show that new person.
X Clear the input fields after a new person is added.

## Stretch Goals

### Components (REQUIRES PROPS)

Split the `FamousSection` Component into 3 Components:

X a FamousPersonForm (to add a new person)
X a FamousPersonList (to display each person in the database)
X a FamousPerson (to display a single famous person's info as *'Felicia Day is famous for "The Guild".* (Use this inside of the FamousPersonList component.)

