<?php
include('../../login/php/conex.php');
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $commentText = isset($_POST['commentText']) ? $_POST['commentText'] : '';
    $lastUserName = isset($_POST['lastUserName']) ? $_POST['lastUserName'] : '';

    $query = "INSERT INTO comments (comment) VALUES ('$commentText')";
    $result = mysqli_query($conex, $query);

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Comentario guardado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al guardar el comentario']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Solicitud no valida']);
}
?>