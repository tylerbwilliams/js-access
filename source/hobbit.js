/**	
/**	hobbit.js
/**	
/**	This is an ES6 class with basic private properties.
/**	
/**	But first, these are not truly private.  Symbols would
/**	be very similar to implementing a random uuid function
/**	and assigning variables to whatever that result is, with
/**	the difference that Symbols don't show in the normal
/**	property keys.  There are still ways to access these.
/**	
/**	However, we can ignore that since access modifiers are
/**	never meant to provide actual security, but instead to
/**	show semantic meaning regarding the variables themselves.
/**	
/**	This style of privatizing variables gives a few benefits:
/**	
/**		1.	Writing like this is very easy to understand.
/**		2.	The amount of code written starts off minimally.
/**	
/**	But, there are also a few downsides to using a simple
/**	Symbol to store your private accessors.
/**	
/**		1.	As the number of variables increase, the number
/**			of Symbols increases linearly.
/**		2.	You can't dynamically create private variables.
/**	
/**	These issues are only going to arise for larger codebases
/**	and for (what should be rare) places where additional,
/**	unknown variables need to be attached at runtime.  So,
/**	if you aren't planning on writing a complex web app and
/**	know your specs don't include dynamic variables, this 
/**	should be enough for you.
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Private Symbols
	const _name = Symbol('name');
	const _think = Symbol('think');
	
//	Class Definition
	export default class Hobbit {
		
		constructor( name ) {
			this[_name] = name;
		}
		
		speak() {
			console.log(this[_name], "I'm a thrifty thief.");
			this[_think]();
		}
		
		[_think]() {
			console.log(this[_name], "But I like shrooms and shiny things!");
		}
	}
	