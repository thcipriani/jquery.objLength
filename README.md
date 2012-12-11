jquery.objLength
================

I found it weird that jQuery:
 1. $.length property doesn't work with javascript objects 
 2. There wasn't another plugin to do this&#8212;so I wrote one!

Usage
----------
```javascript
var someObject = {'item1':'uno', 'item2':'dos'};
$(someObject).objLength(); //returns 2
```
