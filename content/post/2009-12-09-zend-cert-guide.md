---
categories:
- Internet &amp; Tech
date: 2009-12-09T15:26:29Z
date_gmt: 2009-12-09 08:26:29 +0700
tags: []
title: Zend cert guide ...
url: /2009/12/09/zend-cert-guide/
---

I've found an interesting comment from one of amazon book, which is  
 http://www.amazon.com/architects-Zend-Certification-Study-Guide/product-reviews/0973862149/ref=wl\_it\_o\_cm\_cr\_acr\_txt?ie=UTF8&showViewpoints=1

its about a zend cert study guide, hopefull the comment is true ... some of friend told me that you need  
 to get some more book for your reference and of course read the PHP manual to get pass the exam, he said  
 it will be a headache ... so be prepare...

One can easily argue that the certification exam itself is a waste of money, but with this book and its associated practice exams, the case is a little more cut-and-dry.

Want to pass the exam? Know the following things:

1. What can and can't go in a function/variable name.

2. What typehints are, how they work, and where they're applied.

3. What all of the array\_\*() functions do. The more verbose array\_\*\_\*() functions which nobody uses can be safely skipped over.

4. How to use the SimpleXML library in a very general way i.e. access elements, attributes and convert to DOM.

5. Everything about the new object model, including abstract and final classes, the new constructor format, destructors, autoloaders and access specifiers (public, private, protected).

6. How and when to pass by reference.

7. When things go out of scope.

8. What the following php.ini directives do: allow\_url\_fopen, register\_globals, enable\_dl, disable\_functions.

9. What goes in the superglobals and when ($\_SERVER, $\_GET, $\_POST, $\_REQUEST, $\_ARGV).

10. What all of the bitwise operators do (you should also be able to convert numbers to and from decimal, octal, hexadecimal and binary notation with nothing but your brain and a piece of scratch paper).

Database topics are covered, but you generally don't have to know any of the nonsense about mysqli or PDO--these things are all too buggy to actually use anyway, so learning about them is doubly pointless. If you can memorize function argument lists, do so with the preg\_ and various string functions, because they like to throw some curveballs that use the optional args no one ever thinks about. If you can't, then don't bother because you can usually eliminate at least two of the choices they give you right off the bat and guess your way through the rest.

And please, please, please, leave comments on the questions that have misspelled words. They really need to fix that if they're going to charge $125 for a test.