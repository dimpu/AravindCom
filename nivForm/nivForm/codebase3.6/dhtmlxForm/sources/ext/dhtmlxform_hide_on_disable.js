//v.3.6 build 130417

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
// include on latest position
(function(){
	for (var a in dhtmlXForm.prototype.items) {
		if (dhtmlXForm.prototype.items[a].enable) {
			dhtmlXForm.prototype.items[a].en2 = dhtmlXForm.prototype.items[a].enable;
			dhtmlXForm.prototype.items[a].enable = function(item){
				this.en2.apply(this,arguments);
				this.show(item);
			}
		}
		if (dhtmlXForm.prototype.items[a].disable) {
			dhtmlXForm.prototype.items[a].dis2 = dhtmlXForm.prototype.items[a].disable;
			dhtmlXForm.prototype.items[a].disable = function(item){
				this.dis2.apply(this,arguments);
				this.hide(item);
			}
		}
	}
})();