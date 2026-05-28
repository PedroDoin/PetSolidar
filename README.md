# PetSolidar

Sistema web de gestão para ONGs de proteção animal, desenvolvido para centralizar o controle de pets, processos de adoção, visitas e check-ins em uma única plataforma.

## Sobre o projeto

O PetSolidar foi criado para resolver um problema real de ONGs: a dificuldade de gerenciar animais, adotantes e processos de adoção de forma organizada. A plataforma é voltada exclusivamente para uso interno das ONGs, que controlam todo o fluxo — do cadastro do animal até a conclusão da adoção.

## Funcionalidades

- **Autenticação** — login seguro para equipes das ONGs
- **Cadastro de ONG** — registro e configuração da organização
- **Gestão de pets** — cadastro completo de animais com histórico de vacinas e informações de saúde
- **Processo de adoção** — acompanhamento de cada etapa do processo adotivo
- **Visitas e check-ins** — registro e controle de visitas dos candidatos à adoção

## Stack

- **Front-end:** React, TypeScript, Tailwind CSS
- **Back-end/Banco de dados:** Supabase (PostgreSQL)
- **Versionamento:** Git e GitHub (desenvolvimento colaborativo com branches e pull requests)

## Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Conta no Supabase (para as variáveis de ambiente)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/PedroDoin/PetSolidar.git

# Entre na pasta
cd PetSolidar

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis: