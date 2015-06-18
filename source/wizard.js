/**	
/**	wizard.js
/**	
/**	This is an ES6 class with a private utility function and
/**	read-only access to methods.
/**	
/**	This class builds on the Elf class, but adding an extra:
/**	
/**		1.	Attached public methods are marked for read-only.
/**	
/**	Theres a simple downside to this:
/**	
/**		1.	It includes an additional function.
/**	
/**	The top level speak() function is called anytime someone
/**	accesses `wizard.speak`.  The returned function is called
/**	when used `wizard.speak()`.  It's a simple way of keeping
/**	your objects pure.
/**	
/**	Private methods don't need this special treatment, since
/**	they can't be overridden anyways.
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Import Utility
	import Priv from './priv';
	
//	Private Symbols
	const priv = Priv();
	
//	Class Definition
	export default class Wizard {
		
		constructor( _name ) {
			let { name } = priv(['name']);
			this[name] = _name;
		}
		
		get speak() {
			return ()=>{
				let { name, think } = priv(['name', 'think']);
				console.log(this[name], "I'm an wize wizard.");
				this[think]();
			}
		}
		
		[priv('think')]() {
			let { name } = priv(['name']);
			console.log(this[name], "But I like to smoke like a chimney!");
		}
	}
	