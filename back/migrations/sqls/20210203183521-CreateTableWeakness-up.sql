/* Replace with your SQL commands */
CREATE TABLE weaknesses(
       id         INTEGER  NOT NULL AUTO_INCREMENT PRIMARY KEY,
   id_attacker INTEGER  NOT NULL
  ,id_defender INTEGER  NOT NULL
  ,INDEX `fk_wekanesses_1_idx` (`id_attacker`),
    FOREIGN KEY (`id_attacker`)
    REFERENCES `types` (`id`)
    ,INDEX `fk_types_2_idx` (`id_defender`),
    FOREIGN KEY (`id_defender`)
    REFERENCES `types` (`id`)
) ENGINE=INNODB;
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,4);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,5);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,6);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,7);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,8);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,9);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (1,1);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (2,1);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,4);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,4);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,5);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,6);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,7);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,8);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (3,9);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (4,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (4,6);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (6,5);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (6,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (5,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (5,4);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (7,9);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (7,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (8,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (8,7);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (9,3);
INSERT INTO weaknesses(id_attacker,id_defender) VALUES (9,8);
