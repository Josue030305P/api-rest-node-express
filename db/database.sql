CREATE DATABASE appstore;
USE appstore;

CREATE TABLE softwares(
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(40) NOT NULL,
  esapciomb   SMALLINT NOT NULL,
  versionsoft VARCHAR(10) NOT NULL,
  precio      DECIMAL(7,2) NOT NULL
)ENGINE=InnoDB;

-- ALTER TABLE softwares CHANGE COLUMN esapciomb espaciomb SMALLINT NOT NULL ;

INSERT INTO softwares (nombre, esapciomb, versionsoft, precio) VALUES
('Google Chrome', 1, '1.0', 120),
('Mozilla Firefox', 1, '1.0',100),
('Microsoft Edge', 1, '1.0', 200),
('Opera', 1, '1.0', 120),
('Vivaldi', 1, '1.0', 100),
('Brave', 1, '1.0', 50),
('Safari', 1, '1.0', 75);




SELECT * FROM softwares;