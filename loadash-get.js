var object = { 'a': { 'b': { 'c': 3 } } };
//var object = { 'a': [{ 'b': { 'c': 3 } }] };

function get(obj, path) {
  let pathArray = path.split('.');
  let temp = obj;
  pathArray.forEach(item => {
    temp = temp[item];
  });
  return temp;
}

console.log(get(object, 'a.b.c'));
//get(object, 'a[0].b.c');
// => 3