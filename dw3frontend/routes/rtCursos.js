var express = require("express");
var router = express.Router();
var CursosApp = require("../apps/cursos/controller/ctlCursos");

//Função necessária para evitar que usuários não autenticados acessem o sistema.
function authenticationMiddleware(req, res, next) {
  // Verificar se existe uma sessão válida.
  isLogged = req.session.isLogged;

  if (!isLogged) {
    res.redirect("/Login");
  }
  next();
}

/* GET métodos */
router.get("/ManutCursos", authenticationMiddleware, CursosApp.manutCursos);
router.get("/InsertCursos", authenticationMiddleware, CursosApp.insertCursos);
router.get("/ViewCursos/:id", authenticationMiddleware, CursosApp.ViewCursos);
router.get(
  "/UpdateCursos/:id",
  authenticationMiddleware,
  CursosApp.UpdateCursos
);

/* POST métodos */
router.post("/InsertCursos", authenticationMiddleware, CursosApp.insertCursos);
router.post("/UpdateCursos", authenticationMiddleware, CursosApp.UpdateCursos);
router.post("/DeleteCursos", authenticationMiddleware, CursosApp.DeleteCursos);
router.post("/ViewCursos", authenticationMiddleware, CursosApp.ViewCursos);

module.exports = router;
