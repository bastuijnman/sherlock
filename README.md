sherlock
========
Sherlock is a remote debugger focussed on easy usage

## Installing and Running
To be able to run sherlock, you will need to build it. The build process uses grunt, if you have not installed this yet you will need to run the following command:
```
npm install -g grunt-cli
```
Note: you may need to use `sudo` for this

### Install process
* clone the repo
* `cd` into the repo folder
* run `npm install`
* run `bower install`
* run `grunt build`
* run `node ./sherlock.js`

## Options
```
-p, --port      Set the port sherlock runs on (default 7890)
-h, --host		Set the host address sherlock runs on (defaults to localhost)
```