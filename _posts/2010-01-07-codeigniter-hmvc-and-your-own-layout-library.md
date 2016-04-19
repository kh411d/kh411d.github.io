---
layout: post
status: publish
published: true
title: Codeigniter HMVC and Your own Layout Library
author:
  display_name: Khalid Adisendjaja
  login: admin
  email: contact@khal.web.id
  url: http://khal.web.id
author_login: admin
author_email: contact@khal.web.id
author_url: http://khal.web.id
excerpt: "I'm using HMVC to make my web apps more modular, if you don't now what is
  HMVC you can check on Wiki, so then I'm trying to make a partial output from some
  module to the big layout template , and then I came into problems when I make a
  layout library as usual you have to generate an instance of CI like this,\r\n\r\n$this->obj
  =& get_instance();\r\n\r\nand then I'm trying to load a vew from some module,\r\n\r\n$this->obj->load->view($view,$data);\r\n\r\nIt
  will become an error, because $view cannot be load up, why ????"
wordpress_id: 131
wordpress_url: http://www.khalidadisendjaja.web.id/?p=131
date: '2010-01-07 20:12:51 +0700'
date_gmt: '2010-01-07 13:12:51 +0700'
categories:
- Internet &amp; Tech
tags: []
comments:
- id: 470
  author: Tahsin Hasan
  author_email: tahsin352@yahoo.com
  author_url: http://newdailyblog.blogspot.com
  date: '2010-07-15 22:40:32 +0700'
  date_gmt: '2010-07-15 15:40:32 +0700'
  content: "Hello,\r\n\r\nsee Advanced Codeigniter Library on <a href=\"http://newdailyblog.blogspot.com/2010/07/codeigniter-advanced-layout-library.html\"
    rel=\"nofollow\">http://newdailyblog.blogspot.com/2010/07/codeigniter-advanced-layout-library.html</a>."
---
I'm using HMVC to make my web apps more modular, if you don't now what is HMVC you can check on Wiki, so then I'm trying to make a partial output from some module to the big layout template , and then I came into problems when I make a layout library as usual you have to generate an instance of CI like this,

 
    <pre lang="php">$this->obj =& get_instance();

and then I'm trying to load a vew from some module,

 
    <pre lang="php">$this->obj->load->view($view,$data);

It will become an error, because $view cannot be load up, why ????  
 After checking up inside $this->obj, it actually only load up the global view of CI ('ex: ../application/views/ ...')

so I check the Modules.php on your libraries folder, HMVC is not overriding the default view of CI,  
 you might have to pass your controller object ( The $this object ) from your controller to your layout library

as example :

On your module controller :

 
    <pre lang="php">class Post extends Controller {
    function Post()
    {
    parent::Controller();
    }
    function Read(){
    $this->layout->load('read.php',$this);
    }
    }

On your Layout library :

 
    <pre lang="php">function load($view,$controller){
    
    $partial = $controller->load->view($view,true);
    
    //parse to your big layout
    $data['content_module'] = $partial;
    $controller->load->view($path_to_layout,$data);
    
    }

Hope this will help for somebody who have some problem like myself