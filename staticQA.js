const staticQA = [
  {
    id: 'cadastro',
    tema: 'Cadastro no PJE',
    patterns: [
      'cadastro pje','cadastrar no pje','me cadastrar','como me cadastro',
      'primeiro acesso pje','criar conta pje','criar meu cadastro',
      'registro pje','quero me cadastrar','como criar conta',
      'nunca acessei','cadastro advogado','novo usuário pje',
      'fazer cadastro','como fazer cadastro','preciso me cadastrar',
      'não tenho cadastro','ainda não tenho acesso'
    ],
    answer: 'Para se cadastrar no PJE: acesse o portal do tribunal, clique em "Primeiro Acesso" ou "Cadastre-se", informe seus dados pessoais (nome, CPF, OAB), escolha login e senha, e valide com certificado digital quando solicitado. O link oficial é pje.jus.br.'
  },
  {
    id: 'login',
    tema: 'Acesso / Login',
    patterns: [
      'como acessar pje','como fazer login','entrar no pje','acessar o pje',
      'acessar sistema','login pje','não consigo entrar','problema login',
      'não consigo logar','não consigo acessar','erro ao entrar',
      'como entrar','acesso pje','meu acesso','como acessar o sistema',
      'não abre o pje','pje não abre','pje fora do ar'
    ],
    answer: 'Para acessar o PJE: acesse pje.jus.br ou o portal do seu tribunal, selecione "Certificado Digital" ou "Login com senha", insira seu token/smartcard e digite o PIN. Verifique se o Java e o PJeOffice estão atualizados.'
  },
  {
    id: 'peticionar',
    tema: 'Peticionamento eletrônico',
    patterns: [
      'como protocolar','protocolar petição','peticionar','peticionamento',
      'protocolo eletrônico','como peticionar','enviar petição',
      'protocolar documento','dar entrada','distribuir petição',
      'protocolo inicial','como distribuir','petição inicial pje',
      'enviar petição pje','protocolo pje'
    ],
    answer: 'Para protocolar uma petição no PJE: acesse o processo (ou clique em "Novo Processo" para petição inicial), selecione "Petição Intercorrente", escolha o tipo de petição, anexe o documento em PDF (máx. 1,5 MB por arquivo), revise e assine digitalmente.'
  },
  {
    id: 'anexar',
    tema: 'Anexar documentos',
    patterns: [
      'como anexar','anexar documento','juntar documento','upload documento',
      'subir arquivo','carregar documento','enviar arquivo pje',
      'não consigo anexar','erro ao anexar','problema upload',
      'arquivo não sobe','pdf não carrega','não aceita o arquivo',
      'como subir pdf','como juntar arquivo'
    ],
    answer: 'Para anexar documentos no PJE: acesse o processo, clique em "Petição Intercorrente", selecione o tipo, clique em "Incluir Documento", escolha o arquivo PDF (limite de 1,5 MB por arquivo). Se o arquivo for grande, divida-o em partes ou comprima antes de enviar.'
  },
  {
    id: 'habilitar',
    tema: 'Habilitação nos autos',
    patterns: [
      'habilitar nos autos','solicitar habilitação','me habilitar',
      'habilitação processo','como me habilitar','pedido de habilitação',
      'habilitar advogado','incluir advogado','habilitar procurador',
      'como habilitar','substituição de advogado','novo patrono'
    ],
    answer: 'Para se habilitar nos autos: localize o processo, clique em "Solicitar Habilitação nos Autos", informe os dados do advogado/procurador, anexe a procuração digitalizada em PDF, assine digitalmente e aguarde a aprovação pelo magistrado.'
  },
  {
    id: 'consultar',
    tema: 'Consulta de processos',
    patterns: [
      'consultar processo','ver andamento','acompanhar processo','status processo',
      'andamento do processo','como consulto','pesquisar processo',
      'meu processo','encontrar processo','buscar processo',
      'consultar andamento','verificar processo','processo pje',
      'número do processo','pesquisar pelo número'
    ],
    answer: 'Para consultar processos: faça login no PJE, use o campo de pesquisa (número do processo, nome das partes ou CPF/CNPJ), ou acesse "Meus Processos" no menu do advogado. Acompanhe movimentações e intimações pela aba de andamentos.'
  },
  {
    id: 'prazos',
    tema: 'Prazos processuais',
    patterns: [
      'calcular prazo','prazo processual','contar prazo','prazo contestação',
      'prazo recurso','prazo apelação','prazo embargos','prazo mandado',
      'como calcular prazo','dias úteis','contar dias','prazo fatal',
      'meu prazo','vence quando','quando vence','data limite'
    ],
    answer: 'Os prazos processuais contam-se em dias úteis (exceto Recurso Especial: 30 dias corridos). Contestação/Apelação/Agravo: 15 dias úteis. Embargos de Declaração: 5 dias úteis. Mandado de Segurança: 8 dias. Use a calculadora da aba "Prazos" para calcular com precisão.'
  },
  {
    id: 'assinatura',
    tema: 'Assinatura digital',
    patterns: [
      'assinar documento','assinatura digital','assinar petição','como assinar',
      'pjeoffice','pje office','assinar digitalmente','assinar com token',
      'assinar pdf','assinatura eletrônica','não consigo assinar',
      'erro ao assinar','problema assinatura','assinatura inválida',
      'token assinatura','certificado assinatura'
    ],
    answer: 'Para assinar digitalmente: conecte o token/smartcard, abra o PJeOffice (obrigatório), acesse o documento no PJE, clique em "Assinar", selecione seu certificado e confirme com o PIN. Se o PJeOffice não iniciar, reinicie o serviço em segundo plano ou reinstale a aplicação.'
  },
  {
    id: 'certificado',
    tema: 'Certificado digital',
    patterns: [
      'certificado digital','problema certificado','token','smartcard',
      'certificado não funciona','erro certificado','certificado inválido',
      'driver certificado','java certificado','atualizar certificado',
      'certificado expirado','renovar certificado','instalar certificado',
      'pin token','token não reconhecido','driver token'
    ],
    answer: 'Problemas com certificado digital? Verifique: (1) o certificado está dentro da validade, (2) o driver do token/smartcard está instalado e atualizado, (3) Java versão compatível está ativo, (4) PJeOffice está em execução. Se persistir, reinstale o PJeOffice e atualize os drivers do fabricante do token.'
  },
  {
    id: 'intimacao',
    tema: 'Intimações',
    patterns: [
      'intimação','intimações','ciência da intimação','dar ciência',
      'prazo intimação','consultar intimação','ver intimação pendente',
      'responder intimação','manifestar intimação','notificação pje',
      'não recebi intimação','como ver intimação','intimação eletrônica',
      'onde ver intimações','intimação não chegou'
    ],
    answer: 'Para gerenciar intimações: acesse o menu "Intimações" ou "Painel do Advogado", filtre por "Pendentes de Ciência" e clique em "Dar Ciência" dentro do prazo. Intimações eletrônicas são consideradas publicadas após 24h do envio. Configure notificações por e-mail no seu perfil para não perder prazos.'
  },
  {
    id: 'novo_processo',
    tema: 'Abertura de novo processo',
    patterns: [
      'novo processo','abrir processo','criar processo','iniciar processo',
      'distribuir ação','ajuizar ação','petição inicial','propor ação',
      'como abrir processo','distribuição processo','nova ação',
      'cadastrar processo','registro novo processo'
    ],
    answer: 'Para abrir um novo processo: clique em "Petição Inicial" ou "Novo Processo", selecione a classe processual e assunto, cadastre as partes (autor e réu com CPF/CNPJ), anexe a petição inicial em PDF, pague as custas se aplicável, e assine digitalmente para concluir a distribuição.'
  },
  {
    id: 'senha',
    tema: 'Recuperação de senha',
    patterns: [
      'esqueci senha','recuperar senha','senha errada','redefinir senha',
      'trocar senha','alterar senha','senha bloqueada','conta bloqueada',
      'login bloqueado','não lembro senha','resetar senha',
      'minha senha','esqueci meu login','recuperar acesso'
    ],
    answer: 'Para recuperar a senha: na tela de login clique em "Esqueci minha senha", informe o CPF e o e-mail cadastrado. Você receberá um link de redefinição. Se a conta estiver bloqueada por excesso de tentativas, aguarde 30 minutos ou entre em contato com o suporte do tribunal.'
  },
  {
    id: 'navegador',
    tema: 'Compatibilidade de navegador',
    patterns: [
      'qual navegador','navegador compatível','browser','chrome pje',
      'firefox pje','edge pje','internet explorer','pje não abre no navegador',
      'navegador pje','qual browser','instalar pje','configurar navegador'
    ],
    answer: 'O PJE é compatível com Google Chrome, Mozilla Firefox e Microsoft Edge (todos na versão mais recente). O Internet Explorer não é mais suportado. Para assinar documentos, o PJeOffice precisa estar instalado independentemente do navegador utilizado.'
  }
];

module.exports = staticQA;
