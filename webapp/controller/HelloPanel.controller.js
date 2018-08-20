sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function (Controller, MessageToast) {
		"use strict";
		return Controller.extend("sap.myapp.controller.HelloPanel", { 
			/*This part moved to Componnet.js
			We create an initial Component.js file in the webapp folder that will hold our application setup. 
			The init function of the component is automatically invoked by SAPUI5 when the component is instantiated. 
			Our component inherits from the base class sap.ui.core.UIComponent,
			and it is obligatory to make the super call to the init function of the base class in the overridden init method.
			//
			onInit : function () {
				// set data model on view 
				var oData = { 
					recipient : {
						name : "World"
					}
				}; 
				var oModel = new JSONModel(oData); 
				this.getView().setModel(oModel);
				// set i18n model on view 
				var i18nModel = new ResourceModel({
					bundleName: "sap.myapp.i18n.i18n" 
					
				});
					this.getView().setModel(i18nModel, "i18n");
				},*/
			onShowHello : function () { 
				// read msg from i18n model 
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				// show message MessageToast.show(sMsg);
				MessageToast.show(sMsg);
			},
			onOpenDialog : function () {
				this.getOwnerComponent().openHelloDialog();
				/* This is now moved to helloDialog
				var oView = this.getView();
				var oDialog = oView.byId("helloDialog"); // create dialog lazily 
				if (!oDialog) { 
					// create dialog via fragment factory
					oDialog = sap.ui.xmlfragment(oView.getId(), "sap.myapp.view.HelloDialog", this); 
					oView.addDependent(oDialog); 
					
				} 
				oDialog.open(); 
				
			},
			onCloseDialog : function () { 
				this.getView().byId("helloDialog").close(); */
				
			}
		});
	});