---
comments: true # set false to hide Disqus
date: 2020-09-08T19:08:09+07:00
draft: false
image: /images/themarkdownrises.png
share: true    # set false to hide share buttons
tags: ["markdown","tutorial","cheatsheet"]
title: The Markdown Rises
---

It’s been a while, maybe a year since my last post, so I thought I have to at least write a post and hopefully going to be an easy read, so here I’m going to talk about the why, the what, and the how of the Markdown.

##### What's with the rises?

Markdown is trending when __[Static Site Generators (SSG)](https://khal.web.id/2016/05/03/bye-wordpress-hello/)__ are getting popular and becoming the next big thing of the Internet. Google and the other search engines start to penalize sites that load slowly, simply because [users experience interacting with a web page becomes vital](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html). Google wants the site owner to pay attention to [web performance](https://developers.google.com/web/updates/2018/07/search-ads-speed) by using its tools such as Lighthouse, PageSpeed Insights, and AMP. Luckily, You can use this [TestMySite](https://testmysite.withgoogle.com/) tool to check whether your site going to be penalized or not?

##### WYSIWYG Editor

Some of you might have been blogging on any platform and then tired with all the hassle comes from WYSIWYG editor such as the post that won’t be saved, cluttered UI, missing button, crash update, etc.

The Markdown has the same purpose with the WYSIWYG but in a less hassle and distractive way, you can write in any editing tools such as notepad,  docs, word, UltraEdit, or any online Markdown editor on the internet such as [StackEdit](https://stackedit.io/), [Dillinger](https://dillinger.io/), [Editor.MD](https://pandao.github.io/editor.md/en.html), [Typora](https://typora.io/), etc. 

And so you don’t have to be dependant on WYSIWYG editor that comes quite varies on each blogging platform. The WYSIWYG editor is converting what you type to HTML in real-time, so what you type on the editor is what you’ll see after the post gets published.

##### How do Markdown works? 

As I mentioned before, the changes from the WYSIWYG editor will be visible immediately. But in Markdown, you need to add some **[Markdown Syntax]({{< relref "#markdown-syntax" >}})** to your writing, and then the text will be stored in a plaintext file with `*.md` extension. But, How do you get the file converted to `.html, .pdf, .epub, .doc, or .mobi` ? Yes, indeed you need a _converter, parser, implementation, or an app_ and those are called a __[Markdown processor](https://github.com/markdown/markdown.github.com/wiki/Implementations)__ 

To summaries,
- Write some text with markdown syntax in any text editor, 
- Save it with `*.md` extension, 
- Open the file in any markdown file _converter_, or _copy-paste_ the text to any markdown parser I mentioned above.

##### How should I use Markdown?

Nowadays, markdown can be use for blogging thanks to SSG, as you can see, this site was created with one of the SSG called **[Hugo](https://khal.web.id/2018/01/02/Thanks-Jekyll.-Hello-Hugo/)**. Markdown is also good for taking notes, creating letters, composing email, presentations, tech documentations, or maybe books.

##### The Benefits

In my experience, after you get used to, you will experience faster writing, more focus, less distraction, easy editing, generics, means that, your writing can be easily migrate to any type of documents `(html, pdf, epub, doc, or mobi)`. Not to worry, you can also use any html tags to your writing. As result, I never want to write my blog post using any other tools than markdown.

## Markdown Syntax {id="markdown-syntax"}

As you go through all these syntaxes, you need to pay attention to _spaces, tabs, and indentations_ because it matters. You can _copy-paste_ the example below to any online Markdown editor mentioned above.

###### Headers `<h1..h6/>`

Add a couple of **\#** hash and a single space at the beginning of a word or sentences, the number of **\#** hash corresponds to the heading level.

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

H1 with line
======

H2 with line
------
```

###### Paragraphs `<p/>`

```
Use a blank line to separate between paragraph, don't indent paragraph with spaces or tabs

This is the second paragraph
```

###### Line Breaks `<br/>`
Sometimes when you hit `<Enter>` once (i.e., insert a new line) the line break should be created, but if it's not, try to end the word or sentence with 2 or more spaces

```
Try to end this line with no spaces
The line after line break

---

Try to end this line with 2 spaces  
The line after line break
```

___Technical note:___ If the result above is the same, then the markdown processor uses GFM line breaks, so there's no need to use MD's two-space line breaks.

###### Italic `<em/>`

Add **\*** or **\_**  before and after a word or sentence
```
Let's make it *skew and yummy*
Let's make it _skew and yummy_
```

###### Bold `<strong/>`

Add **\*\*** or **\_\_**  before and after a word or sentence
```
Let's make it **BOLD AND BALD**
Let's make it __BOLD AND BALD__
```

###### Bold and Italic `<strong><em>`

Add **\*\*\*** or **\_\_\_** before and after a word or sentence
```
Let's make it ***BOLD AND SKEW***
Let's make it ___BOLD AND SKEW___
```

###### Blockquotes `<blockquote/>`

Add **\>** in front of a word or sentence

```
> The end is nigh

With multiple paragraphs,

> The end is nigh
>
> But the dawn is breaking

Nested Blockquote,

> The end is nigh
>
>> But the dawn is breaking

With other elements,

> ## The end is nigh
> 
> - list one
> - list two
>
> But the dawn is breaking
```

###### Ordered List `<ol/>`

Add number and period in front of the word or sentence, the first number is important, the rest will follow.
Add two blank lines to create another group of list

```
1. list number one
2. list number two
3. list number three, and the first paragraph
   with a line break

   This is 2nd paragraph on list number three

Create new group of list

7. list number seven
3. list number eight instead of three,  
    ```
    with another code element
    ```
3. list number nine instead of three
4. list number ten instead of four,
    1. child item number 1
    2. child item number 2
1. list number eleven instead of one
```


###### Unordered List `<ul/>`

You may add these symbols **\*** (asterisk) or **\+** (plus) or **\-** (dash) in front of the sentence to create an unordered list, the way you insert another element to the list is pretty much the same as the ordered list, the different that might happened is that the unordered list doesn't create a paragraph inside the list at the first place. 

```
* asterisk
* asterisk
* asterisk

---

+ plus
+ plus
+ plus

---

- minus
  
  add a paragraph
- minus
- minus
```


###### Code Blocks `<pre><code>`

The Code blocks normally indented with four spaces or a tab, the other way is to enclose the codes with three of this **\`** tick symbol at the beginning and the end of the code (not available in all markdown processor).


        //This is the codes
        print("Hello world);

    ```
    //This is the codes
    print("Hello world");
    ```

Syntax Highlighting,

    ```json
    {
        "firstname": "James",
        "lastname": "Bonds",
        "fullname": "Panjul,
    }
    ```

For a single line of code, you can use a tick symbol before and after the code,

    Writing a line of code with tick symbol `print("Hello World");`


###### Escaping Symbols

You can use a **\\** backslash symbol to escape a symbol,

    Multiplying 2 \* 3 equal with 3 \* 2 equal with 3 \+ 3 equal with 12 \- 6

Especially if you want to escape the tick marks in a line of code, you may enclose the sentence in double tick marks **\`\`**

    ``I want to use `this tick mark` on a sentence``

All the symbol that you can escape,

| Symbols | Name         |
|:-------:|--------------|
| \\      | backslash    |
| \`      | tickmark     |
| \*      | asterisk     |
| \_      | underscore   |
| \{\}    | curly braces |
| \[\]    | brackets     |
| \(\)    | parentheses  |
| \#      | hash         |
| \+      | plus         |
| \-      | minus        |
| \.      |  dot/period  |
| \!      | exclamation  |

###### Horizontal Rules `<hr/>`

```
***

---
```

###### Images `<img/>`

You may use either an absolute or relative path

    ![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png)

###### Links `<a/>`

    [Check out my Twitter @khalidity](https://twitter.com/khalidity)

###### Reference-style links `<a/>`

If you got so many links on your post and you're kinda want to make it a little bit neat, you can try to reference all the links in one place.

```
There is a lot of search engine that is worth for you to try such as [Google][1], [Bing][2], [Yahoo][3], and last but not least [DuckDuckGo][4]


[1]: https://google.com
[2]: <https://bing.com>
[3]: https://yahoo.com "its yahoo title"
[4]: <https://duckduckgo.com> 'duckduckgo title'
```

###### URLs and Email `<a/>`

    <https://khal.web.id>
    <johndoe@fake.com>

#### Extended Markdown

These extended syntaxes below aren't available in all Markdown processors or parsers, you need to experiment yourself.

###### Tables `<table/>`

To create a table, you need to use three or more hyphens \-\-\- to create each column's header, and some pipes \| to separate each column

```
| Header1 | Header 2 | Header 3 |
|---------|----------|----------|
| item    | item     | item    |
| item    | item     | item    |
```

you can add alignment,

```
| Header1 | Header 2 | Header 3 |
| :------ | :-------:| -------: |
| item    | item     | item    |
| item    | item     | item    |
```

###### Heading IDs

This might be different in each markdown processor,

    ### A Header with ID {#custom-id}

    or in Hugo,

    ### Another header with ID {id="custom-id"}

Link to Heading IDs,

    [A Header with ID](#custom-id)

    or in Hugo,

    [Another header with ID]({{< relref "#custom-id" >}})

###### Definition List `<dl/>`

```
Term one
: Definition of 1st term

Term two
: Definition of 2nd term
: another definition of 2nd term
```

###### Strikethrough `<del/>`

```
You\'ll never ~~die~~
```

###### Task lists `<input type="checkbox"/>`

You can create a list of items with checkboxes if it's supported by a markdown processor

```
- [x] Go shopping
- [ ] Laundry
- [ ] Meet John
```

> “The scariest moment is always just before you start. After that, things can only get better.” 
> ~ Stephen King