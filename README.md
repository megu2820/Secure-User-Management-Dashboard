Tech stack used (Major languages and resources)
          Frontend- Typescript ,React, Redux, Tailwind CSS
          Backend- Node.js, Express.js, Mocha, chai, supertest, 
          API used- https://reqres.in/
        
Readme File for Setup "Secure User Management Dashboard"
1.	Clone the repository from the given github link
2.	Cd ui/app and install necessary dependencies for the frontend using the command npm i
3.	Cd backend and install necessary dependencies for the backend using the command npm i
4.	Start the backend server using the command npm run dev
5.	Start the frontend by command npm start
    
Once the backend is started , hit the path http://localhost:4000/ping in browser and you will be greeted with “hello from Server” indicating the server is running.

![hello](https://github.com/megu2820/Secure-User-Management-Dashboard/assets/66476812/604d0408-d345-47c4-b335-5257547fb406)

Once the frontend is started you will see the following ui on http://localhost:3000/

 ![signin](https://github.com/megu2820/Secure-User-Management-Dashboard/assets/66476812/7007193a-02bd-4c99-9a50-b9e45391f93a)

The url of the protected dashboard page is http://localhost:3000/dashboard so if you try to access this path without logging in you will be redirected to sign up page ( as redux middleware is being used to maintain authentication based on redux state)

You can login using the following credentials-
Email : eve.holt@reqres.in
Password: cityslicka

Once you have logged in you will be get a alert of successful login and on clicking ok will be redirected to the protected dashboard page with following ui-

![protected](https://github.com/megu2820/Secure-User-Management-Dashboard/assets/66476812/180cfb9d-fef0-4b02-abe7-cf7d0ffc9e2c)
 

You can click on the logout button to logout and you will be redirected to the sign in page.

You can also sign up using the link to sign up page on sign in page 

![signup](https://github.com/megu2820/Secure-User-Management-Dashboard/assets/66476812/1ae3f229-f771-407a-8ab5-4d9848686eb4)
 

For sign up use any registered email with reqres.in like the one used during login as (only defined users succeed registration with reqres.in) and change password to 12345(example….) once successful you will get a alert of successful registration and to proceed with sign in .

Test driven Approach
For testing the crucial usable HTTP services endpoints created in backend, I have used mocha, chai and supertest
There are a total of 4 testcases for two http paths of /login and /register, to test both successful and fail possibilities of both paths
To run the test cases stop the server and run the command npm test 
And you should see the following output in terminal 

![testcases](https://github.com/megu2820/Secure-User-Management-Dashboard/assets/66476812/a5ef09cd-5066-49e3-8fdd-489ceb9401e2)


 


