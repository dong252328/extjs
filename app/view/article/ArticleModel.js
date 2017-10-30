Ext.define('App.view.article.ArticleModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.article-article',
    requires: ["App.model.Article"],
    data: {
        name: 'App'
    },
    stores: {
    	article: {
			model : 'Article',
			autoLoad: true,
		},
	}

});
