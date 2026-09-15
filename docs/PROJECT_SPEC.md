# AI Meeting Delegate — Canonical Project Specification

**Status:** Frozen for implementation  
**Source of truth:** Final Stitch `1` exports + canonical Codex inspection  
**Principle:** Complexity in the system, simplicity in the experience.

## 1. Product Vision

AI Meeting Delegate lets a user delegate participation in a video meeting to a clearly disclosed AI representative while retaining human supervision and immediate control.

The product must make it obvious:

- that an AI is participating;
- who it is talking to;
- what it heard;
- what it intends to do;
- how the operator can intervene;
- how to pause or take over.

Secret impersonation or deceptive human representation is not a product requirement.

## 2. Canonical Routes

Only these four routes are currently canonical:

- `/live` — Live Command Center
- `/prepare` — Prepare AI Delegate
- `/history` — Meeting History
- `/persona` — Persona & Knowledge

The supplied final references contain five captures: Live mobile, Live desktop, History mobile, Persona mobile, and Prepare mobile.

Do **not** invent desktop reference layouts for History, Persona, or Prepare.

## 3. Design System

### Global shell

- Dark app surface: `#090A0D`
- Primary text: `#F8FAFC`
- Typeface: Inter
- Icons: Material Symbols Outlined
- Mobile header: 64px, translucent/blurred
- Mobile bottom navigation: 80px plus safe-area inset
- Mobile horizontal margin: 16px
- Desktop Command Center content cap: 1440px
- Desktop outer padding: 32px
- Desktop Command Center grid: 12 columns, 8-column live stage / 4-column oversight, 24px gap

### Typography

- Display: 36/44px, 600
- Large title: 28px, 600
- Mobile page title: 24/30px, 600
- Headline: 20px, 500
- Small title: 18/24px, 500
- Body large: 16px, 400, 1.5
- Body medium: 14px, 400, 1.45
- Body small: 12/16
- Labels: 11/12px, medium, uppercase where appropriate

### Spacing

Use the 4, 8, 16, 24, and 32px scale. Mobile margin is 16px; desktop margin is 32px.

### Surfaces

- Lowest: `#040507` (desktop `#0D0E11`)
- Low: `#1B1B1F`
- Base: `#1F1F23` (desktop `#14161C`)
- High: `#292A2D`
- Highest: `#343538`

Cards are flat dark surfaces, not glass. Use restrained shadows and avoid unnecessary borders.

### Accent/state colors

- Primary: `#8ED5FF`
- Primary container: `#38BDF8` / desktop `#0369A1`
- Success/live: `#56E5A9`
- Warning: `#F59E0B`
- Error/takeover: `#F43F5E`
- Secondary text: `#BDC8D1` mobile / `#94A3B8` desktop
- Outline: `#334155`

### Radius

- Default: 2px
- Small: 4px
- Cards: 8px
- Rounded controls/pills: 12px

## 4. Reusable Components

- `AppHeader`
- `MobileBottomNav`
- `DesktopTopNav`
- `StatusPill`
- `MetricPill`
- `IconButton`
- `PrimaryButton`
- `DangerButton`
- `Chip`
- `Card`
- `SectionLabel`
- `AvatarStream`
- `DialogueFeed`
- `TranscriptTurn`
- `ResponseGate`
- `DirectiveChip`
- `GuardrailList`
- `MetricTile`
- `AuditMetric`
- `DocumentRow`
- `ModeCard`
- `SliderField`
- `SegmentedTab`
- `KnowledgeSourceRow`

## 5. `/live` — Command Center

### Mobile hierarchy

1. Fixed header
2. Square avatar stream with disclosure/fidelity pills, listening state, and waveform
3. Meeting title, counterpart, elapsed time
4. Live Exchange card
5. Proposed Response gate
6. Horizontally scrolling micro-directive chips
7. Full-width takeover action
8. Pause / Directives / End Call dock
9. Bottom navigation

### Desktop hierarchy

1. Fixed header with navigation, connection latency, takeover shortcut, operator identity
2. Meeting title/participant row and timer/status/guardrail pills
3. 8/4 live-console grid
   - Left: 16:9 representative stream, disclosure/telemetry HUD, tracking reticle, counterpart PiP, listening waveform, intent banner, action cluster, telemetry tiles
   - Right: dialogue stream, response gate, steering directive card, guardrails status disclosure
