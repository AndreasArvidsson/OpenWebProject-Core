# OpenWebProject Core

**JS core agumentation**    
Augments JS core types/prototypes with additional features    

Examples of new functionality is:
* [Array](array/README.md): unique, remove, contains
* [Object](object/README.md): map, reduce
* [String](string/README.md): format, replaceAll, equalsIgnoreCase
* [Date](date/README.md): format, getCurrentTimeMillis
* [Math](math/README.md): clamp

For specifics se readme in each src/type directory.

## Installation
`npm install owp.core --save`

## Usage
```javascript
//Implement all augmentations
import "owp.core";

//Implement all augmentations for a specific type
import "owp.core/array";
import "owp.core/string";

//Implement single function
import "owp.core/array/unique";
import "owp.core/string/format";
```