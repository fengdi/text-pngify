

const { decode, encode} =  require('fast-png');


 module.exports.encode =  function(string) {
   let hex = Buffer.from(string).toString("hex");
   hex = hex + (hex.length % 8 ? "0".repeat(8 - (hex.length % 8)) : "");
   let sqrt = Math.ceil(Math.sqrt(hex.length / 8));
   let mapPixelsLength = Math.pow(sqrt, 2);
   hex = hex + "00000000".repeat(mapPixelsLength - hex.length / 8);
   return encode({
     width: sqrt,
     height: sqrt,
     data: Buffer.from(hex, "hex"),
   });
 }


 module.exports.decode = function(buffer) {
   let metadata = decode(buffer);
   let hex = Buffer.from(metadata.data).toString("hex");
   hex = hex.replace(/0*$/g, "");
   return Buffer.from(hex, "hex").toString("utf-8");
 }
