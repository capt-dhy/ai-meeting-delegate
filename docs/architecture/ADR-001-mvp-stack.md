# ADR-001 — MVP Technology Stack

**Status:** Accepted  
**Date:** 2026-09-15

## Decision

The MVP uses:

- **Web:** Next.js + TypeScript + Tailwind CSS + App Router
- **API/orchestrator:** Node.js + TypeScript
- **Database:** MongoDB
- **Realtime/avatar:** Tavus CVI behind an integration boundary
- **AI:** provider-agnostic LLM adapter
- **Control plane:** HTTP API + WebSocket events
- **Monorepo:** pnpm workspaces

## Context

The product needs a fast vertical slice while preserving the ability to replace realtime/avatar and model providers later. The system also needs a clear separation between presentation, orchestration, policy, provider integrations, and shared contracts.

## Consequences

### Positive

- Fast MVP development.
- Clear boundaries between product logic and vendors.
- Shared event contracts reduce frontend/backend drift.
- Tavus can provide the initial realtime digital-human path without making the entire product dependent on its API shape.
- A provider-neutral LLM boundary allows later model changes or specialized models.

### Negative

- Two applications increase initial repository complexity.
- Realtime integration introduces vendor-specific constraints.
- WebSocket lifecycle and session state require careful testing.

## Rejected for MVP

- Training a foundation model.
- Building a custom avatar engine.
- Supporting many meeting providers simultaneously.
- Native iOS/Android applications.
- Full autonomous computer-use.

## Guardrail

Vendor-specific code must remain behind explicit adapters/services. Domain policy must not depend directly on Tavus or a specific LLM SDK.
