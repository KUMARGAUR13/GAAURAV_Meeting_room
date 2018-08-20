sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/controller/HelloDialog"
	//"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.myapp.Component", {
		metadata :{
			//now we replace this code by
			/*rootView: { 
				"viewName": "sap.myapp.view.App", 
				"type": "XML", 
				"async": true, 
				"id": "app"
				}*/
			manifest: "json"
				
		},
	init : function () {
		// call the init function of the parent
		UIComponent.prototype.init.apply(this, arguments);
		// set data model 
		var oData = { 
			recipient : {
				name : "World" } 
			
		}; 
		var oModel = new JSONModel(oData);
		this.setModel(oModel); 
		// set i18n model - this will be automatically picked by manifest resource descriptor 
		/*var i18nModel = new ResourceModel({
			bundleName : "sap.myapp.i18n.i18n" 
			
		}); 
		this.setModel(i18nModel, "i18n");*/
		// set dialog 
		this._helloDialog = new HelloDialog(this.getRootControl());
		
	},
	exit : function() { 
		this._helloDialog.destroy(); 
		delete this._helloDialog; 
		
	}, 
	openHelloDialog : function () {
		this._helloDialog.open();
	}
	});
});