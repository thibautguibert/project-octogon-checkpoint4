/* Replace with your SQL commands */
CREATE TABLE types(
   name  VARCHAR(45) NOT NULL
  ,id    INTEGER  NOT NULL PRIMARY KEY 
  ,logo  VARCHAR(255) NOT NULL
  ,color VARCHAR(6) NOT NULL
) ENGINE=INNODB;
INSERT INTO types(name,id,logo,color) VALUES ('La SACEM',1,'money.png','161720');
INSERT INTO types(name,id,logo,color) VALUES ('Les Mythiques',2,'sphinx.png','E6ECF2');
INSERT INTO types(name,id,logo,color) VALUES ('Les Frites',3,'fried-potatoes.png','D3A63B');
INSERT INTO types(name,id,logo,color) VALUES ('Les Babies',4,'feeding.png','7BB440');
INSERT INTO types(name,id,logo,color) VALUES ('Les Meufs',5,'cocktail.png','FFE038');
INSERT INTO types(name,id,logo,color) VALUES ('Les Charos',6,'sex-education.png','F7779B');
INSERT INTO types(name,id,logo,color) VALUES ('Les 13 Organisés',7,'soccer-ball.png','0098D5');
INSERT INTO types(name,id,logo,color) VALUES ('Paname',8,'eiffel-tower.png','36446A');
INSERT INTO types(name,id,logo,color) VALUES ('Les Youtubers',9,'movie.png','CF2323');
