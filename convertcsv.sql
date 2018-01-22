CREATE TABLE Techtionary(
   id         INTEGER  NOT NULL PRIMARY KEY 
  ,word       VARCHAR(11) NOT NULL
  ,definition VARCHAR(117) NOT NULL
  ,source     VARCHAR(61) NOT NULL
  ,author     VARCHAR(5) NOT NULL
  ,timestamp  VARCHAR(30)
);
INSERT INTO Techtionary(id,word,definition,source,author,timestamp) VALUES (1,'canonical',E'authorized, recognized, accepted','http://www.dictionary.com/browse/canonical','davia',NULL);
INSERT INTO Techtionary(id,word,definition,source,author,timestamp) VALUES (2,'test script',E'a set of instructions to be performed on a system to ensure a system functions as expected','https://en.wikipedia.org/wiki/Test_script','davia',NULL);
INSERT INTO Techtionary(id,word,definition,source,author,timestamp) VALUES (3,'get',E'The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data','https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET','davia',NULL);
