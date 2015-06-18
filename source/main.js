/**	
/**	main.js
/**	
/*/	
	
//	Strict Safety
	'use strict';
	
//	Modules
	import Human from './human';
	import Hobbit from './hobbit';
	import Dwarf from './dwarf';
	import Elf from './elf';
	import Wizard from './wizard';
	
//	Instances
	let human = new Human('Aragorn');
	let hobbit = new Hobbit('Frodo');
	let dwarf = new Dwarf('Gimli');
	let elf = new Elf('Legolas');
	let wizard = new Wizard('Gandalf');
	
//	Breaking Our Human
	human._name = 'Agrobob';
	human.speak = ()=>{
		console.log("Astroturf", "I'm a freaking king!");
		human._think();
	};
	
//	Testing Our Wizard - This line will throw
	try {
		wizard.speak = ()=>{ console.log("I'm Dumbledore, too!") }
	} catch(e) {
		console.error(e);
	}
	
//	Tests
	console.log('');
	console.log('The Fellowship Says:');
	
	human.speak();
	hobbit.speak();
	dwarf.speak();
	elf.speak();
	wizard.speak();
	
	console.log('...We\'re All Doomed.');
	