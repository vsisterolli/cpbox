# CPBox Back-End

CPBox it's an online programming judge that evaluates code solutions for algorithm problems.

The API was built using TypeScript, Express.js, C++, Prisma ORM and PostgreSQL.

## How to run

1. Install Node.js
2. Clone the repository
3. Run "npm install" on the repository folder
4. Run "npm start"

## Architeture
It follows a layered architeture with the following responsabilities:

### Controllers
Responsible for receiving HTTP requests, call their respective services and return a response.

### Middlewares
Useful general-purpose functions called between services.

### Services
Responsible for validating, generating and processing data, calling repository functions and return the processed result.

### Repository
Database comunication layer, responsible for dealing with database calls, querys, etc.

## Endpoints

### Base
localhost:5000

### POST /problem
It requires a "Problem" Object on the request body, containing the following keys on the request body:
- name: String
- description: String
- input_description: String
- output_description: String
- mb_memory_limit: Number (0.5 <= x <= 10)
- seconds_limit: Number (1 <= x <= 10)
- tests: File (zip)

The zip file should contain the problem tests enumerated like:
1.in / 1.out (the input and the expected output)
2.in / 2.out

Possible responses:
201 - CREATED
400 - BAD REQUEST - Possible problem with the test cases or missing fields on the body
500 - INTERNAL SERVER ERROR

The response may only contain an error message describing the problem.

### POST /submission/:problemId
It requires a "code" object containing the user's code that needs to be evaluated.

Possible responses:
200 - OK - Judged
404 - NOT FOUND - Problem doesn't exist or it is not public/listed
500 - INTERNAL SERVER ERROR

When succeeded, will return a string containing the result of each test case, example:
"AAWMTT", which means:
Test 1 - Accepted
Test 2 - Accepted
Test 3 - Wrong Answer
Test 4 - Memory Limit Exceeded
Test 5 - Time Limit Exceeded
Test 6 - Time Limit Exceeded
