
Ext.define("App.view.article.Article",{
    extend: "Ext.grid.Panel",
    xtype : 'article',
    id : 'articleGrid',
    requires: [
        "App.view.article.ArticleController",
        "App.view.article.ArticleModel"
    ],
    
    controller: "article-article",
    viewModel: {
        type: "article-article"
    },
    bind: {
        store: "{article}"
    },
    initComponent: function() {
        Ext.apply(this, {
            title : '文章列表',
            selType: "checkboxmodel",
            columns : [
                {text: "用户id",dataIndex: "id",flex: 1,},
                {text: "标题",dataIndex: "title",flex: 1,},
                {text: "描述",dataIndex: "description",flex: 1,},
                {text: "缩略图",dataIndex: "thumb",flex: 1,},
                {text: "url",dataIndex: "url",flex: 1,},
                {text: "更新时间",dataIndex: "updatetime",flex: 1,},
                {text: '操作',xtype :'actioncolumn',align :'center',items:[
                    {iconCls: "opt-edit",tooltip: "编辑",handler: "article_edit"},
                    {iconCls: "opt-delete",tooltip: "删除",handler: "article_del"},

                ],flex:1}
            ],
            tbar : [
                {xtype: "button",text: "新增",glyph: 0xf067,handler: "article_add"},
                {xtype: "button",text: "批量删除",glyph: 0xf00d,handler: "article_batchDel"},
            ]


        }); 
        this.callParent(arguments);
    }
});
