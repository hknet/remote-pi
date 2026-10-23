# Orchestration overlay

Este arquivo é usado apenas quando uma tarefa recebida começa com
`[ORCH:<task-id>]`. O trabalho desta colaboração é limitado ao pacote npm
`@hk_net/remote-pi` em `pi-extension/`.

## Regras

- Trabalhe somente no cwd do subprojeto (`pi-extension/` para este workflow).
- Não faça commit nem push.
- Arquivos em `.orchestration/contracts/` são read-only; mudanças de contrato
  exigem uma tarefa explícita.
- Escreva somente dentro do cwd e em `.orchestration/results/`.
- **Não use Cockpit ou cmux, seus CLIs, scripts, panes ou mecanismos de
  notificação.** Este workflow não depende dessas ferramentas.

## Reportar resultado

Ao terminar, grave `.orchestration/results/<task-id>.md` com esta estrutura:

```markdown
# [ORCH:<task-id>] <título curto>

**Status**: done | partial | blocked
**Arquivos tocados**: <lista relativa ao cwd, ou "nenhum">

## Resumo
<2-5 linhas: o que foi feito; se partial/blocked, por que parou aqui>

## Notas pro orquestrador
<opcional: decisões em aberto, riscos, próximos passos sugeridos>
```

Depois, comece a resposta no chat com `[ORCH:<task-id>] <status>` e uma linha de
resumo. O result file e a resposta no chat são os únicos canais de conclusão.

## Contratos

Quando `.orchestration/contracts/` existir, leia os contratos relevantes antes
de implementar. Eles são a fonte de verdade compartilhada e read-only.
