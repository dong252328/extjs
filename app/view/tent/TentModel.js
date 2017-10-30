Ext.define('App.view.tent.TentModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tent-tent',
    requires : ['App.model.Depart'],
    data: {
        name: 'App'
    },
    stores: {
		departStores : {
			model : 'Depart',
			autoLoad: true
		}
	}

});
