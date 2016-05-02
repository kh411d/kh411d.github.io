---
layout: post
title: Things you should know when you start PHP-ing
date: '2010-07-12 15:41:43 +0700'
date_gmt: '2010-07-12 08:41:43 +0700'
categories:
- Internet &amp; Tech
tags: []
---
When you starting to get a grip on PHP, there are things that you should know, here I would descibe some of them, that might be useful,

**1. Windows / Linux / Macintosh / Solaris**  
 Of course , you need to know where you will be working on, PHP can run in any Operating System that support it, as far as my knowledge it can run on Windows, Linux, Macintosh, or Solaris.  
**Windows**  
 Luckily, PHP has already a compiled binary to be installed in the system, PHP can run on IIS or Apache in windows, it has executable windows installer or maybe you can do it manually, as explain in [http://php.net/manual/en/install.windows.php](http://php.net/manual/en/install.windows.php "http://php.net/manual/en/install.windows.php") , or maybe you want some bundled tools like XAMPP, WAMP , EasyPHP that only need one click to get you start PHP-ing on windows.  
**Linux**  
 There were many ways to start PHP-ing on Linux , some linux distribution has already included PHP, Apache and Mysql on installation package, and people usually called it with LAMP stack, there were tutorial where this can be done as example [http://php.net/manual/en/install.unix.php](http://php.net/manual/en/install.unix.php "http://php.net/manual/en/install.unix.php") and [http://www.lamphowto.com/](http://www.lamphowto.com/ "http://www.lamphowto.com/") another example on Ubuntu you can setup Lamp-server in a single command as describe here [https://help.ubuntu.com/community/ApacheMySQLPHP](https://help.ubuntu.com/community/ApacheMySQLPHP "https://help.ubuntu.com/community/ApacheMySQLPHP") or maybe you could just use XAMPP for linux  
**Macintosh**  
 Hmm... I never do PHPing on Macintosh so I cannot describe alot , you could just find some tutorial on google and the php manual [http://www.php.net/manual/en/install.macosx.php](http://www.php.net/manual/en/install.macosx.php "http://www.php.net/manual/en/install.macosx.php")  
**Solaris**  
 Well I guess its the same with mac I neither tried on solaris, but theres a manual at [http://php.net/manual/en/install.unix.solaris.php](http://php.net/manual/en/install.unix.solaris.php "http://php.net/manual/en/install.unix.solaris.php") or you can use SAMP Bundle [http://www.sun.com/bigadmin/features/articles/samp\_setup.jsp](http://www.sun.com/bigadmin/features/articles/samp_setup.jsp "http://www.sun.com/bigadmin/features/articles/samp_setup.jsp")

**2. Database**  
 PHP is almost support many kinds of database as listed here [http://www.php.net/manual/en/refs.database.php](http://www.php.net/manual/en/refs.database.php "http://www.php.net/manual/en/refs.database.php")  
 but usually when people get started, they will step to MySql or PostgreSql, those two are an open source database that used by many dev.  
 Other things that you should know is Database Administration tools, at the first time you should get a quick grip on PhpMyAdmin that comes from php installation, its a Mysql administration tools , and the two other tools are [MYsql Workbench](http://wb.mysql.com/ "http://wb.mysql.com/") to design graphical representations of a database and also for creating SQL statements that can be used to create the database, and then [SQL Yog](http://www.webyog.com/en/) , not free but you can try the trial, its easier to generate views and stored procedures.  
 Play with [PDO extension](http://php.net/manual/en/book.pdo.php) , it's really helpful for your development, support many kind of database, PDO is a _data-access_ abstraction layer, which means that, regardless of which database you're using, you use the same functions to issue queries and fetch data. PDO does _not_ provide a _database_ abstraction; it doesn't rewrite SQL or emulate missing features. You should use a full-blown abstraction layer if you need that facility. You cannot use the PDO extension by itself; you must use a [database-specific PDO driver](http://www.php.net/manual/en/pdo.drivers.php) to access a database server.

**3. WebServer**  
 Lots of web server can host PHP , the most well known web server is [Apache ](httpd.apache.org), you can find many tutorials out there to get to work with it.  
 Maybe you already have heard about [nginx](http://wiki.nginx.org/Main) it's popular bcoz of high performance and low resource consumption, many great websites powered by nginx (Wordpress, github, etc).  
 You could even use PHP with [JBOSS](http://en.wikibooks.org/wiki/PHP_with_JBoss) you can "Run Both PHP & JSP Using JBOSS Web Server With MySQL As Back End" or maybe [Apache Tomcat](http://wiki.apache.org/tomcat/UsingPhp)  
 any other web server that you could explore, Personal Web Server, Netscape and iPlanet servers, Oreilly Website Pro server, Caudium, Xitami, OmniHTTPd, and many others.

**4. PEAR & PHP Framework**  
[PEAR ](http://pear.php.net/)is a bunch of PHP Extension and Application Repository, that will help you to get what you need to make a fast development, many popular package like HTML\_Quickform2 (make it easier to develop form) , Auth Package that support database and LDAP layers , HTTP\_Oauth, Mail Package ..., etc just explore the site and try it yourself.  
 PHP has also many kinds of framework , **What is web framework?**, is a software framework that is designed to support the development of dynamic websites, Web applications and Web services.  
 Web Framework provides an architecture, components , tools for developers to create full feature web applications, some framework has good things or bad things, but that isn't the point, you can use any framework that suits you, know how to use it and tackle any problems that comes within, simply practicing make you great.  
 There are some framework that you could try, such as [ Zend Framework](http://framework.zend.com "Zend Framework") , [CodeIgniter](http://www.codeigniter.com "Codeigniter"), [CakePHP](http://cakephp.org), [Symfony](http://www.symfony-project.org), [Laravel](http://laravel.com "Laravel"), [Yii](http://www.yiiframework.com/ "Yii Framework")

**5. PHP and OpenSource**  
 PHP have a great relationship with OpenSource , **What is OpenSource?** hmm.. I can say its a free things but not actually free, there are some license that bound to it, whether the software could be use commercially or free, or maybe limited. There are so many php apps that based on OpenSource system, as example the website you reading right now is powered by [Wordpress ](http://wordpress.org)(its a blogging system) , and some thing similar such as Drupal, Joomla and for CRM you can use SugarCRM, for project tracking you can use DotProject, for Community builder you can use ELGG,Dolphin, etc.

**6. The last but not least is of course the PHP it self**   
 "PHP (recursive acronym for **_PHP: Hypertext Preprocessor_)** is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML. ", what is PHP actualy do? PHP is focusing on server-side scripting, but it can be use as Command line scripting and writing desktop application using [PHP-GTK](http://gtk.php.net/)  
 You should have some base on any programming language, dunno if it will work out with person without programming experience, PHP have two major version that commonly used, PHP4 and PHP5, and maybe PHP6. Basic [object-oriented programming](http://en.wikipedia.org/wiki/Object-oriented_programming "Object-oriented programming") functionality was added in PHP 3 and improved in PHP 4. Object handling was completely rewritten for PHP 5, expanding the feature set and enhancing performance.  
 Any text editors can be use to write PHP code, my fave is Eclipse PDT, Notepad++, Vim, NetBeans.  
 And then, Zend is the company behind PHP , check their website at [www.zend.com](http://www.zend.com) you could find many useful information about php technology.