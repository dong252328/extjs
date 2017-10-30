
Ext.define("App.view.tent.Tent",{
    extend: "Ext.grid.Panel",
    xtype: "tent",
    requires: [
        "App.view.tent.TentController",
        "App.view.tent.TentModel",
        /*"App.model.Depart"*/
    ],
    title : '文章详情',
    border : true,
    id: "tentPanel",
    controller: "tent-tent",
    viewModel: {
        type: "tent-tent"
    },
    bind: {
        store: "{departStores}"
    },
    initComponent: function() {
        // var stor = new App.model.Depart();
        // console.log(stor);
        Ext.apply(this, {
            /*items : [{
                xtype: "combobox",
                name: "userState",
                fieldLabel: "状态",
                bind: {
                    store: "{departStores}"
                },
                displayField: "title",
                valueField: "url",
                value: "{title}",
                editable : false
            }]*/
            columns : [
                {text: "title",dataIndex: "title",},
                {text: "keywords",dataIndex: "keywords",},
                {text: "description",dataIndex: "description",},
                {text: "content",dataIndex: "content",},
                {text: "catname",dataIndex: "catname",},
                {text: "url",dataIndex: "url",},
                {text: "updatetime",dataIndex: "updatetime",},
                {text: "video_src",dataIndex: "video_src",},
            ]
        }); 
        this.callParent(arguments);
    }
});
/*store.each(function(record) {   
    alert(record.get('name'));   
}); */ 