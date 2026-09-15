# MVP Implementation Plan

## Phase 0 — Foundation

- Monorepo and workspace configuration.
- Next.js web application.
- Node.js/TypeScript API application.
- Shared contracts package.
- Environment validation.
- Logging/error conventions.
- Health endpoints.
- Base CI checks.

**Exit condition:** both apps install, type-check, lint, build, and run locally.

## Phase 1 — Product Shell

Implement the canonical four routes:

- `/live`
- `/prepare`
- `/history`
- `/persona`

Build the shared shell, navigation, design tokens, and reusable UI primitives from the canonical specification.

**Exit condition:** the four routes visually match the supplied references without backend simulation being mistaken for real functionality.

## Phase 2 — Domain + Persistence

Implement MongoDB models/repositories for:

- User
- Delegate
- Meeting
- ConversationMessage
- OperatorCommand

Add service-layer validation and repository tests.

**Exit condition:** delegate and meeting configuration can be persisted and retrieved through the API.

## Phase 3 — Orchestrator

Implement:

- meeting session manager
- policy engine
- command router
- AI provider adapter
- realtime provider adapter
- event publisher

The orchestrator owns business rules. UI components must not make policy decisions.

**Exit condition:** a local/in-memory provider can exercise the full session state machine without requiring external vendors.

## Phase 4 — Realtime Vertical Slice

Integrate the realtime/avatar provider through its adapter.

Implement:

- join/leave lifecycle
- audio/video state
- transcript events
- AI state events
- operator commands
- pause/resume
- response approval
- directive injection
- takeover
- end session

**Exit condition:** one supported meeting can run end-to-end with a disclosed AI representative and operator control.

## Phase 5 — History + Audit

Persist transcript and session events. Implement:

- history search/filter
- meeting metrics derived from actual events
- action deliverables
- audit record
- replay/PDF integration boundaries

Do not fabricate metrics while integrations are incomplete.

**Exit condition:** completed meetings produce a verifiable record.

## Phase 6 — Persona + Knowledge

Implement:

- persona persistence
- voice configuration boundary
- disclosure configuration
- knowledge-source CRUD
- ingestion/indexing boundary
- authority limits

**Exit condition:** a delegate can be configured from persisted persona and knowledge settings.

## Phase 7 — Hardening

Test:

- unknown information
- guardrail violations
- operator commands
- pause/resume
- takeover interruption
- provider failure
- reconnect
- duplicate events
- authorization failures
- accessibility/reduced motion

**Exit condition:** MVP Definition of Done passes as an end-to-end test.

## Delivery Rule

Do not implement all phases as one giant coding pass. Each phase should leave the repository in a buildable state and should be reviewed before the next phase begins.
