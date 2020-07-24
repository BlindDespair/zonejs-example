declare const Zone: any;

const myFirstZone = Zone.current.fork({
  name: 'my first zone',
});

console.log(myFirstZone.name); // my first

console.log(myFirstZone.parent === Zone.current); // true
