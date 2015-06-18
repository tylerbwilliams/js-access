/**	
/**	elf.js
/**	
/**	This is an ES6 class with a private utility function.
/**	
/**	This style of privatizing variables gives a few benefits:
/**	
/**		1.	Dynamic variables can be added at any time.  No
/**			instantiation required.
/**		2.	Prototype methods can be marked private.
/**	
/**	But, there are also a few downsides to using this utility
/**	to keep your private variables in:
/**	
/**		1.	It is messy syntax as a function call.  This can be
/**			solved (see below) but support for Proxy is meager.
/**		2.	It includes yet another utility.
/**	
/**	These issues are a problem for increasing complexity in a
/**	system.  This would be a problem if you have large team/s,
/**	lower skilled developers, and/or your linting is loose. The
/**	additional code will also slow development time, but only
/**	until Proxy support is widespread (see below).
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Import Utility
	import Priv from './priv';
	
//	Private Symbols
	const priv = Priv();
	
//	Class Definition
	export default class Elf {
		
		constructor( _name ) {
			let { name } = priv(['name']);
			this[name] = _name;
		}
		
		speak() {
			let { name, think } = priv(['name', 'think']);
			console.log(this[name], "I'm an accurate archer.");
			this[think]();
		}
		
		[priv('think')]() {
			let { name } = priv(['name']);
			console.log(this[name], "But I like to watch the moon!");
		}
	}
	
//	WAIT! There's another way of writing the utility to use
//	Proxies, which makes the syntax much cleaner.
	
/**	
/**	elf.js - WAITING ON PROXY SUPPORT
/**	
/**	In this, rather than calling priv as a function, you can
/**	directly access variables on it, invoking the `Proxy.get`
/**	function to do all the work.
/**
/*/	
//	
//	Strict Safety
//	'use strict';
//	
//	Import Utility
//	import Priv from './priv';
//	
//	Private Symbols
//	const priv = Priv();
//	
//	Class Definition
//	export default class Elf {
//		
//		constructor( name ) {
//			this[priv.name] = name;
//		}
//		
//		speak() {
//			console.log(this[priv.name], "I'm an archer.");
//			this[priv.think]();
//		}
//		
//		[priv.think]() {
//			console.log(this[priv.name], "But I like to watch the moon!");
//		}
//	}
//	

//	Much, much cleaner class code.
