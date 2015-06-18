/**	
/**	dwarf.js
/**	
/**	This is an ES6 class with a private property map.
/**	
/**	This style of privatizing variables gives a few benefits:
/**	
/**		1.	Dynamic variables can be added/removed to the map.
/**		2.	There is no maintenance after initially adding it.
/**	
/**	But, there are also a few downsides to using a map to keep
/**	your private variables in:
/**	
/**		1.	You have to attach private methods to it, so you
/**			lose the memory benefit of prototypes.
/**		2.	While it is more obvious when you access a private
/**			variable `[priv].something`, it does add an
/**			additional level to your chain.
/**	
/**	These issues are going to be a problem when you have to
/**	create a *very* large amount of objects, and when you very
/**	frequently access deep private variable chains.  This will
/**	be useful when you are creating singletons, and when your
/**	objects need a dynamically defined variable every so often.
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Private Symbols
	const priv = Symbol('priv');
	
//	Class Definition
	export default class Dwarf {
		
		constructor( name ) {
			this[priv] = {};
			this[priv].name = name;
			this[priv].think = ()=>{
				console.log(this[priv].name, "But I like to play in the dirt!");
			};
		}
		
		speak() {
			console.log(this[priv].name, "I'm a metal miner.");
			this[priv].think();
		}
	}
	