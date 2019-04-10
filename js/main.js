//Variables
$contenido = $('#contenido');
$inputNumero = $contenido.find('#inputNumero');
$buttonCalcular = $contenido.find('#calcular');
$eurPes = $contenido.find('#eurPes');
$pesEur = $contenido.find('#pesEur');
$divResultado = $contenido.find('#divResultado');
$bEuros = true;
$resultado = 0;
$fConvEurPes = 166.386;
$fConvPesEur = 0.0060;

//De euros a pesetas
$eurPes.click(function() {
    $eurPes.addClass('pulsado');
    $pesEur.removeClass('pulsado');
    $bEuros = true;
});

//De pesetas a euros
$pesEur.click(function() {
    $pesEur.addClass('pulsado');
    $eurPes.removeClass('pulsado');
    $bEuros = false;
})

//Calculos
$buttonCalcular.click(function() {
    switch ($bEuros) {
        case true:
            $resultado = $inputNumero.val() * $fConvEurPes;
            break;
        case false:
            $resultado = $inputNumero.val() * $fConvPesEur;
            break;
    }
    $divResultado.html('');
    $divResultado.append('<h1>' + $resultado + '</h1>');
});
