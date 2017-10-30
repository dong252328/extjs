/* 
 * 数据模型 - 文章列表
 */

/*Ext.define("App.model.Article", {
	extend: "App.model.Base",
	fields: [
     	{name: "title"},
	    {name: "id"},
	    {name: "thumb"},
	    {name: "description"},
	    {name: "url"},
	    {name: "updatetime"},
	]
});*/
Ext.define("App.model.Article", {
	extend: "App.model.Base",
	// identifier : 'uuid',
	fields : [
		{name: "title"},
	    {name: "id"},
	    {name: "thumb"},
	    {name: "description"},
	    {name: "url"},
	    {name: "updatetime"},
	],
	proxy : {
		type : 'ajax',
		api : {
			read : "http://c.48947.com/api/api.php?version=v2&c=article&a=lists&catid=153",
		},
		reader : {
			rootProperty : 'data',	// 返回数据根
			successProperty : 'code',	//	返回数据执行结果
			messageProperty : 'msg',	//	返回数据结果说明
			// totalProperty : '',	//	返回数据条数
		},
	},
})