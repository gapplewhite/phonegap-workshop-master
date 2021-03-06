var HomeView = function(store) {
	
	this.findByName = function() {
	    store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(HomeView.liTemplate(employees));
	    });
	};

	this.DisplayAll = function() {
	    store.findByName($('*').val(), function(employees) {
	        $('.employee-list').html(HomeView.liTemplate(employees));
	    });
	};

    this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.DisplayAll(); // Cargar toda la base de datos
        this.el.on('keyup', '.search-key', this.findByName);
    };
    this.initialize();

    this.render = function() {
    	this.el.html(HomeView.template());
    	return this;
	};


	 
    

 
}
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