4. Product footer

Desktop is a distinct composition, not scaled mobile.

### Required live states

- Listening
- Thinking
- Speaking
- Waiting
- Paused
- Human Control
- Reconnecting
- Error

### Required controls

- Approve
- Edit
- Decline/block
- Directive injection
- Pause/resume
- Takeover
- End call

Takeover must immediately mute/deactivate AI output and show **Human Control Active**.

## 6. `/prepare` — Prepare AI Delegate

Purpose: configure and dispatch a delegate.

1. Header + autonomous standby status
2. Page title/subtitle
3. Bridge Target: meeting URL, auto-fill, verification, meeting ID
4. Representative Persona: avatar, identity, configuration, neural voice, voice sample, mandatory disclosure
5. Mission Objective
6. Boundaries & Guardrails: Must Do, Must Not Do, Escalate When
7. Operating Mode: Auto, Assist, Remote, Takeover Ready
8. Ingested Knowledge list and attachment controls
9. Deploy AI Representative
10. Verbal disclosure notice
11. Bottom navigation

Exactly one operating mode must be selected.

## 7. `/history` — Meeting History

Purpose: review the verifiable meeting record.

1. Header, title/subtitle, Ledger In Sync status
2. Search + category chips: All, Autonomous, Assisted, Takeover
3. Current meeting audit card
   - mode/date/duration + Verified
   - participants
   - 2x2 metrics
   - Executive Synthesis
   - Action Deliverables
   - Ledger hash/copy
   - Review Replay / Signed Audit PDF
4. Previous session cards
5. Bottom navigation

Search must filter topic, attendee, or hash. Replay and signed PDF are real workflows, not decorative buttons.

## 8. `/persona` — Persona & Knowledge

Default Persona tab:

1. Page heading + Ready to Delegate
2. Active Persona / Knowledge Vault segmented tabs
3. Identity card with representative image, name, verification, role, apparel/location facts, recalibration
4. Voice & Prosody Tuning with sample and sliders
5. Ethics & Disclosure with immutable stream badge, verified disclosure ID, mandatory disclaimer, locked-by-policy state, audit log
6. Deploy Delegate Configuration
7. Bottom navigation

Knowledge Vault includes:

- Search
- Add Knowledge Source / URL
- Synced vector knowledge
- Authority limits and safeguards
- Budget cap/progress
- Contract amendment escalation rule

## 9. Interaction Requirements

- Live status indicators pulse/ping.
- Audio visualizers animate.
- Approve produces transmitted/success state.
- Edit opens inline editable response.
- Decline suppresses delivery.
- Directive chips acknowledge injection then reset.
- Pause toggles to Resume.
- End Call requires confirmation and enters concluded/debriefing state.
- Desktop timer increments each second.
- Response countdown reduces toward transmission.
- Space/Escape trigger takeover except Space while an input is focused.
- History chips filter selected treatment.
- Ledger copy temporarily shows Copied and writes the hash.
- Persona tabs transition around 300ms.
- Voice preview speaks then returns to idle.
- Sliders use accessible range inputs and update displayed values.
- Prepare voice waveform animates for approximately 2.4 seconds.
- Removing knowledge uses a short fade/shift transition and decrements the count.
- Deploy shows a connecting state and then success.

All controls require keyboard focus, accessible names, live-region announcements, confirmation/error states, and reduced-motion alternatives.

## 10. Backend / Realtime Requirements

The prototype UI currently simulates these behaviors. Production implementation must provide:

### Realtime

- WebRTC join/leave
- encrypted media bridge
- audio/video inputs
- AI avatar output
- mute controls
- latency/fidelity/sync telemetry
- live timer

### Speech and transcript

- streaming ASR
- speaker attribution
- timestamps
- live transcript append
- persistence

### AI orchestration

- context retrieval
- guardrails
- response drafting
- alignment/confidence
- countdown/auto-send
- approve/edit/block
- directive injection
- pause/resume
- takeover/handoff
- end-session debrief

### Policy and compliance

- immutable disclosure ID
- meeting consent/disclaimer broadcast
- authorization checks
- audit log
- hard-stop
- escalation
- ledger hashing/signing
- replay retention
- signed PDF

### History

- search/filter/pagination
- verified metrics
- action tracking
- replay
- ledger copy

### Persona

- persona persistence
- voice synthesis/preview
- tuning values
- appearance recalibration
- deployment/versioning

