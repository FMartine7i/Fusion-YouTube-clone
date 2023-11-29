<?php
include('conex.php');
session_start();

if (isset($_POST['register'])) {
    if (strlen($_POST['username']) >= 1 && strlen($_POST['email']) >= 1 && strlen($_POST['password']) > 0) {
        $username = trim($_POST['username']);
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);
        $birthdate = trim($_POST['birthdate']);
        $registrationdate = date('d-m-y');
        
        $query = "INSERT INTO logs (username, email, password, birthdate, registrationdate) 
                  VALUES ('$username', '$email', '$password', '$birthdate', '$registrationdate')";
                  
        $result = mysqli_query($conex, $query);

        if ($result) {
            $_SESSION['last_username'] = $username; // Guardamos el username en la variable de sesión

            echo "<script>alert('Ha ingresado correctamente')</script>";
            echo "<script>window.location.href = '../../main/html/index.html';</script>";
            exit();
        } else {
            echo "<script>alert('No se ha podido conectar.');</script>";
        }
    } 
    else {
        echo "<script>alert('Complete los campos')</script>";
    }
}
else if (isset($_POST['login'])) {
    if (strlen($_POST['usernameLogin']) >= 1 && strlen($_POST['passwordLogin']) >= 1) {
        $username = trim($_POST['usernameLogin']);
        $password = trim($_POST['passwordLogin']);

        // Verifica si el usuario y la contraseña coinciden en la base de datos
        $query = "SELECT * FROM logs WHERE username = '$username' AND password = '$password'";
        $result = mysqli_query($conex, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            // Usuario encontrado, inicia la sesión y redirige
            $_SESSION['last_username'] = $username;
            echo "<script>alert('Ha ingresado correctamente')</script>";
            echo "<script>window.location.href = '../../main/html/index.html';</script>";
            exit();
        } else {
            // Usuario no encontrado, muestra un mensaje de error
            echo "<script>alert('Usuario o contraseña incorrectos.');</script>";
        }
    } 
    else {
        echo "<script>alert('Complete los campos.');</script>";
    }
}
?>
