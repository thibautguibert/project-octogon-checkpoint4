/* Replace with your SQL commands */
CREATE TABLE rappers(
   id         INTEGER  NOT NULL AUTO_INCREMENT PRIMARY KEY
  ,name       VARCHAR(45) NOT NULL
  ,rarity     INTEGER  NOT NULL
  ,lifepoints INTEGER  NOT NULL
  ,power      INTEGER  NOT NULL
  ,cost       INTEGER  NOT NULL
  ,image      VARCHAR(255) NOT NULL
  ,id_type    INTEGER  NOT NULL
    ,INDEX `fk_types_1_idx` (`id_type`),
    FOREIGN KEY (`id_type`)
    REFERENCES `types` (`id`)
) ENGINE=INNODB;

INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Freeze Corleone',4,3,6,3,'freeze.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Fianso',1,2,1,1,'fianso.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Jul',4,5,4,3,'jul.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Ninho',5,15,5,5,'ninho.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Niska',3,4,2,2,'niska.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Heuss l''Enfoiré',4,4,5,3,'heuss.png',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Plk',1,3,1,1,'plk.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Gambi',2,2,2,2,'gambi.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Koba LaD',3,2,2,1,'koba.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Soolking',3,4,3,3,'soolking.jpg',1);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Kery james',4,8,3,4,'kery.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('IAM',5,10,4,4,'iam.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Arsenik',4,6,5,3,'arsenik.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Oxmo Puccino',2,2,4,2,'oxmo.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Nessbeal',1,2,2,1,'nessbeal.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Les Sages Poètes de la Rue',3,10,2,3,'sage.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Suprême NTM',3,4,5,4,'NTM.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Fonky Family',1,3,1,1,'fonky.jpg',2);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Angèle',1,1,2,1,'angele.jpg',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Hamza',4,7,2,2,'hamza.png',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Damso',5,18,4,4,'damso.jpg',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Jeanjass Caballero',4,10,3,3,'jj.jpeg',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Stromae',2,1,3,2,'stromae.gif',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Romeo Elvis',3,9,1,1,'romeo.jpg',3);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Julien beats',1,1,1,0,'julien.jpg',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Kanoé',5,5,4,2,'kanoe.jpg',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Dasko',3,4,3,3,'dasko.png',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Bilouki',4,4,4,3,'bilouki.png',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('KLN 93',2,3,2,2,'KLN.png',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Secteur P',1,3,1,0,'secteur.png',4);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Chilla',4,7,3,2,'chilla.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Le Juiice',2,10,2,3,'juiice.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Méryl',3,5,3,3,'meryl.jpeg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Lala &ce',1,3,2,3,'lala.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Moon''A',2,4,1,1,'moon.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Shay',4,8,3,3,'shay.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Diam''s',5,12,4,4,'diamS.jpg',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Aya Nakamura',3,13,2,3,'aya.png',5);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Kamini',4,4,10,4,'kamini.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Alkpote',5,12,12,6,'alkapote.png',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Vald',4,4,7,3,'vald.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Orelsan',3,3,4,2,'orelsan.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Michel',1,1,4,2,'michel.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Lorenzo',2,1,7,3,'lorenzo.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Charles Vicomte',1,1,3,1,'vicomte.jpg',6);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Soprano',3,3,3,2,'soprano.jpg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('SCH',5,10,2,1,'sch.jpg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Soso Maness',4,15,1,1,'soso.png',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Kofs',3,5,2,2,'kofs.jpg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Naps',3,10,1,1,'naps.jpeg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Alonzo',2,3,2,2,'alonzo.jpg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Akhenaton',2,2,2,1,'akhenaton.jpg',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('YL',1,3,1,1,'YL.png',7);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Médine',5,12,7,5,'medine.png',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Youssoupha',3,2,4,3,'youssoupha.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Nekfeu',4,9,3,2,'nekfeu.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Alpha Wann',4,6,12,6,'alpha.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Hugo TSR',4,4,4,2,'hugo.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Seth Gueko',3,5,5,4,'seth.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Maes',3,5,8,5,'maes.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Kaaris',2,4,4,4,'kaaris.jpeg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Booba',2,3,5,5,'booba.jpg',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Bosh',1,1,2,1,'bosh.png',8);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Squeezie',5,10,10,5,'squeezie.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Michou',1,2,3,5,'michou.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('SEB',4,3,8,3,'seb.jpeg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Norman',1,2,2,2,'norman.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Mister V',4,4,7,3,'misterV.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Palmashow',3,4,1,2,'palmashow.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Prime',2,2,2,1,'prime.jpg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Joyca',2,3,3,3,'joyca.jpeg',9);
INSERT INTO rappers(name,rarity,lifepoints,power,cost,image,id_type) VALUES ('Maskey',3,6,3,2,'maskey.png',9);