Ext.define('App.view.article.ArticleController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.article-article',
    uses : ['App.view.article.ArticleWin'],
    init : function () {
    	this.store = Ext.getCmp('articleGrid').getStore();
    },
    article_add : function () {
    	var win = Ext.create('App.view.article.ArticleWin');
		win.show();
    },
    article_edit : function(grid, rowIndex, colIndex) {
    	var rec = grid.getStore().getAt(rowIndex);		
		var win = Ext.create('App.view.article.ArticleWin', {
			title: "编辑文章" + rec.get("id")
		});
		win.down("form").loadRecord(rec);
		win.show();
    },
    article_del : function (grid, rowIndex, colIndex) {
		var msg = "确认删除文章：" + grid.getStore().getAt(rowIndex).get("title") + " ？";
		Ext.Msg.confirm("确认", msg, function(res) {
			if(res == "yes") {
				grid.getStore().removeAt(rowIndex);
			}
		});
    },
    article_batchDel : function(){
    	var grid = Ext.getCmp("articleGrid");
		if(grid.getSelectionModel().hasSelection()) {
			var store = grid.getStore();
			var recs = grid.getSelectionModel().getSelection();
			var names = "";
			for(var i=0;i<recs.length;i++) {
				names += recs[i].data.userName+"<br />";
			}
			Ext.Msg.confirm("确认", "确认删除以下用户？<br />"+names, function(res) {
				if(res=="yes") {
					store.remove(recs);
				}
			});
		}else {
			Ext.Msg.alert("信息", "请选择要删除的用户！");
		} 
    },
    oncancelclick : function (btn) {
    	btn.up("articlewin").close();
    },
    onsaveclick : function (btn) {
    	// lookupReference 查找组件
    	var fr = this.lookupReference("articleForm").getForm();
    	if(!fr.isValid()){
    		Ext.Msg.alert("提示", "您所填写的数据不符合规则，请重新填写");
    		return;
    	}
		if(fr.isValid()) {
			var id = fr.findField("id").getValue();
			if(id) { //编辑
				var rec = this.store.getById(id);
				rec.set("title", fr.findField("title").getValue());
				rec.set("description", fr.findField("description").getValue());
				rec.set("thumb", fr.findField("thumb").getValue());
				rec.set("url", fr.findField("url").getValue());
				rec.set("updatetime", fr.findField("updatetime").getValue());
				//this.store.rejectChanges();	//取消所有修改
				this.store.commitChanges();	//提交修改数据
			}else { //新增
				var obj = fr.getFieldValues();
				obj.id = this.store.last() ? parseInt(this.store.last().get("id"))+1 : 1;
				this.store.add(obj);
			}
			btn.up("articlewin").close();
		}
    },
});
