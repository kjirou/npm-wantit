npm-wantit
==========

Execute "require" without MODULE_NOT_FOUND error.


## Examples
```
var wantit = require('wantit');

// Return "util" module like "require" method
var util = wantit('util');

// Error is not occured, it returns null
var moduleNotExist = wantit('module_not_exist');
```
