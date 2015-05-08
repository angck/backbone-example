learning-yeoman-ch5
===================

This is the repository for the Learning Yeoman Chapter 5 tutorial.


![Build](https://travis-ci.org/jonniespratley/learning-yeoman-ch5.png)

```
  yo ember --test-framework=jasmine --coffee --karma
  
  510  git add .
  511  git commit -am 'added first default scaffold using new generator version'
  518  yo ember:controller posts
  520  touch app/scripts/config.coffee
  521  yo ember:controller posts
  522  yo ember:model post
```

## Test HELPERS
visit(url) - Visits the given route and returns a promise that fulfills when all resulting async behavior is complete.
find(selector, context) - Finds an element within the app's root element and within the context (optional). Scoping to the root element is especially useful to avoid conflicts with the test framework's reporter.
fillIn(input_selector, text) - Fills in the selected input with the given text and returns a promise that fulfills when all resulting async behavior is complete.
click(selector) - Clicks an element and triggers any actions triggered by the element's click event and returns a promise that fulfills when all resulting async behavior is complete.
keyEvent(selector, type, keyCode) - Simulates a key event type, e.g. keypress, keydown, keyup with the desired keyCode on element found by the selector.





# Get Started
To get started using the EmberJS Yeoman generator you need to create a new project directory and `cd` into that directory, take the following steps:

1. Create directory `mkdir ch5 && cd ch5`
2. Create EmberJS project.
	```
	$
	```
3. Create application
	```
	$
	```
	




--- 

## Commands Ran

```

  bower search showdown
  501  bower install showdown --save
  502  bower search moment
  503  bower install moment
  504  bower install moment --save
  
  
  
j-imac:learning-yeoman-ch5 jonathanspratley$ bower list
bower check-new     Checking for new versions of the project dependencies..
learning-yeoman-ch5#0.0.0 /WWW/Learning_Yeoman/learning-yeoman-ch5
├─┬ ember#1.3.2 (latest is 1.5.0-beta.3)
│ ├── handlebars#1.2.1 (1.3.0 available, latest is 2.0.0-alpha.2)
│ └── jquery#2.0.3 (latest is 2.1.0)
├─┬ ember-data#1.0.0-beta.5 (latest is 1.0.0-beta.7)
│ └─┬ ember#1.3.2 (1.5.0-beta.3 available)
│   ├── handlebars#1.2.1
│   └── jquery#2.0.3
├── handlebars#1.2.1 (latest is 2.0.0-alpha.2)
├── moment#2.5.1
└── showdown#0.3.1



```