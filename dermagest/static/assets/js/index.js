var pagina_actual = 'home';
var cambio_pagina = false;
function redirigir_pagina(nueva_pagina) {
    if( cambio_pagina == true){
        return false;
    }
    cambio_pagina = true;
    location.href ='../'+nueva_pagina;
    cambio_pagina = false;
}


function ver_detalle_cita() {
    const card_calendario = document.getElementById('card-calendario');
    const card_cita_dia = document.getElementById('card-cita-dia');
    const card_detalle_cita = document.getElementById('card-detalle-cita');

    card_calendario.setAttribute('hidden',  );
    card_cita_dia.setAttribute('hidden', "true");
    card_detalle_cita.setAttribute('hidden', "false");
}