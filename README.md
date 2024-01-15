// /controllers/todoController.js
    The controller file is included to implement all CRUD functions that will ensure the appropriate functionality of the Todo API.

    The CRUD functions required for this assignment were:
        Index
        Create
        Destroy
        Update
        Show

// /models/Todo.js
    The Todo model is intended to create the schema that MongoDB will display when new todo items are created inside of the database.
        In this case the schema has four different possible inputs. 
            Title; which is a required String.
            Description; which is an optional String.
            Completed; which is a required Boolean.
            created_at; which displays as a date format when the entry is created.

// /public/css/style.css
    The public folder is where the styling for the view engines is housed.

// /routes/todoRoutes.js
    The todoRoutes file is where all routes related to the todoController file will be housed for readability and simplicity reasons.

// /test/todo.test.js
    The test folder is where all testing related to the database will be housed.
        For each test, there is a brief description of what is expected to take place and then below are the actual requirements of the test in order for it to run successfully.

        In order to run the tests, 'npm test' must be ran in the command line.

        After running the test, there were 4 passed tests and 1 failed. This was due to the fact that there was a 'res.send' in my index function that would send the 200 status code, as well as a 'res.render' that would display the jsx page for Index.jsx. The 'res.send' was scrapped from the code because it was preventing the page from displaying, and therefore the test code was as well.

// /views/Layouts/Layout.jsx && /views/todos/Index.jsx && /views/todos/New.jsx
    The views folder is where the HTML structure for all of the different pages will be housed. In this case, there is only HTML for the Index and the New pages so that a new entry can easily be created, and then displayed within the Index page.

    The Layout.jsx file was created to make a default structure that will contain the pages styling and default structure. This is translated into the New.jsx and Index.jsx pages as well so that they maintain the same styling.

// /app.js
    The app.js file is utilized to house all 'require' functions that are necessary to create a working express application.

// /server.js
    The server.js file is used to create the connection to the server that allows for database manipulation.