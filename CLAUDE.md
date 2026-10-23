# Remote Pi — Planejamento do pacote

## Escopo permanente desta colaboração

Este repositório contém vários subprojetos, mas o trabalho desta colaboração é
somente o pacote npm gerado em `pi-extension/` (`@hk_net/remote-pi`). Não altere
`app/`, `relay/`, `site/` ou `cockpit/` para tarefas deste escopo.

**Não usamos Cockpit nem cmux neste workflow.** Não invoque seus CLIs ou scripts,
não procure panes, não despache tarefas por eles e não peça que o usuário os
instale ou disponibilize. A presença ou ausência dessas ferramentas nunca é um
bloqueio para trabalhar no pacote Remote Pi.

Esta pasta raiz continua sendo o espaço de planejamento: leia e escreva planos
em `plan/NN-<slug>.md`. Implementação, testes, builds e empacotamento do npm
acontecem dentro de `pi-extension/`, seguindo [`pi-extension/CLAUDE.md`](./pi-extension/CLAUDE.md)
e os comandos pnpm documentados ali. Não rode builds ou testes de subprojetos a
partir da raiz.

## Decisões já tomadas

Antes de propor mudança de direção (arquitetura, pareamento, escopo, UI ou
segurança), leia [`plan/00-decisions.md`](./plan/00-decisions.md). As decisões
fechadas não devem ser revisitadas sem evidência forte; se necessário, abra a
discussão explicitamente em vez de mudar a direção em silêncio.

## Convenções de planos

- Numeração sequencial: `01-bootstrap.md`, `02-ai-orchestration.md`, etc.
- Cada plano contém contexto, estrutura esperada, passos com critérios de
  aceite, Definition of Done e próximos planos.
- Planos descrevem o que implementar e como verificar, não o código completo.
- Pseudocódigo e comandos exatos são bem-vindos; implementação real fica em
  `pi-extension/`.

## Limites de escrita

- Na raiz, editar apenas documentação de planejamento necessária e arquivos em
  `plan/`.
- Para tarefas de código do pacote, limitar alterações a `pi-extension/`.
- Não comitar nem publicar sem pedido explícito.
- Preservar alterações preexistentes e arquivos não rastreados do usuário.
