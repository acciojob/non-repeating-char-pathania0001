function firstNonRepeatedChar(str) {
  let map = new Map();
	let size = str.length;
	for(let i=0;i<size;i++)
		map.set( str[i] , ( map.get(str[i] ) || 0) + 1 );
	
	for(let i=0;i<size;i++)
		{
			if(map.get(str[i]) ==  1)
				return str[i];
			
		}
	return null;
}
 const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
