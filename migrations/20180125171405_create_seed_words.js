
exports.up = function(knex, Promise) {
  return knex('words').insert([
    {
      "word": "ajax",
      "definition": "Asynchronous JavaScript and XML. AJAX can allow a web page to display and update changes in the web browser without interruption, even while data is being transmitted to and from the server. Gmail is one example of a web application that utilizes AJAX."
    }, {
      "word": "backslash",
      "definition": "Short for application programming interface, API is a set of routines, protocols, and tools for building software applications. APIs allow programmers easier entry into another company''s program or service. For example, large companies and communities such as Facebook and Twitter use APIs to allow programmers or website developers easier access to their services and members."
    }, {
      "word": "braces",
      "definition": "These { } aren't 'curly braces,' they're just braces.",
    }, {
      "word": "brackets",
      "definition": "These [ ] aren't square brackets, they're just brackets."
    }, {
      "word": "canonical",
      "definition": "Authorized, recognized, or accepted."
    }, {
      "word": "focus",
      "definition": "HTML method that allows a user to start typing into the specified field once the page loads."
    }, {
      "word": "foobar",
      "definition": "The terms foobar, or foo and bar are used as placeholder names in coding. They've been used to name variables and functions whose exact identity isn't important and server only to teach and demonstrate a concept."
    }, {
      "word": "framework",
      "definition": "A set of tools to organize the architecture for your app."
    }, {
      "word": "GET",
      "definition": "The HTTP GET method requests information. Requests using GET should only retrieve data."
    }, {
      "word": "fork",
      "definition": "As in fork this repl.it, it can also be used to express frustration with a repl, as in, 'Fork this repl!'."
    }, {
      "word": "hello world",
      "definition": "A 'Hello, World!' program is a computer program that outputs or displays 'Hello, World!' to a user. Being a very simple program in most programming languages, it is often used to illustrate the basic syntax of a programming language for a working program.[1]It is often the very first program people write when they are new to a language."
    }, {
      "word": "PATCH",
      "definition": "The HTTP PATCH request method applies partial modifications to a resource."
    }, {
      "word": "why isn't this working",
      "definition": "I don't know. But read the error messages, follow the trail, take some time to refactor your code, make sure all your variable names and routes are aligned, use wolf fencing, and before going down a rabbit hole, or if you find yourself there, ask for help."
    }, {
      "word": "rabbit hole",
      "definition": "Nonsensical process of getting from Point A to Point B with no clear route (and often no recollection) on how one got there. When coders go down a rabbit hole, they often wish they'd stopped hours ago to ask for help."
    }, {
      "word": "clip art",
      "definition": "Something you should never, ever use."
    }, {
      "word": "currying",
      "definition": "Currying, or partial application, is one of the functional techniques that can sound confusing to people familiar with more traditional ways of writing JavaScript. But when applied properly, it can actually make your functional JavaScript more readable."
    }
  ])
};

exports.down = function(knex, Promise) {
  return knex("words").del();
};
