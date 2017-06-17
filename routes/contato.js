module.exports = function(app) {
	var contatos = app.controllers.contato;
	app.get('/contatos', contatos.index);
	app.get('/contato/:id', contatos.show);
	app.post('/contato', contatos.create);
	app.get('/contato/:id/editar', contatos.edit);
	app.post('/contato/alterar/:id', contatos.update);
	app.post('/contato/excluir/:id', contatos.destroy);
};