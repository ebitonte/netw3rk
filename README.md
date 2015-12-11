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

## Adding Cytoscape

I'll look into this tomorrow a little cause I'm not super postive, but I assume that at some point you'll need to give a static javascript file the data, which is definitely doable, just too late to focus on right now. I would just work on managing this massive json first and getting the data that you want/need before doing frontend work. We'll do this weekend.
