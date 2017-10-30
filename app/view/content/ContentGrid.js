
Ext.define("App.view.content.ContentGrid",{
    extend: "Ext.grid.Panel",
 
    requires: [
        "App.view.content.ContentGridController",
        "App.view.content.ContentGridModel"
    ],
    
    controller: "content-contentgrid",
    viewModel: {
        type: "content-contentgrid"
    },

    html: "Hello, World!!"
});
