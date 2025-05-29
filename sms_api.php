<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $numero = $_POST['numero'];
    $message = $_POST['message'];

    echo json_encode([
        'status' => 'success',
        'message' => "📩 SMS envoyé à $numero : $message"
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Méthode non autorisée.'
    ]);
}
?>
