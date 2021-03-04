# OpenWebProject Core

**JS core agumentation**    
Adds functions to augment JS core types/prototypes  

Examples of new functionality is:
* [Array](src/array/README.md): unique, remove, contains
* [Object](src/object/README.md): forEach, map, reduce
* [String](src/string/README.md): format, replaceAll, equalsIgnoreCase
* [Date](src/date/README.md): format
* [Math](src/math/README.md): clamp

For specifics see readme in each src/type directory.

## Installation
`npm install owp.core --save`

## Usage
```javascript
//Using named exports
import { unique, unique } from "owp.core/array";
import { format } from "owp.core/string";

//Using default export
import unique from "owp.core/array/unique";
import format from "owp.core/string/format";
```