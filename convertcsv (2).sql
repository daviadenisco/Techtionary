CREATE TABLE words(
   id         INTEGER  NOT NULL PRIMARY KEY 
  ,word       VARCHAR(100) NOT NULL
  ,definition VARCHAR(2000) NOT NULL
  ,source     VARCHAR(1000) NOT NULL
  ,author     VARCHAR(25) NOT NULL
  ,date       VARCHAR(100)
);
INSERT INTO words(id,word,definition,source,author,date) VALUES (6,'ajax','Short for Asynchronous JavaScript and XML, AJAX is a term coined by adaptive path. It is a method of describing web applications that take advantage of using a combination of XHTML, CSS, DOM, XML, and XSLT. AJAX can allow a web page to display and update changes in the web browser without interruption, even while data is being transmitted to and from the server. Gmail is one example of a web application that utilizes AJAX.','https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (7,'api','Short for application programming interface, API is a set of routines, protocols, and tools for building software applications. APIs allow programmers easier entry into another company''s program or service. For example, large companies and communities such as Facebook and Twitter use APIs to allow programmers or website developers easier access to their services and members.','https://en.wikipedia.org/wiki/Application_programming_interface','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (9,'backslash','The backslash (\) is a typographical character used mainly in computing and is the mirror image of the common, or forward, slash (/). It is sometimes called a hack, whack, escape(from C/UNIX), reverse slash, slosh, downwhack, backslant, backwhack, bash, reverse slant, and reversed virgule.','https://en.wikipedia.org/wiki/Backslash','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (1,'canonical','Authorized; recognized; accepted.','http://www.dictionary.com/browse/canonical','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (8,'focus','Allows a user to start typing into the specified field once the page loads.','https://www.w3schools.com/tags/att_input_autofocus.asp','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (5,'frameword','A framework is a set of tools to organize your architecture for your app.','https://en.wikipedia.org/wiki/Software_framework','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (2,'get','The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data.','https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (4,'patch','The HTTP PATCH request method applies partial modifications to a resource.','https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (10,'shell','A shell is a software interface that''s often a command line interface that enables the user to interact with the computer. Some examples of shells are MS-DOS Shell (command.com), csh, ksh, and sh. Below is a picture and example of what a Terminal window with an open shell.','https://en.wikipedia.org/wiki/Z_shell','davia','');
INSERT INTO words(id,word,definition,source,author,date) VALUES (3,'test script','A set of instructions to be performed on a system to ensure a system functions as expected.','https://en.wikipedia.org/wiki/Test_script','davia','');
