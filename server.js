// ════════════════════════════════════════════════════════
// PJE-Expert — Servidor do canal WhatsApp (via Twilio Sandbox)
// TRF5 — Dissertação de Mestrado PPgCTI/UFRN
//
// Este servidor recebe as mensagens do WhatsApp via webhook do
// Twilio, roda a MESMA lógica de reconhecimento de padrões usada
// no protótipo web (staticQA.js), e devolve a resposta.
// ════════════════════════════════════════════════════════

const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const staticQA = require('./staticQA');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ── Mensagem de fallback (mesma do protótipo web) ──────────
const FALLBACK_MSG =
  'Não encontrei uma resposta específica para isso. Tente reformular sua pergunta ou ' +
  'consulte a Biblioteca de Manuais. Se preferir, abra um chamado na aba CHAMADOS ou ' +
  'entre em contato com o suporte pelo portal TOT (https://atendimentopje.trf5.jus.br) ' +
  'ou pelos telefones (81) 3425-9241 ou (81) 3425-9920. Estou à disposição para ajudar ' +
  'em caso de dúvidas!';

// ── Mensagem de boas-vindas (primeira interação) ───────────
const WELCOME_MSG =
  '👋 Olá! Sou o *PJE-Expert*, assistente virtual do TRF5 para dúvidas sobre o ' +
  'Processo Judicial Eletrônico.\n\n' +
  'Pode perguntar em linguagem natural, por exemplo:\n' +
  '• _Como fazer cadastro no PJE_\n' +
  '• _Esqueci minha senha_\n' +
  '• _Problema com certificado digital_\n' +
  '• _Como protocolar petição_\n\n' +
  'Em que posso ajudar?';

const SAUDACOES = ['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'oii', 'eae', 'comecar', 'começar', 'start', 'menu'];

// ── Matching robusto: por palavras (não por frase exata) ───
// Em vez de exigir a frase inteira em sequência ("fazer cadastro"),
// verifica se TODAS as palavras de um padrão aparecem na mensagem,
// em qualquer ordem, com qualquer coisa entre elas. Isso é essencial
// porque mensagens reais de WhatsApp incluem conectivos naturais
// ("Como fazer UM cadastro NO PJE") que quebrariam um match exato.
function normaliza(txt) {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Lematização leve para variação de plural em português
// (documentos -> documento, intimações -> intimação, prazos -> prazo)
function lema(palavra) {
  if (palavra.endsWith('oes')) return palavra.slice(0, -3) + 'ao';
  if (palavra.endsWith('s') && palavra.length > 3) return palavra.slice(0, -1);
  return palavra;
}

function tokenizar(txt) {
  return normaliza(txt).split(/\s+/).filter(Boolean).map(lema);
}

function getAnswer(message) {
  const lower = normaliza(message);

  if (SAUDACOES.some(s => lower.trim() === s || lower.trim() === normaliza(s))) {
    return WELCOME_MSG;
  }

  const tokensMsg = new Set(tokenizar(message));

  for (const qa of staticQA) {
    const matched = qa.patterns.some(p => {
      const tokensPattern = tokenizar(p);
      return tokensPattern.every(w => tokensMsg.has(w));
    });
    if (matched) return qa.answer;
  }
  return FALLBACK_MSG;
}

// ── Webhook principal (configurar no Twilio Sandbox) ───────
app.post('/whatsapp', (req, res) => {
  const incomingMsg = (req.body.Body || '').trim();
  const from = req.body.From || 'desconhecido';

  console.log(`[${new Date().toISOString()}] De ${from}: "${incomingMsg}"`);

  const twiml = new MessagingResponse();
  const reply = getAnswer(incomingMsg);
  twiml.message(reply);

  res.type('text/xml');
  res.send(twiml.toString());
});

// ── Rota de teste / verificação de saúde ───────────────────
app.get('/', (req, res) => {
  res.send('✅ PJE-Expert — Servidor WhatsApp está online e operacional.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PJE-Expert WhatsApp bot rodando na porta ${PORT}`);
});
