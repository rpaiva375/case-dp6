// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

jQuery('.cards-montadoras').on('click tap', '.card-montadoras', function () {
    let data_name = $(this).attr('data-name');
    let data_id = $(this).attr('data-id');
    gtag('event', 'ver_mais', {
        'event_category' : 'analise',
        'event_label' : data_name
    });
  });


jQuery('#nome').on('change', function () {
    gtag('event', 'nome', {
        'event_category': 'contato',
        'event_label' : 'preencheu'
    });
});

jQuery('#email').on('change', function () {
    gtag('event', 'email', {
        'event_category': 'contato',
        'event_label' : 'preencheu'
    });
});

jQuery('#telefone').on('change', function () {
    gtag('event', 'telefone', {
        'event_category': 'contato',
        'event_label' : 'preencheu'
    });
});

jQuery('#aceito').on('change', function () {
    gtag('event', 'aceito', {
        'event_category': 'contato',
        'event_label' : 'preencheu'
    });
});
