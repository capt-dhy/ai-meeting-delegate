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
- **Package manager:** npm

## Context

The product needs a fast vertical slice while preserving the ability to replace realtime/avatar and model providers later. The system also needs a clear separation between presentation, orchestration, policy, provider integrations, and shared contracts.

For this project, npm is preferred over pnpm because the goal is to keep the development workflow familiar and reduce tooling concepts while the architecture is being learned. We can introduce workspaces or another package-management strategy later if the repository genuinely needs it.

## Consequences

### Positive

- Fast MVP development.
- Familiar install/run commands for the current developer.
- Clear boundaries between product logic and vendors.
- Shared contracts reduce frontend/backend drift.
- Tavus can provide the initial realtime digital-human path without making the entire product dependent on its API shape.
- A provider-neutral LLM boundary allows later model changes or specialized models.

### Negative

- Two applications increase initial repository complexity.
- Realtime integration introduces vendor-specific constraints.
- npm does not remove the need to understand the two application boundaries.
- A future move to a workspace-oriented package manager may require migration work if the monorepo grows substantially.

## Rejected for MVP

- Training a foundation model.
- Building a custom avatar engine.
- Supporting many meeting providers simultaneously.
- Native iOS/Android applications.
- Full autonomous computer-use.
- pnpm as a required development tool.

## Guardrail

Vendor-specific code must remain behind explicit adapters/services. Domain policy must not depend directly on Tavus or a specific LLM SDK.
