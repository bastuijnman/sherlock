sherlock
========
Sherlock is a remote debugger focussed on easy usage

## Installing and Running
* clone the repo
* `cd` into the repo folder
* run `npm install`
* run `bower install`
* run `node ./sherlock.js`

## Options
```
-p, --port      Set the port sherlock runs on (default 7890)
```

## Transpile
Transpile the connector file by using this command:
`./node_modules/es6-module-transpiler/bin/compile-modules convert -f bundle -o src/server/public/connector.js src/client/client.js`