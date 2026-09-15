# AI Meeting Delegate

> Delegate meeting participation without giving up human control.

AI Meeting Delegate is a disclosed AI representative that can participate in a video meeting, understand conversation, respond within defined authority, and remain under human supervision.

## Product Principle

**Complexity in the system, simplicity in the experience.**

The product must make AI participation obvious, controllable, and auditable. It must never secretly impersonate a human.

## Canonical Product Routes

| Route | Purpose |
|---|---|
| `/live` | Supervise an active AI delegate during a meeting |
| `/prepare` | Configure and deploy a delegate |
| `/history` | Review meeting records, decisions, guardrails, and audit data |
| `/persona` | Configure persona, voice, disclosure, knowledge, and authority |

The canonical design is documented in [`docs/PROJECT_SPEC.md`](docs/PROJECT_SPEC.md).

## Architecture

```text
Web / Mobile UI
       |
       v
API + WebSocket Control Plane
       |
       v
Orchestrator
  ├── Session Manager
  ├── Policy Engine
  └── Command Router
       |
       +---- Tavus CVI (MVP realtime/avatar)
       |
       +---- LLM Adapter (provider-agnostic)
       |
       +---- MongoDB
```

## Repository Structure

```text
apps/
  web/                 # Next.js web application
  api/                 # Node.js/TypeScript API + orchestrator
packages/
  contracts/           # Shared domain types and realtime event contracts
  config/              # Shared TypeScript/tooling configuration

docs/
  PROJECT_SPEC.md      # Frozen product + design + engineering specification
  architecture/        # Architecture decisions and diagrams
```

## Operating Modes

- **AUTO** — AI hears, decides, and responds within policy.
- **ASSIST** — AI prepares a response and waits for operator approval.
- **REMOTE** — operator sends instructions to steer the delegate.
- **TAKEOVER** — human control immediately stops AI output.

## Trust Requirements

Every live session must make clear:

1. That an AI representative is present.
2. Who it is speaking with.
3. What the AI is hearing and doing at an operational level.
4. What authority and guardrails apply.
5. How the operator can pause, intervene, or take over.
6. When the meeting has ended and what was recorded.

Do not expose hidden chain-of-thought. Show safe operational state instead.

## MVP Definition of Done

A user can create a delegate, define its objective and guardrails, start a supported meeting, see the disclosed digital representative participate, observe the live conversation, influence the delegate remotely, pause or take over, end the session, and receive a post-meeting record.

## Engineering Rules

- TypeScript end-to-end where practical.
- Provider integrations sit behind adapters/interfaces.
- Shared contracts live in `packages/contracts`.
- Product rules belong in the policy engine, not UI components.
- Realtime state is explicit and event-driven.
- Never fabricate telemetry or audit data.
- UI implementation must follow the canonical design rather than inventing new screens.
- Accessibility, reduced motion, keyboard control, and disclosure are first-class requirements.
- Keep MVP scope narrow enough to validate the vertical slice.
