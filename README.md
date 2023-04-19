# Project 4

## Overview

In this project we are going to build a simple application that will allow you
to add and delete items to a TODO list. This project will use Pug templates, CSS
and JavaScript.

## Project links

* [Video Walkthrough]()
* [Grading Rubric](https://shanepanter.com/cs208/grading-rubric.html)

## Task 1 - Create your Template

In the previous projects we used static HTML and CSS. In this project we will
switch to dynamically generated pages using [pug
templates](https://pugjs.org/api/getting-started.html). Your application will
consist of just one page that will have an HTML form and a list of todo items.
Users will be able to add and delete items fro their list.

A super [useful site](https://html-to-pug.com/) that can convert HTML to pug.
That way you can write your site in plain HTML and convert it to pug which can
save you some time. For this task all you have to do is get your templates to
render like what is shown below.

![example1](public/img/example1.png)

## Task 2 - Add CSS

The default styling is pretty plain 🙁. So for this task you need to add some
CSS to make your site look fancy 🎩. You are free to be as creative as you wish.
You will need to add at least 5 CSS rules.

## Task 3 - Add a Database

We will use [sqlite3](https://www.npmjs.com/package/sqlite3) as our database.
[SQLite](https://sqlite.org/index.html) is one of the most popular databases in
the world and is great for small projects and development purposes. SQLlite
understands most of the standard SQL language so as long as you write [ANSI
compatible
SQL](https://blog.ansi.org/2018/10/sql-standard-iso-iec-9075-2016-ansi-x3-135/)
you can switch to any other ANSI compatible database engine without changing
your code 😃. For this project we will just use the in memory database. In a
production environment we would need to make sure our database is loaded and
saved to a file.

When a user submits the form on the main page you will need to add a new TODO
item into your database. You will then need to allow a user to delete a selected
item out of the database.

## Task 4 - Complete the Retrospective

Once you have completed all the tasks open the file **Retrospective.md** and
complete each section that has a TODO label.

For the **Experience** section you need to detail your experience with this lab.

* Were there any things that you struggled with?
* Were there any parts of this lab that were unclear or poorly specified?
* Were you able to get the entire project done?

For the **Known issues or Bugs** section you need to detail any issues or bugs
that you have in your code. For example maybe your code crashes randomly and you
couldn't figure out why. If your code doesn't have any issues you can simply
write NONE in this section.

For the **Sources used** section you must detail any sources you used outside of
the textbook or course website. If you write NONE in this section it is assumed
that you didn't use google at all. Be safe CITE!

## Task 4 - Add, Commit, Push your code

Once you are finished you need to make sure that you have pushed all your code
to GitHub for grading! The Video walk through linked in the beginning of this
document will show you how to accomplish this task.

## Acceptance Criteria

* You have a complete application that includes front end and backend components
* All the instructor provided tests are passing
* You have written at least 1 test of your own
* You have pushed your code to github for grading
