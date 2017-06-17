module.exports = function(app) {
	var contatos = app.controllers.contato;
	app.get('/contatos', contatos.index);
};