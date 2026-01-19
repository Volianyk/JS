let d=new Date();
console.log(d);

let s = new Set;
s.add('qw');
s.add('jhqw');
s.add('322qw');
console.log(s);
console.log(s.has('qw'));
console.log(s.delete('jhqw'));
console.log(s);
s.forEach(value => console.log(value));

let map=new Map;
console.log(map);
map.set(1, 'a');
map.set(2, 'b');
map.set('likar', {name:'Oleg', age:32});
console.log(map);
console.log(map.get(1));
console.log(map.get('likar'));

