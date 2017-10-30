/* 
 * 数据模型 - 角色
 */

Ext.define("App.model.Role", {
	extend: "App.model.Base",
	fields: [
	    {name: "id"},
	    {name: "roleName"},
	    {name: "roleDesc"}
	]
});