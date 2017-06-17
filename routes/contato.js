module.exports = function(app) {
	var autenticar = require('./../middleware/autenticador');
	var contatos = app.controllers.contato;
	app.get('/contatos', autenticar, contatos.index);
	app.get('/contato/:id', autenticar, contatos.show);
	app.post('/contato', autenticar, contatos.create);
	app.get('/contato/:id/editar', autenticar, contatos.edit);
	app.post('/contato/alterar/:id', autenticar, contatos.update);
	app.post('/contato/excluir/:id', autenticar, contatos.destroy);
};