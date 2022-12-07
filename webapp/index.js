sap.ui.define( [
// "sap/m/Text"  // sap textini alır //sam/m/Label
// "sap/m/Input"
"sap/ui/core/mvc/XMLView"
],
// function(Text){
//   function(Text,input){
    function (XMLView) { 
"use strict";
// new Text({
//     text: "Tırsan124"
// }).placeAt("content")
        XMLView.create({
            viewName: "sap.ui.demo.walkthrough.view.App"
        }).then(function (oView) {
            oView.placeAt("content");
        })
}
);