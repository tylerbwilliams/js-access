/**	
/**	human.js
/**	
/**	This is a simple ES6 class.
/**	
/**	There are a few issues with this style of object, if it 
/**	is going to be exposed from your library.
/**	
/**		1.	Client code can access ANY property or method.
/**		2.	Client code can reassign ANY property or method.
/**		3.	The only indication that a property or method
/**			shouldn't be access is through an unofficial name
/**			scheme.
/**	
/**	Each of these can be an issue when your code is going to
/**	propagate any further than your own team.  Knowledge of
/**	what values will break when reassigned, conflicting names,
/**	and different naming schemes between organizations will
/**	make integrating more difficult.
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Class Definition
	export default class Human {
		
		constructor( name ) {
			this._name = name;
		}
		
		speak() {
			console.log(this._name, "I'm a humble human.");
			this._think();
		}
		
		_think() {
			console.log(this._name, "But I like to camp outside!");
		}
	}
	