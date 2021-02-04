/* Replace with your SQL commands */
DROP TABLE IF EXISTS rappers;
DROP TABLE IF EXISTS types;

CREATE TABLE types(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
   ,name  VARCHAR(45) NOT NULL
  ,logo  VARCHAR(255) NOT NULL
  ,color VARCHAR(6) NOT NULL
)ENGINE=INNODB;
INSERT INTO types(name,logo,color) VALUES ('La SACEM','money.png','161720');
INSERT INTO types(name,logo,color) VALUES ('Les Mythiques','sphinx.png','E6ECF2');
INSERT INTO types(name,logo,color) VALUES ('Les Frites','fried-potatoes.png','D3A63B');
INSERT INTO types(name,logo,color) VALUES ('Les Babies','feeding.png','7BB440');
INSERT INTO types(name,logo,color) VALUES ('Les Meufs','cocktail.png','FFE038');
INSERT INTO types(name,logo,color) VALUES ('Les Charos','sex-education.png','F7779B');
INSERT INTO types(name,logo,color) VALUES ('Les 13 Organisés','soccer-ball.png','0098D5');
INSERT INTO types(name,logo,color) VALUES ('Paname','eiffel-tower.png','36446A');
INSERT INTO types(name,logo,color) VALUES ('Les Youtubers','movie.png','CF2323');
