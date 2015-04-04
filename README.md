# web-midi-devices
Get a list of midi input or output device names

## Install

`npm install --save web-midi-devices`

## Example

``` javascript
var midiDevices = require("web-midi-devices");

midiDevices.inputs().then(log_names);
midiDevices.outputs().then(log_names);

function log_names(names){
	console.log(names); // Array of strings of device names
}
````
