/*
 * 窗口视图 - 用户管理
 */

Ext.define("App.view.article.ArticleWin", {
	extend: "Ext.window.Window",
	xtype: "articlewin",
	
	requires: ["App.view.article.ArticleModel", "App.view.article.ArticleController"],
	viewModel: {
		type: "article-article"
	},
	controller: "article-article",
	
	title: "新增文章",
	width: 600,
	height: 350,
	resizable: false,
	constrain: true,
	modal: true,
	/*
	tools: [{
		type: "refresh",
		tooltip: "刷新数据"
	}],
	*/
	
	initComponent: function() {
		Ext.apply(this, {
			items: [{
				xtype: "form",
				reference: "articleForm",
				margin: 10,
				defaults: {
					anchor: "100%"
				},
				fieldDefaults: {
					flex: 1,
					margin: 10,
					labelWidth: 60,
					allowBlank: false
				},
				items: [
					{xtype: "hiddenfield",name: "id",value: ""}, 
					{xtype: "textfield",name: "title",fieldLabel: "标题"}, 
					{xtype: "textfield",name: "description",fieldLabel: "描述"}, 
					// 邮箱验证 vtype验证
					{xtype: "textfield",name: "thumb",fieldLabel: "缩略图地址",vtype:'url',vtypeText:'请输入正确的url地址'}, 
					{xtype: "textfield",name: "url",fieldLabel: "链接地址",vtype:'url',vtypeText:'请输入正确的url地址'}, 
					{xtype: "textfield",name: "updatetime",fieldLabel: "更新时间"}, 
				]
			}],
			buttonAlign: "center",
			buttons: [{
				text: "保存",
				handler: "onsaveclick"
			}, {
				text: "取消",
				handler: "oncancelclick"
			}]
		});
		this.callParent(arguments);
	}
});
