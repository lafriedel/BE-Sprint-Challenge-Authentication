# Sprint Challenge: Authentication - Dad Jokes

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Authentication. During this Sprint, you studied Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication. In your challenge this week, you will demonstrate proficiency by creating an application that will give you a list of random dad jokes, as long as you are authorized.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency w/ Authentication and your command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are currently locked out.

Implement an User Authentication System in order to access the jokes from the Jokes API that we want to consume. You will need to ensure that your system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using _sessions_?

Sessions store information about the client that requested the session on a server. For the purpose of authentication, it is used to persist auth information throughout all client requests until the session ends. This is possible because auth information is transmitted between the client and server via cookies.

2. What does bcrypt do to help us store passwords in a secure manner.

Bcrypt hashes passwords before saving them to a database. A hash is a long string of seemingly random characters that obscures the information being proteted by it. The hash is created by an algorithm that uses the password plus some additional parameters. Given the same password and parameters, the resulting hash will always be identical (so long as the same algorithm is used to create it).

3. What does bcrypt do to slow down attackers?

It doesn't fully prevent an attacker from obtaining the information, but it is very secure because after obtaining the hash (a feat in itself), the attacker also needs to know the algorithm used to create the hash, and how many rounds of hashing were used to generate the final hash.

4. What are the three parts of the JSON Web Token?

A JSON Web Token's three parts, denoted in the token by any string of characters separated by a period, are:
* A header that contains the type of algorithm used to create the token, and the type of token ("jwt" in this case)
* A payload that contains permissions and optional keys (like the token's lifespan, the subject of the token, etc)
* A signature, which is a hash of the base64-encoded header + payload, plus a secret provided by the server.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on this Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] `cd` into the root of the project and run `yarn` to install dependencies.
- [ ] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.

Helpful Tip on Testing this Project:

- [ ] **TEST** this project using **`POSTMAN`**.

## Minimum Viable Product

- [ ] Implement the `register` function inside `/config/routes.js`.
- [ ] Implement the `login` function inside `/config/routes.js`.
- [ ] Use JSON Web Tokens for authentication.

**Note** The migrations and a database with empty users is already included

- [ ] Add the authentication related code. If every is done correctly, visiting `/api/jokes` should return a list of jokes.

## Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, style it!
