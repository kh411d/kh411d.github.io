## Warning! DO NOT PUSH THIS BRANCH TO MASTER

### Install Hugo
Docs [https://gohugo.io/getting-started/quick-start/](https://gohugo.io/getting-started/quick-start/)

```
brew install hugo
```

### Set up repository
If you want to clone a repository including its submodules you can use the --recursive parameter.
```
git clone --recursive [URL to Git repo]
```

If you already have cloned a repository and now want to load it’s submodules you have to use submodule update.
```
git submodule update --init
```

if there are nested submodules:
```
git submodule update --init --recursive
```

Docs about SubModule [https://www.vogella.com/tutorials/GitSubmodules/article.html](https://www.vogella.com/tutorials/GitSubmodules/article.html)


### Adding themes

Add themes as Submodules, better to fork the repo themes before continuing
```
$ cd themes
$ git submodule add [Git forked repo url]
```
if theres is no .gitmodules file in root folder, init the submodules
```
$ git submodule init
```

### Preview and Build
Run server as Draft
```
$ hugo server -D -t [your theme folder name]
```
Run server with static files
```
$ hugo server -t [your theme folder name]
```


### Deployment to GitHub pages

Edit the deploy.sh for the correct theme file
```
# Build the project.
hugo -t hugo-theme-casper # if using a theme, replace with `hugo -t <YOURTHEME>`

```
Run the bash script
```
$ . deploy.sh
```
