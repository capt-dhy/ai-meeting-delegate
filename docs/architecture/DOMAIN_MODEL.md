# Initial Domain Model

## User

Represents the authenticated operator.

```text
id
email
name
createdAt
updatedAt
```

## Delegate

The reusable AI representative configuration.

```text
id
userId
name
personaId
objective
mustDo[]
mustNotDo[]
escalateWhen[]
authority
mode
knowledgeSourceIds[]
status
createdAt
updatedAt
```

## Meeting

A single delegate session attached to a meeting target.

```text
id
userId
delegateId
meetingUrl
meetingProvider
status
mode
startedAt
endedAt
operatorConnectionState
createdAt
updatedAt
```

## ConversationMessage

A persisted transcript/audit event representing a spoken or generated turn.

```text
id
meetingId
speakerType
speakerId
text
timestamp
confidence
metadata
```

`speakerType` is one of `human`, `ai`, `operator`, or `system`.

## OperatorCommand

A control action issued by the operator.

```text
id
meetingId
operatorId
type
payload
createdAt
acknowledgedAt
```

Command types include:

- `approve_response`
- `edit_response`
- `decline_response`
- `directive`
- `pause`
- `resume`
- `takeover`
- `release_takeover`
- `end_meeting`

## Realtime Events

All realtime messages use an explicit event type and versioned payload.

```text
meeting.status
meeting.transcript
meeting.ai_state
meeting.ai_response
meeting.operator_command
meeting.takeover
meeting.error
```

## AI State

Canonical operational states:

- `listening`
- `thinking`
- `speaking`
- `waiting`
- `paused`
- `human_control`
- `reconnecting`
- `error`

These states are product-facing operational status only. They must never expose hidden model chain-of-thought.

## Policy Model

The policy engine evaluates every AI action against:

```text
objective
mustDo
mustNotDo
authority
escalationRules
mode
```

A policy decision should be explainable at the operational level, for example: `blocked_by_guardrail`, `requires_operator_approval`, or `outside_authority`.
