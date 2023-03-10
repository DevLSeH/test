const formdata = new FormData();
formdata.append('name', 'zerocho');
formdata.append('item','orange');
formdata.append('item','melon');
formdata.has('item');
formdata.has('money');
formdata.get('item');
formdata.getAll('item');
formdata.append('test',['hi','zero']);
formdata.get('test');

console.log(formdata.get('test'));
