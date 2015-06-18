# js-access
Access Control For ES6 Classes

# Running
```
npm install
npm start
```

# Content

source/human.js

This is a simple ES6 class.

There are a few issues with this style of object, if it 
is going to be exposed from your library.

	1.	Client code can access ANY property or method.
	2.	Client code can reassign ANY property or method.
	3.	The only indication that a property or method
		shouldn't be access is through an unofficial name
		scheme.

Each of these can be an issue when your code is going to
propagate any further than your own team.  Knowledge of
what values will break when reassigned, conflicting names,
and different naming schemes between organizations will
make integrating more difficult.

source/hobbit.js

This is an ES6 class with basic private properties.

But first, these are not truly private.  Symbols would
be very similar to implementing a random uuid function
and assigning variables to whatever that result is, with
the difference that Symbols don't show in the normal
property keys.  There are still ways to access these.

However, we can ignore that since access modifiers are
never meant to provide actual security, but instead to
show semantic meaning regarding the variables themselves.

This style of privatizing variables gives a few benefits:

	1.	Writing like this is very easy to understand.
	2.	The amount of code written starts off minimally.

But, there are also a few downsides to using a simple
Symbol to store your private accessors.

	1.	As the number of variables increase, the number
		of Symbols increases linearly.
	2.	You can't dynamically create private variables.

These issues are only going to arise for larger codebases
and for (what should be rare) places where additional,
unknown variables need to be attached at runtime.  So,
if you aren't planning on writing a complex web app and
know your specs don't include dynamic variables, this 
should be enough for you.

source/dwarf.js

This is an ES6 class with a private property map.

This style of privatizing variables gives a few benefits:

	1.	Dynamic variables can be added/removed to the map.
	2.	There is no maintenance after initially adding it.

But, there are also a few downsides to using a map to keep
your private variables in:

	1.	You have to attach private methods to it, so you
		lose the memory benefit of prototypes.
	2.	While it is more obvious when you access a private
		variable `[priv].something`, it does add an
		additional level to your chain.

These issues are going to be a problem when you have to
create a *very* large amount of objects, and when you very
frequently access deep private variable chains.  This will
be useful when you are creating singletons, and when your
objects need a dynamically defined variable every so often.

source/elf.js

This is an ES6 class with a private utility function.

This style of privatizing variables gives a few benefits:

	1.	Dynamic variables can be added at any time.  No
		instantiation required.
	2.	Prototype methods can be marked private.

But, there are also a few downsides to using this utility
to keep your private variables in:

	1.	It is messy syntax as a function call.  This can be
		solved (see below) but support for Proxy is meager.
	2.	It includes yet another utility.

These issues are a problem for increasing complexity in a
system.  This would be a problem if you have large team/s,
lower skilled developers, and/or your linting is loose. The
additional code will also slow development time, but only
until Proxy support is widespread (see below).

source/wizard.js

This is an ES6 class with a private utility function and
read-only access to methods.

This class builds on the Elf class, but adding an extra:

	1.	Attached public methods are marked for read-only.

Theres a simple downside to this:

	1.	It includes an additional function.

The top level speak() function is called anytime someone
accesses `wizard.speak`.  The returned function is called
when used `wizard.speak()`.  It's a simple way of keeping
your objects pure.

Private methods don't need this special treatment, since
they can't be overridden anyways.
