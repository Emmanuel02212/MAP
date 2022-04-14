//explain maps in ES6
// map is basically a collection of keys and values
// you can create a map by passing an array to new map()
// and create a map and use map.set ()
let phones = new Map();
phones.set ("iphone","$600");
phones.set ("samsung","$350");
phones.set ("tecno","$85");
phones.set ("vivo","$40");

for (let[k,v]of phones) {
    console.log(k," : ", v);
    
}
   


//maps methods
//new Map()defines a new map object
//set()sets the value for a key in a map
//get()gets the value for a key in a map
//has()returns true if a key exists in a map
//keys()returns the iterator object with the keys in a map

