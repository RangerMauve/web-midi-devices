exports.inputs = inputs;
exports.outputs = outputs;

function inputs() {
	return get_access()
		.then(get_names("inputs"));
}

function outputs() {
	return get_access()
		.then(get_names("outputs"));
}

function get_names(key) {
	return function (midi) {
		var names = [];
		midi[key].forEach(function (device) {
			names.push(device.name);
		});
		return names;
	}
}

function get_access() {
	return navigator.requestMIDIAccess();
}
