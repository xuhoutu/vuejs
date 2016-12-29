var $ = require('./jquery');

module.exports = {
	getlist : function(){
		$.ajax({
			url:'./api/list',
			success:function(res){
				console.log(res);
			}
		})
	}
}

//module.exports = 'fcjdskja';