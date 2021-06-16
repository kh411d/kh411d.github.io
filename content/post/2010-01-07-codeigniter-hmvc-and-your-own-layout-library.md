---
date: 2010-01-07T13:12:51+07:00
tags:
- codeigniter
- php
image: /images/codeigniter.jpg
title: Codeigniter HMVC and Your own Layout Library
url: /2010/01/07/codeigniter-hmvc-and-your-own-layout-library/
---

I'm trying to make a partial output from hmvc module,
```php
    $this->obj =& get_instance();
```
and then I'm trying to load a view from some module,
```php
    $this->obj->load->view($view,$data);
```
This will resulting errors, it turns out `$this->obj` is only loading the global view of CI i.e. `./application/views/` HMVC is not overriding the default view of CI, you might have to pass your controller object `$this` from your controller to your layout library,

On your module controller :
```php
    class Post extends Controller {
        function Post(){
            parent::Controller();
        }
        function Read(){
            $this->layout->load('read.php', $this);
        }
    }
```
On your Layout library :
```php
    function load($view,$controller){
        $partial = $controller->load->view($view,true);

        //parse to your big layout
        $data['content_module'] = $partial;
        $controller->load->view($path_to_layout,$data);
    }
```
Hope this will help for somebody who have some problem like myself