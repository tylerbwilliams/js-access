	
	'use strict';
	
	export default ()=>{
		let map = new Map();
		return ( items )=>{
			if ( items instanceof Array ) {
				let obj = {};
				for ( var i = 0, len = items.length; i < len; ++i ) {
					let item = items[i];
					if (!map.has(item))
						map.set(item, Symbol(item));
					obj[item] = map.get(item);
				}
				return obj;
			}
			else {
				let item = items;
				if (!map.has(item))
					map.set(item, Symbol(item));
				return map.get(item);
			}
		};
	};