# NETW3RK

## Setup
First of all, hi Joyce.

Secondly, make sure you install [Homebrew](http://brew.sh/) if you haven't on your computer already, then install node by running 
```
brew install node
```

Then, clone this repository and run ```npm install```

After that, just run 
```
nodemon server.js
``` 
and you'll get instructions to go to your browswer and navigate to localhost:8080

## Changing Things

This app is currently using an example xml file, and isn't limiting it at all, it's simply finding it, converting it to json, and sending it the front end.

To do a different xml file, place it in `/public/data` and change enum `DATA_FILE` at the top of `routes/route.js`.

In order to limit what data is sent to the front end, you're going to edit `controllers/xmltojson`. Best thing to do here would just be to change the meat of the `function limitTheJson`. I've included a package called [lodash](https://lodash.com/) in that file that you may find useful in managing objects, arrays with a super powerful, but simple, interface.

In order to test that your json minimization is working, just navigate to http://localhost:8080/convert/NAME_OF_FILE and the converted json will be displayed on the page

## Visual

Go to `http://localhost/visual/FILE_NAME` and the code that exists will at the minimum get the converted JSON. It isn't really possible to just have a built in visualization working, so that is up to you to work in [cytoscape.js](public/javascripts/cytoscape.js) to add in the required functionality in whatever way you see fit. Also, css work can all be done in [main.css](public/stylesheets/main.css).

## Getting these changes

```
git remote add origin https://github.com/ebitonte/netw3rk.git
git fetch origin
git rebase origin/master
```
