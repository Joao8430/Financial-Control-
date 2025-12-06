# FinControl Pro - Financial Management Platform

Uma plataforma profissional de controle financeiro com dashboard executivo, análises avançadas e relatórios detalhados.

## Recursos

- **Dashboard em Tempo Real**: Visualize métricas principais de receitas, despesas e saldo
- **Gráficos Interativos**: Análise visual de gastos por categoria e fluxo mensal
- **Relatórios Executivos**: Velocidade de gastos, previsão de fluxo de caixa e distribuição de categorias
- **Gerenciamento de Transações**: Adicione, visualize e categorize suas transações
- **Análises Detalhadas**: Tendências mensais, orçamento vs real e top transações

## Arquitetura

### Backend
- **API Routes**: Endpoints REST implementados com Next.js Route Handlers
- **Database**: Armazenamento persistente em JSON (arquivo local)
- **Operações**: GET, POST, PUT, DELETE para transações e resumos

### Frontend
- **Next.js 16**: Framework React com App Router
- **Recharts**: Visualização de dados com gráficos interativos
- **Tailwind CSS v4**: Design system moderno e responsivo
- **Componentes**: UI componentes reutilizáveis com dark mode

## Como Usar

### 1. Iniciar o Projeto
\`\`\`bash
npm install
npm run dev
\`\`\`

A aplicação estará disponível em `http://localhost:3000`

### 2. Adicionar Transações
- Clique no botão "Nova Transação"
- Preencha: Descrição, Valor (negativo para despesa), Data e Categoria
- Clique em "Salvar"

### 3. Visualizar Dados
- **Dashboard**: Resumo geral com métricas principais
- **Analytics**: Análise por período (últimos 6 meses, ano atual, etc)
- **Reports**: Relatórios executivos com gráficos avançados

## Estrutura de Pastas

\`\`\`
app/
├── api/                      # API Routes
│   ├── transactions/         # CRUD de transações
│   └── summary/              # Resumos financeiros
├── layout.tsx                # Layout raiz
├── globals.css               # Estilos globais
└── page.tsx                  # Dashboard principal

components/
├── ui/                       # Componentes shadcn/ui
├── dashboard-header.tsx      # Cabeçalho do dashboard
├── metrics-cards.tsx         # Cards de métricas
├── transactions-list.tsx     # Lista de transações
└── new-transaction-modal.tsx # Modal para nova transação

lib/
└── db.ts                     # Camada de banco de dados

data/
└── db.json                   # Arquivo de banco de dados (criado automaticamente)
\`\`\`

## API Endpoints

### Transações
- `GET /api/transactions` - Lista todas as transações
- `POST /api/transactions` - Cria nova transação
- `PUT /api/transactions/[id]` - Atualiza transação
- `DELETE /api/transactions/[id]` - Deleta transação

### Resumos
- `GET /api/summary?month=X&year=Y` - Resumo do período

## Dados de Exemplo

Ao adicionar a primeira transação, a aplicação criará o arquivo `data/db.json` automaticamente com estrutura de dados pronta.

Exemplo de transação:
\`\`\`json
{
  "id": "1234567890",
  "amount": -50.00,
  "date": "2025-01-15",
  "description": "Compras no supermercado",
  "category": "Alimentação",
  "currency": "BRL",
  "createdAt": "2025-01-15T10:30:00.000Z"
}
\`\`\`

## Deployment

### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Clique em "Deploy"
3. A aplicação estará live em segundos

**Nota**: O armazenamento em JSON funcionará durante o desenvolvimento. Para produção com persistência, considere integrar com um banco de dados como Supabase ou Neon.

## Tecnologias

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Recharts** - Visualização de dados
- **shadcn/ui** - Componentes UI
- **Lucide Icons** - Ícones

## Suporte

Para dúvidas ou problemas, verifique:
1. Se o servidor está rodando (`npm run dev`)
2. Permissões de escrita na pasta `data/`
3. Console do navegador para mensagens de erro

---

Desenvolvido com ❤️ para controle financeiro profissional.
