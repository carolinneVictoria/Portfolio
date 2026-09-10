// Fonte única dos dados de projetos.
// Usado tanto para renderizar os cards da seção #projects quanto o modal de detalhes,
// evitando duplicação de conteúdo entre as duas visualizações.

export const CATEGORIES = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
};

export const projects = [
    {
        id: 'weather-motion',
        name: 'Weather Motion',
        image: 'images/openWeather.png',
        category: 'frontend',
        featured: true,
        shortDescription:
            'Aplicação de previsão do tempo em React e TypeScript, com cenários ilustrados por mim que se adaptam dinamicamente ao clima e ao período do dia.',
        technologies: ['React', 'TypeScript', 'CSS'],
        demoUrl: 'https://weather-motion-nu.vercel.app/',
        githubUrl: 'https://github.com/carolinneVictoria/weather-motion',
        details: {
            context:
                'Projeto pessoal criado para unir minhas duas áreas de interesse: desenvolvimento front-end e ilustração digital.',
            problem:
                'A maioria dos apps de clima mostra apenas números e ícones genéricos, sem transmitir a sensação real do clima consultado.',
            solution:
                'Criei ilustrações próprias para diferentes condições climáticas e períodos do dia, e a interface troca esses cenários dinamicamente conforme os dados retornados pela API de previsão do tempo.',
            features: [
                'Busca de previsão do tempo por cidade',
                'Cenários ilustrados que mudam com clima e horário (dia/noite)',
                'Interface responsiva construída com React e TypeScript',
            ],
            challenges:
                'Sincronizar a troca de ilustrações com os dados assíncronos da API sem gerar flicker visual, mantendo a tipagem das respostas consistente em TypeScript.',
            learnings:
                'Aprofundei o uso de tipagem em integrações com APIs externas e aprendi a equilibrar tempo entre código e produção visual em um mesmo projeto.',
        },
    },
    {
        id: 'pomodoro-todo',
        name: 'Pomodoro To Do',
        image: 'images/pomodoro.png',
        category: 'frontend',
        featured: true,
        shortDescription:
            'Aplicação de produtividade com cronômetro baseado no Método Pomodoro integrado a uma lista de tarefas, com dados salvos no navegador.',
        technologies: ['React', 'TypeScript', 'Vite'],
        demoUrl: 'https://react-pomodoro-todo-q512.vercel.app',
        githubUrl: 'https://github.com/carolinneVictoria/react-pomodoro-todo',
        details: {
            context:
                'Projeto desenvolvido para treinar organização de estado em React e aplicar uma técnica de produtividade que uso no meu dia a dia.',
            problem:
                'Ferramentas de Pomodoro e de lista de tarefas costumam ficar separadas, obrigando a alternar entre apps para organizar o foco do dia.',
            solution:
                'Uni cronômetro Pomodoro e lista de tarefas em uma única aplicação, permitindo associar ciclos de foco às atividades e manter tudo salvo localmente.',
            features: [
                'Cronômetro com ciclos de foco e descanso configuráveis',
                'Lista de tarefas com marcação de concluído',
                'Persistência de dados via LocalStorage',
            ],
            challenges:
                'Manter o cronômetro preciso mesmo com a aba em segundo plano e sincronizar seu estado com a lista de tarefas sem re-renders desnecessários.',
            learnings:
                'Pratiquei gerenciamento de efeitos colaterais e timers em React, além de estruturação de projeto com Vite.',
        },
    },
    {
        id: 'gestao-bicicletaria',
        name: 'Sistema de Gestão Bicicletaria',
        image: 'images/gestao.png',
        category: 'fullstack',
        featured: true,
        shortDescription:
            'Sistema web para gestão de uma bicicletaria, facilitando o controle das principais operações do negócio.',
        technologies: ['PHP', 'MVC', 'SQL'],
        demoUrl: null,
        githubUrl: 'https://github.com/carolinneVictoria/Projeto_Extensao',
        details: {
            context:
                'Projeto de extensão universitária desenvolvido para atender a necessidade real de uma bicicletaria local.',
            problem:
                'O controle de estoque, serviços e vendas era feito manualmente, dificultando o acompanhamento do negócio.',
            solution:
                'Desenvolvi um sistema web seguindo o padrão de arquitetura MVC em PHP, centralizando o cadastro e o controle das operações do negócio em um único lugar.',
            features: [
                'Cadastro e controle de produtos e serviços',
                'Gestão de operações do negócio em um painel único',
                'Arquitetura organizada em Model-View-Controller',
            ],
            challenges:
                'Estruturar corretamente as camadas do MVC em PHP puro, sem framework, mantendo o código organizado e de fácil manutenção.',
            learnings:
                'Solidifiquei a compreensão prática do padrão MVC e da separação de responsabilidades em um sistema full stack.',
        },
    },
    {
        id: 'sistema-especialista',
        name: 'Sistema Especialista',
        image: 'images/sistemaespecialista.png',
        category: 'backend',
        featured: false,
        shortDescription:
            'Sistema especialista com PyMC baseado em redes bayesianas para apoiar a aplicação de fungicidas na cultura da soja.',
        technologies: ['Python', 'Flask', 'PyMC'],
        demoUrl: null,
        githubUrl: 'https://github.com/carolinneVictoria/Sistema_Especialista',
        details: {
            context:
                'Projeto acadêmico na área de sistemas especialistas aplicado ao agronegócio.',
            problem:
                'A decisão sobre aplicação de fungicidas na cultura da soja depende de múltiplas variáveis e costuma se basear apenas na experiência do produtor.',
            solution:
                'Construí um sistema especialista com redes bayesianas em PyMC, servido por uma API em Flask, para apoiar essa tomada de decisão com base em probabilidades.',
            features: [
                'Modelagem de redes bayesianas com PyMC',
                'API em Flask para consulta do modelo',
                'Suporte à decisão sobre aplicação de fungicidas',
            ],
            challenges:
                'Traduzir conhecimento agronômico em uma rede bayesiana coerente e validar as probabilidades geradas pelo modelo.',
            learnings:
                'Aprendi fundamentos de inferência bayesiana aplicada e como expor um modelo estatístico através de uma API.',
        },
    },
    {
        id: 'netflix-clone',
        name: 'Netflix',
        image: 'images/netflix.png',
        category: 'frontend',
        featured: false,
        shortDescription:
            'Interface de seleção de perfis da Netflix recriada durante a Imersão Front-End da Alura.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: null,
        githubUrl: 'https://github.com/carolinneVictoria/imersao-frontend-netflix',
        details: {
            context: 'Projeto desenvolvido durante a Imersão Front-End da Alura.',
            problem:
                'Reproduzir fielmente a interface de seleção de perfis da Netflix usando apenas tecnologias web básicas.',
            solution:
                'Recriei a tela com HTML, CSS e JavaScript, com apoio do GitHub Copilot para acelerar trechos repetitivos.',
            features: [
                'Tela de seleção de perfis fiel ao layout original',
                'Interações e hovers reproduzindo a experiência da Netflix',
            ],
            challenges:
                'Reproduzir detalhes finos de layout e espaçamento apenas observando a interface original.',
            learnings:
                'Evoluí minha atenção a detalhes de UI e a leitura de layouts complexos a partir de referências visuais.',
        },
    },
    {
        id: "devspace-auth",
        name: "DevSpace Auth",
        image: "images/devspace.png",
        category: "fullstack",
        featured: false,
        shortDescription:
            "Aplicação full-stack de registro e login, desenvolvida com Node.js nativo, React, Prisma e PostgreSQL.",

        technologies: [
            "Node.js",
            "React",
            "TypeScript",
            "Prisma",
            "Docker",
        ],

        demoUrl: null,
        githubUrl: "https://github.com/carolinneVictoria/devspace-auth",

        details: {
            context:
                "Projeto pessoal desenvolvido para praticar a construção e a integração de um fluxo de autenticação completo, do frontend ao banco de dados.",

            problem:
                "Compreender como implementar o cadastro e o login de usuários, garantindo a validação dos dados e o armazenamento seguro das senhas.",

            solution:
                "Desenvolvi uma aplicação com frontend em React e uma API construída com o módulo HTTP nativo do Node.js. Os dados são persistidos no PostgreSQL por meio do Prisma, e as senhas são protegidas com bcryptjs.",

            features: [
                "Cadastro de usuários",
                "Login com validação de credenciais",
                "Criptografia de senhas com bcryptjs",
                "Validação de formulários com React Hook Form e Zod",
                "Persistência de usuários no PostgreSQL",
                "Banco de dados executado com Docker Compose",
            ],

            challenges:
                "Estruturar uma API sem utilizar um framework HTTP e integrar corretamente o frontend, o backend e o banco de dados.",

            learnings:
                "Aprofundei meus conhecimentos sobre requisições HTTP, organização de uma API, validação de dados, proteção de senhas e integração full-stack.",
        },
    },
    {
        id: 'landing-pages',
        name: 'Landing Pages',
        image: 'images/landingPage.png',
        category: 'frontend',
        featured: false,
        shortDescription:
            'Conjunto de landing pages com foco em acessibilidade, SEO e responsividade.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        demoUrl: 'https://carolinnevictoria.github.io/landing-pages',
        githubUrl: 'https://github.com/carolinneVictoria/landing-pages',
        details: {
            context: 'Projeto pessoal para treinar boas práticas de front-end fora do contexto de uma aplicação completa.',
            problem:
                'Landing pages muitas vezes priorizam apenas o visual, deixando acessibilidade e SEO em segundo plano.',
            solution:
                'Desenvolvi páginas com HTML semântico, atenção a contraste e navegação por teclado, além de metadados básicos de SEO.',
            features: [
                'HTML semântico e responsivo',
                'Atenção a acessibilidade (contraste, foco, navegação)',
                'Metadados básicos para SEO',
            ],
            challenges: 'Equilibrar um visual atrativo com marcação acessível e performática.',
            learnings: 'Reforcei boas práticas de HTML semântico e acessibilidade que hoje aplico em todos os projetos.',
        },
    },
];

export function getProjectById(id) {
    return projects.find((project) => project.id === id) ?? null;
}
