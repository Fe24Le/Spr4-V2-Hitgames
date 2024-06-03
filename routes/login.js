var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});


/*----------------seccion login admin -----------------------------*/
// Ruta para manejar el envío del formulario de inicio de sesión
router.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    
    // Verificar las credenciales del administrador (aquí deberías usar una base de datos o algún otro método seguro)
    if (usuario === 'admin' && password === 'admin123') {
        // Si las credenciales son válidas, redirigir al panel de administrador
        res.redirect('adminpage');
    } else {
        // Si las credenciales son inválidas, volver al formulario de inicio de sesión con un mensaje de error
        res.render('login', { error: 'Credenciales incorrectas. Inténtalo de nuevo.' });
    }
});



module.exports = router;