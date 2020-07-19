# text-pngify






## Install

```sh
npm i -s text-pngify
```

## Usage

#### encode
```javascript
const { encode } =  require('text-pngify');

// encode String => Uint8Array(PNG)

let u8a = encode('hello world');
// Uint8Array(80) [
//   137,  80, 78,  71,  13,  10,  26,  10,   0,  0,   0,  13,
//    73,  72, 68,  82,   0,   0,   0,   2,   0,  0,   0,   2,
//     8,   6,  0,   0,   0, 114, 182,  13,  36,  0,   0,   0,
//    23,  73, 68,  65,  84, 120,  94,  99, 200, 72, 205, 201,
//   201,  87, 40, 207, 103,  40, 202,  73,  97,  0,   1,   0,
//    50, 248,  4,  93, 192, 177, 254,  97,   0,  0,   0,   0,
//    73,  69, 78,  68, 174,  66,  96, 130
// ]

// toFile
require(fs).writeFileSync('o.png', u8a)

// toBase64
Buffer.from(u8a).toString('base64')
// iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4XmPISM3JyVcoz2coyklhAAEAMvgEXcCx/mEAAAAASUVORK5CYII=



```

#### decode
```javascript
const { decode } =  require('text-pngify');

// decode Uint8Array(PNG) => String

//fromFile
let text = decode(fs.readFileSync('o.png'))
// "hello world"

//fromBase64
decode(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAF0lEQVR4XmPISM3JyVcoz2coyklhAAEAMvgEXcCx/mEAAAAASUVORK5CYII=','base64'))
// "hello world"

```
