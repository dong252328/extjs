/* 
 * 数据模型 - 用户
 */

Ext.define("App.model.User", {
	extend: "App.model.Base",
	fields: [
	    {name: "id"},
	    {name: "userName"},
	    {name: "roleName"},
	    {name: "userState"},
	    {name: "remark"}
	]
});