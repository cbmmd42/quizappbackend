# quizappbackend
Operating system: Ubuntu 18.04.3 LTS
Basic LAMP setup<br/>
## Server Configuration info
The server which hosts my application runs nginx to forward incoming requests to my express servers<br />
It also runs pm2 to run my express servers and host my react application locally<br />
nginx is acting as a reverse proxy<br />

My three additions to the configuration file for nginx was these three blocks of code.

location / {<br />
        proxy_pass http://localhost: ****;<br />
        proxy_http_version 1.1;<br />
        proxy_set_header Upgrade $http_upgrade;<br />
        proxy_set_header Connection 'upgrade';<br />
        proxy_set_header Host $host;<br />
        proxy_cache_bypass $http_upgrade;<br />
    }<br /><br />
    location /quizapp {<br />
        proxy_pass http://localhost: ****;<br />
        proxy_http_version 1.1;<br />
        proxy_set_header Upgrade $http_upgrade;<br />
        proxy_set_header Connection 'upgrade';<br />
        proxy_set_header Host $host;<br />
        proxy_cache_bypass $http_upgrade;<br />
    }<br /><br />
    location /answers {<br />
        proxy_pass http://localhost:****;<br />
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;<br />
        proxy_set_header Connection 'upgrade';<br />
        proxy_set_header Host $host;<br />
        proxy_cache_bypass $http_upgrade;<br />
    }<br />

## Database Info

Database type: mysql<br/>
Database setup: 
For the setup of my database I created a new database and database user, 
and decided on splitting the tables for questions and answers. 
The questions table has an id a priamry key and a question. 
The answers table has an id, a QID which is used to match the answer to a particualr questions,
an answer and an int/bool which represents whether the answer is correct or incorrect. 
I set it up this way so that the questions would be separated from their answers and so that it would be easy to add an 
answer to a question if desired. 

database username: ********* 
password: *********

version 2.0

CREATE TABLE questions (
    ID int NOT NULL AUTO_INCREMENT,
    question varchar(1024) NOT NULL,
    PRIMARY KEY (ID)
);<br />

CREATE TABLE answers (
    ID int NOT NULL AUTO_INCREMENT,
	QID int NOT NULL,
    answer varchar(255) NOT NULL,
	correct int NOT NULL,
    PRIMARY KEY (ID)
);<br />


INSERT INTO questions (question)
VALUES 
('What is forty-eight divided by six?'),
('Ernie had $10 in cash, with which he purchased gum for $1.29, a candy bar for $1.49 and a beverage for $2.39. If he does not have to pay sales tax, how much change should he receive?'),
('The Johnson household has a food budget of $355 per month. They have already spent $187 this month. How much is left in their budget for the month?'),
('Npm init creates a package.json file in your current directory.'),
('The third president of the United States was:'),
('O to the n^2 complexity is a good complexity for a sorting algorithm.'),
('Which of these names is NOT a a real city in Europe:');<br />


INSERT INTO answers (QID, answer, correct)
VALUES 
(1,'7',0),
(1,'8',1),
(1,'6',0),
(1,'9',0),
(2,'4.27',0),
(2,'4.64',0),
(2,'4.83',1),
(2,'4.89',0),
(2,'4.93',0),
(3,'168',1),
(3,'178',0),
(3,'164',0),
(3,'89',0),
(3,'162',0),
(4,'true',1),
(4,'false',0),
(5,'John Adams',0),
(5,'James Madison',0),
(5,'James Monroe',0),
(5,'Thomas Jefferson',1),
(6,'true',0),
(6,'false',1),
(7,'Zerkenstin',1),
(7,'Geilenkirchen',0),
(7,'Rottenegg',0),
(7,'Nasty',0);<br />
