const api = [
    {   
        especie: 'escolas',
        name: 'Escola da Rua A', 
        path: '/category/escolas/escoladaruaa',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'escolas',
        name: 'Escola da Rua B', 
        path: '/category/escolas/escoladaruab',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'escolas',
        name: 'Escola da Rua C', 
        path: '/category/escolas/escoladaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },

    { 
        especie: 'upas',
        name: 'Upa da Rua A', 
        path: '/category/upas/upadaruaa',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'upas',
        name: 'Upa da Rua B', 
        path: '/category/upas/upadaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'upas',
        name: 'Upa da Rua C', 
        path: '/category/upas/upadaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'creches',
        name: 'Creche da Rua A', 
        path: '/category/creches/crechedaruaa',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'creches',
        name: 'Creche da Rua B', 
        path: '/category/creches/crechedaruab', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'creches',
        name: 'Creche da Rua C', 
        path: '/category/creches/crechedaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'postosdesaude',
        name: 'Posto de Saúde da Rua A', 
        path: '/category/postosdesaude/postodesaudedaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'postosdesaude',
        name: 'Posto de Saúde da Rua B', 
        path: '/category/postosdesaude/postodesaudedaruab',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'postosdesaude',
        name: 'Posto de Saúde da Rua C', 
        path: '/category/postosdesaude/postodesaudedaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'clinicasmedicas',
        name: 'Clínica Médica da Rua A', 
        path: '/category/clinicasmedicas/clinicamedicadaruaa',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'clinicasmedicas',
        name: 'Clínica Médica da Rua B', 
        path: '/category/clinicasmedicas/clinicamedicadaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'clinicasmedicas',
        name: 'Clínica Médica da Rua C', 
        path: '/category/clinicasmedicas/clinicamedicadaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'dentistas',
        name: 'Dentista da Rua A', 
        path: '/category/dentistas/dentistadaruaa',  
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'dentistas',
        name: 'Dentista da Rua B', 
        path: '/category/dentistas/dentistadaruab', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'dentistas',
        name: 'Dentista da Rua C', 
        path: '/category/dentistas/dentistadaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'roupas',
        name: 'Loja de Roupas da Rua A',         
        path: '/category/roupas/lojaderoupasdaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'roupas',
        name: 'Loja de Roupas da Rua B', 
        path: '/category/roupas/lojaderoupasdaruab', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'roupas',
        name: 'Loja de Roupas da Rua C', 
        path: '/category/roupas/lojaderoupasdaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'sapatos',
        name: 'Loja de Sapatos da Rua A',
        path: '/category/sapatos/lojadesapatosdaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'sapatos',
        name: 'Loja de Sapatos da Rua B', 
        path: '/category/sapatos/lojadesapatosdaruab', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'sapatos',
        name: 'Loja de Sapatos da Rua C', 
        path: '/category/sapatos/lojadesapatosdaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'perfumes',
        name: 'Loja de Perfumes da Rua A',         
        path: '/category/perfumes/lojadeperfumesdaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'perfumes',
        name: 'Loja de Perfumes da Rua B', 
        path: '/category/perfumes/lojadeperfumesdaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'perfumes',
        name: 'Loja de Perfumes da Rua C', 
        path: '/category/perfumes/lojadeperfumesdaruac',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'moveis',
        name: 'Loja de Móveis da Rua A',         
        path: '/category/moveis/lojademoveisdaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'moveis',
        name: 'Loja de Móveis da Rua B', 
        path: '/category/moveis/lojademoveisdaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'moveis',
        name: 'Loja de Móveis da Rua C', 
        path: '/category/moveis/lojademoveisdaruac',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },  
    
    { 
        especie: 'veiculos',
        name: 'Loja de Veículos da Rua A',         
        path: '/category/veiculos/lojadeveiculosdaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'veiculos',
        name: 'Loja de Veículos da Rua B', 
        path: '/category/veiculos/lojadeveiculosdaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'veiculos',
        name: 'Loja de Veículos da Rua C', 
        path: '/category/veiculos/lojadeveiculosdaruac',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    }, 
    
    { 
        especie: 'fastfood',
        name: 'Loja de Fastfood da Rua A',         
        path: '/category/fastfood/lojadefastfooddaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'fastfood',
        name: 'Loja de Fastfood da Rua B', 
        path: '/category/fastfood/lojadefastfooddaruab',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'fastfood',
        name: 'Loja de Fastfood da Rua C', 
        path: '/category/fastfood/lojadefastfooddaruac',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    
    { 
        especie: 'merdado',
        name: 'Mercado da Rua A',         
        path: '/category/mercado/mercadodaruaa', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    { 
        especie: 'merdado',
        name: 'Mercado da Rua B', 
        path: '/category/mercado/mercadodaruab', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    },
    {
        especie: 'merdado',
        name: 'Mercado da Rua C', 
        path: '/category/mercado/mercadodaruac', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vero ullam officiis, nostrum nihil perspiciatis assumenda vel beatae deserunt! Voluptatem esse eaque rem quo reiciendis at officiis alias eos in!',
        contact: '3300-0001',
        address: 'Rua A, N°01, Centro'
    }
]