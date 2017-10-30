/* 
 * 数据模型 - 新闻详情
 */

Ext.define("App.model.Depart", {
	extend: "App.model.Base",
	identifier : 'uuid',
	fields : [
		{name : 'title' , type : 'string'},
		{name : 'keywords' , type : 'string'},
		{name : 'description' , type : 'string'},
		{name : 'content' , type : 'string'},
		{name : 'catname' , type : 'string'},
		{name : 'url' , type : 'string'},
		{name : 'updatetime' , type : 'string'},
		{name : 'video_src' , type : 'string'},
	],
	proxy : {
		type : 'ajax',
		api : {
			read : "http://c.48947.com/api/api.php?version=v2&c=video&a=show&catid=147&id=29",
		},
		reader : {
			rootProperty : 'data',	// 返回数据根
			successProperty : 'code',	//	返回数据执行结果
			messageProperty : 'msg',	//	返回数据结果说明
			// totalProperty : '',	//	返回数据条数
		},
	},
})