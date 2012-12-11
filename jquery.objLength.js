(function($) { $.fn.objLength = function() { var s=0; for(k in this[0]){ if (this[0].hasOwnProperty(k)) s++; } return s; }; })(jQuery);
