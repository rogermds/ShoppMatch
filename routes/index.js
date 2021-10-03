var express = require("express");
var router = express.Router();
var principalController = require("../controllers/principalController.js");

router.get("/", principalController.index);
router.get("/login", principalController.telaLogin);
router.post("/login", principalController.login);
router.get("/cadastrar", principalController.telaCadastro);
router.post("/cadastrar", principalController.cadastrar);
router.get("/contato", principalController.telaContato);
router.get("/solicitacaosenha", function (req, res) {
	res.render("solicitacaosenha");
});

module.exports = router;