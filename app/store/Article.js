/* 
 * 数据存储 - 文章列表
 */

Ext.define("App.store.Article", {
	extend: "Ext.data.Store",
	alias: "store.article",
	
	model: "App.model.article",
	proxy: {
		type: "ajax",
		url: "http://c.48947.com/api/api.php?version=v2&c=article&a=lists&catid=153", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});