### Knowledge

- upload/URL ingestion
- malware/access checks
- indexing/vectorization
- synchronization
- deletion
- source options
- RAG retrieval
- authority-limit enforcement

### Platform

- authentication
- account menu
- role/tenant permissions
- offline/error/retry states
- optimistic updates with rollback

## 11. Architecture

```text
Web / Mobile UI
       |
   API / WebSocket
       |
Orchestrator
  |    |    |
  |    |    +-- Policy Engine
  |    +------- Session Manager
  +------------ Command Router
       |
   +---+---------+
   |             |
 Tavus CVI    LLM Adapter
                   |
                MongoDB
```

### Frontend

Next.js + TypeScript + App Router + Tailwind.

### Backend

Node.js + TypeScript orchestrator/API layer.

### Database

MongoDB.

### Realtime MVP

Tavus CVI.

### Future realtime

LiveKit abstraction remains possible.

### AI abstraction

The LLM provider must be replaceable behind an adapter exposing:

- `generate()`
- `stream()`
- `cancel()`
- `healthCheck()`

## 12. Core Data Model

- User
- Delegate
- Meeting
- ConversationMessage
- OperatorCommand

## 13. Operating Modes

### AUTO

AI hears → decides → responds.

### ASSIST

AI prepares response → waits for approval.

### REMOTE

Human sends instructions.

### TAKEOVER

Human controls the meeting; AI must immediately stop speaking.

## 14. API Surface

Initial API shape:

- `POST/GET/PATCH /api/delegates`
- `POST/GET /api/meetings`
- `POST /api/meetings/:id/start`
- `POST /api/meetings/:id/stop`
- `POST /api/meetings/:id/command`
- `POST /api/meetings/:id/takeover`
- `POST /api/meetings/:id/pause`
- transcript endpoint
- summary endpoint

Realtime events:

- `meeting.status`
- `meeting.transcript`
- `meeting.ai_state`
- `meeting.ai_response`
- `meeting.operator_command`
- `meeting.takeover`
- `meeting.error`

## 15. Product Trust Rules

1. AI participation must be clearly disclosed.
2. Never secretly impersonate a human.
3. Never expose chain-of-thought.
4. Show safe operational context instead of hidden reasoning.
5. Do not fabricate impressive telemetry or metrics.
6. Operator must always have a clear intervention path.
7. Takeover must be immediate and reliable.
8. Errors must be calm, clear, and recoverable.
9. Complexity belongs in the system, not in the user's face.

## 16. MVP Definition of Done

The vertical slice is complete when:

1. User creates a delegate.
2. User defines objective and guardrails.
3. User starts a meeting.
4. AI appears as a clearly disclosed digital representative.
5. Human participant speaks.
6. AI hears, understands, and responds.
7. User can monitor the meeting remotely.
8. User sends an instruction.
9. AI follows the instruction.
10. User pauses or takes over.
11. AI immediately yields control.
12. Meeting ends.
13. Transcript and summary are produced.

## 17. Two-Day Vertical Slice

### Day 1

- repository/bootstrap
- Next.js + Node + MongoDB
- environment configuration
- delegate configuration
- realtime conversation
- transcript/state
- operator commands
- pause
- response override

Definition: live conversation + remote influence.

### Day 2

- digital human
- live meeting UI
- phone control
- takeover/status/transcript/commands
- failure handling
- disclosure
- end-to-end validation

Definition: human ↔ AI digital human ↔ AI brain ↔ remote control all work.

## 18. Testing

At minimum test:

- basic response
- unknown information
- operator instruction
- pause/resume
- takeover
- interruption
- policy violation
- connection failure
- disclosure behavior
- end-session behavior

## 19. Major Risks

- realtime latency
- avatar lag
- poor AI decisions
- provider outage
- meeting integration limitations
- operating cost
- privacy/data handling
- scope creep

Mitigate through a narrow vertical slice, provider abstraction, hard policy controls, real telemetry, and explicit failure states.

## 20. Roadmap

- v0.1 — proof of concept
- v0.2 — reliable delegate
- v0.3 — multiple meetings
- v0.4 — personal intelligence
- v0.5 — autonomous worker
- v1.0 — product

A custom/specialized meeting model can be explored later after legitimate evaluation/conversation data exists. Do not train a foundation model for the MVP.
