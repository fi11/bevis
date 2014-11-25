BEViS css class naming tool.

[BEViS naming doc in Russian](https://github.com/bevis-ui/docs/blob/master/manual-for-beginner.md).

## Installation

```
$ npm install bevis
```

## Example

```js
var bevis = require('bevis')();
var block1 = bevis.block('butthead');
var block2 = bevis.block('beavis', 'great-cornholio');

block1.name();
block1.elem();

block1.name(); // butthead
block1.name('drunk', 'fallen'); // butthead _drunk _fallen

block1.elem('hair'); // butthead__hair
block1.elem('hair', 'disheveled', 'dirt'); // butthead__hair _disheveled _dirt

block2.name(); // beavis_great-cornholio
block2.name('drunk', 'fallen'); // beavis_great-cornholio _drunk _fallen

block2.elem('hair'); // beavis_great-cornholio__hair
block2.elem('hair', 'disheveled', 'dirt'); // beavis_great-cornholio__hair _disheveled _dirt
```

## Running tests

```
$ npm run tests
```

## Authors

  - [Pavel Silin](https://github.com/fi11)

# License

  MIT
