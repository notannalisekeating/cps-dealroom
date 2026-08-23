# CPS Deal Room Phase 0 Functional Architecture Audit

Status: **For review; implementation frozen**  
Date: 2026-08-23  
Scope: Current prototype, Contoso golden scenario, and proposed functional contracts

## 1. Specification integrity notice

The supplied file is titled **CPS Deal Room — UI/UX Implementation Addendum**. Its Section 11 is "Lawyer Commercial Context Must Explain Why the Deal Matters" and its Section 12 is "Legal Issues Must Explain Why Judgment Is Required." It does not contain the referenced Section 11 gap framework, Section 12 phased implementation plan, or a Phase 0 definition.

This audit therefore:

- treats the supplied addendum as authoritative for its actual UI, commercial-context, legal-judgment, and provenance requirements;
- uses the user's stated priorities as the Phase 0 mandate;
- does not claim that the provisional phases below reproduce an absent Section 12 architecture plan; and
- blocks later-phase implementation until the intended Functional Vision & Architecture Addendum is supplied or these proposed contracts are approved as its substitute.

## 2. Executive assessment

The current app is a visually developed static prototype with a single Contoso narrative. It demonstrates the intended surfaces, but it does not yet implement a functional deal-room architecture.

The principal gap is not missing screens. It is missing causality. A seller answer, legal decision, forecast change, training completion, or routing change generally sets a boolean in browser state. Other screens then render specially authored conditional copy. There is no shared authoritative opportunity, matter, issue, document, specialist request, decision, forecast, training, source, claim, or event record connecting those changes.

As a result, the prototype can show an updated-looking result while simultaneously retaining contradictory old values elsewhere. Provenance is also representational rather than trustworthy: source names and counts appear, but claims cannot be traced to a source artifact, excerpt, actor, timestamp, or derivation.

**Phase 0 disposition:** preserve the present visual system, freeze feature breadth, establish domain and provenance contracts, and make Contoso the acceptance scenario for every later implementation phase.

## 3. Current architecture

```text
src/lib/model.ts
  static singleton matter + static deals + UI-oriented DemoState
                    |
                    v
src/app/page.tsx (single client component module)
  Home owns DemoState, draft answers, and selected decision
                    |
          shallow update(Partial<DemoState>)
                    |
       browser localStorage (unversioned JSON)
                    |
     conditional rendering across all personas

Local component state also owns Teams selection, filters, dialogs,
drill-downs, form drafts, and admin editors.

There is no domain service, command handler, reducer, event log,
projection layer, repository, API, integration adapter, or test suite.
```

### 3.1 State ownership

| State | Current owner | Persistence | Functional status |
|---|---|---|---|
| Persona and surface | `DemoState` | `localStorage` | Navigation only |
| Request/analysis/questions | Boolean fields in `DemoState` | `localStorage` | UI flags; analysis is a timer |
| Seller answers | Local form state, then optional `DemoState` object | Partially persisted | Not a versioned submission or sourced fact set |
| Legal decision | Local selected index, then `legalComplete` boolean | Completion only | No decision record, rationale, actor, issue update, or document effect |
| Forecast change | `forecastApplied` boolean | `localStorage` | No forecast entity is updated |
| Training completion | `trainingComplete` boolean | `localStorage` | No assignment/completion record |
| Routing rule | `routingRuleEnabled` boolean | `localStorage` | No rule version or routing outcome |
| Contoso matter and sources | Static `matter` constant | Build artifact | Read-only fixture |
| Leadership metrics | Hard-coded values plus boolean branches | None | Hand-authored projection, not aggregation |
| Teams messages | JSX conditional branches | None | Not message or notification records |

### 3.2 Architectural concentration and duplication

- `src/app/page.tsx` contains the shell, all persona workspaces, dialogs, workflows, and projections in one client file.
- An older `TeamsExperience` and the active `ModernTeamsExperience` coexist, duplicating the same simulated request flow.
- Contoso identifiers, values, dates, forecast categories, probabilities, people, and source labels are repeated in view code instead of selected from shared records.
- Generic `RoleWorkspace` screens render static rows and local drill-down text; opening a record does not resolve an entity.
- Admin editor fields are editable UI, but Save only closes the dialog.
- Static export to GitHub Pages means there is currently no server-side trust boundary or shared multi-user persistence.

## 4. Evidence-based gap assessment

Because the delivered document lacks the referenced gap framework, this matrix uses the functional dimensions implied by the user's request and the addendum's actual Sections 11-13.

| Dimension | Current evidence | Gap and consequence | Priority |
|---|---|---|---|
| Canonical shared state | `DemoState` is primarily booleans; `matter` is a static singleton | No authoritative business aggregate; screens can disagree | Critical |
| Causal actions | `update()` shallow-merges arbitrary partial state | Actions have no validated preconditions, atomic effects, or audit trail | Critical |
| Seller context | Answers are stored as an optional object | No author, timestamp, revision, claim classification, or downstream rules | Critical |
| Legal judgment | Completing any decision sets only `legalComplete: true` | Issue state, rationale, document position, seller guidance, and specialist work remain unchanged | Critical |
| Forecast | Applying forecast sets only `forecastApplied: true` | Deal header and Commercial Brief retain Commit/Sep 30 while other views show Best case/Oct 15/55% | Critical |
| Provenance | `connectedContext` stores product and detail; UI says "5 sources" | No artifact IDs, excerpts, links, timestamps, authority, freshness, or claim linkage | Critical |
| Documents | Attachment name and Word actions are display-only | No document/version/clause/finding/position model; "Open in Word" has no behavior | High |
| Specialist workflow | A specialist boolean exists; Privacy need is prose | No request, assignee, response, SLA, or dependency state | High |
| Teams | Messages are conditional JSX and analysis completes after 900 ms | Teams is not a channel projection of domain events; delivery cannot be audited | High |
| Leadership | Metrics are literals switched by booleans | No aggregation lineage; numbers look authoritative without derivation | High |
| Training | Completion is one boolean | No assignment, module, learner, evidence, due date, or deal trigger record | High |
| Operations/admin | Static queues and settings; editor Save closes | No operational source, configuration version, audit record, or downstream effect | High |
| Persistence | Unversioned browser JSON is shallowly merged on load | No schema validation, migration, concurrency, user boundary, or recovery | High |
| Testing | No domain or integration test layer | The cross-surface Contoso promise cannot be verified automatically | High |

## 5. Concrete contradictions and disconnected effects

### 5.1 Forecast change

Current effect: set `forecastApplied` to true and conditionally render Best case, Oct 15, 55%, and a higher leadership metric in selected components.

Disconnected evidence:

- `matter.targetClose` remains September 30.
- the lawyer Commercial Brief remains `Commit · Sep 30`;
- the deal header continues to read the static target close;
- leadership's `$184M`/`$202M` total is chosen by a boolean rather than recomputed from opportunities;
- no change reason, author, source, previous value, timestamp, or activity event exists.

### 5.2 Legal decision

Current effect: close the dialog and set `legalComplete` to true.

Missing effects: no `LegalDecision` record, issue transition, selected disposition, rationale, approver, document clause position, draft customer response, specialist dependency, seller task, or activity event. Teams displays a success message because it reads the same boolean.

### 5.3 Seller context

Current effect: copy three answers into `DemoState`; some readiness and legal prose changes.

Missing effects: no immutable submission, answer-level provenance, issue re-evaluation, routing decision, specialist need, forecast recommendation, or analysis revision.

### 5.4 Training completion

Current effect: set a boolean and change a leadership percentage from 64% to 68%.

Missing effects: no training assignment, learner, module version, attempt, completion evidence, timestamp, trigger, or aggregation rule.

### 5.5 Routing administration

Current effect: toggle a boolean and change "Active workflows" between 11 and 12.

Missing effects: no versioned rule, effective date, actor, audit event, evaluation trace, or demonstrated impact on a newly submitted matter.

## 6. Proposed Phase 0 domain contract

The UI must issue commands and read projections. It must not directly mutate cross-surface business state.

### 6.1 Aggregate roots and records

```ts
type DealRoom = {
  id: DealRoomId;
  opportunityId: OpportunityId;
  matterId: MatterId;
  status: DealRoomStatus;
  participantIds: ParticipantId[];
  issueIds: IssueId[];
  documentIds: DocumentId[];
  revision: number;
  createdAt: Instant;
  updatedAt: Instant;
};

type Opportunity = {
  id: OpportunityId;
  accountId: AccountId;
  name: string;
  value: Money;
  products: ProductRef[];
  stage: SalesStage;
  forecast: ForecastPosition;
  targetSignatureDate: LocalDate | null;
  ownerId: ParticipantId;
  sourceRef: SourceRef;
  revision: number;
};

type ForecastPosition = {
  category: ForecastCategory;
  closeDate: LocalDate;
  probability: number;
  reason: string;
  changedBy: ActorRef;
  changedAt: Instant;
  sourceRefs: SourceRef[];
};

type Matter = {
  id: MatterId;
  dealRoomId: DealRoomId;
  request: RequestRecord;
  status: MatterStatus;
  assignedLawyerId: ParticipantId | null;
  specialistRequestIds: SpecialistRequestId[];
  decisionIds: LegalDecisionId[];
  revision: number;
};
```

Supporting first-class records:

- `Participant`, `RoleAssignment`, and `TeamMembership`
- `SellerContextSubmission` with answer-level claim references
- `Document`, `DocumentVersion`, `ClauseFinding`, and `DocumentPosition`
- `Issue`, `Recommendation`, and `LegalDecision`
- `SpecialistRequest` and `SpecialistResponse`
- `TrainingAssignment` and `TrainingCompletion`
- `SourceArtifact`, `Claim`, and `ProvenanceRecord`
- `ActivityEvent`
- `TeamsThread`, `TeamsMessage`, and delivery receipt

All persisted records require stable IDs, timestamps, actor/system identity, schema version, and optimistic revision.

### 6.2 State machines

Matter status:

```text
draft -> submitted -> analyzing -> needs_seller_input
      -> assigned -> in_review -> awaiting_specialist
      -> decision_ready -> resolved -> closed
```

Transitions may skip only when their stated preconditions are satisfied. A separate failure state records analysis or integration failures without pretending completion.

Issue status:

```text
identified -> needs_context | needs_specialist | ready_for_decision
           -> decided -> position_applied -> closed
```

### 6.3 Commands

- `SubmitRequest`
- `CompleteAnalysis`
- `ProvideSellerContext`
- `AssignLawyer`
- `RequestSpecialistInput`
- `RecordSpecialistResponse`
- `RecordLegalDecision`
- `ApplyDocumentPosition`
- `ApplyForecastChange`
- `AssignTraining`
- `CompleteTraining`
- `SendDealRoomMessage`
- `ChangeRoutingRule`

Each command includes a command ID, aggregate ID, expected revision, actor, timestamp, payload, and optional idempotency key. Command handlers validate authorization and state preconditions, then commit all related record changes and events atomically.

### 6.4 Domain events

- `RequestSubmitted`
- `AnalysisCompleted` or `AnalysisFailed`
- `SellerContextRequested` and `SellerContextProvided`
- `IssueIdentified` and `RecommendationProduced`
- `LawyerAssigned`
- `SpecialistInputRequested` and `SpecialistInputReceived`
- `LegalDecisionRecorded`
- `DocumentPositionApplied`
- `ForecastChangeRecommended` and `ForecastChanged`
- `TrainingAssigned` and `TrainingCompleted`
- `RoutingRuleChanged`
- `TeamsNotificationQueued`, `TeamsNotificationDelivered`, or `TeamsNotificationFailed`

Events are immutable audit facts. Projections may be rebuilt from current records plus events; view copy is never the record of an action.

## 7. Proposed provenance contract

The addendum requires system facts, AI synthesis, policy guidance, historical precedent, and seller-provided information to remain distinguishable.

```ts
type ClaimKind =
  | "source_fact"
  | "seller_input"
  | "ai_synthesis"
  | "policy_guidance"
  | "historical_precedent"
  | "human_decision";

type Claim = {
  id: ClaimId;
  subject: EntityRef;
  fieldOrTopic: string;
  value: JsonValue;
  kind: ClaimKind;
  sourceRefs: SourceRef[];
  derivedFromClaimIds: ClaimId[];
  assertedBy: ActorRef;
  assertedAt: Instant;
  confidence: number | null;
  verification: "unverified" | "system_verified" | "human_verified" | "superseded";
  supersededByClaimId: ClaimId | null;
};

type SourceArtifact = {
  id: SourceId;
  system: "dynamics" | "teams" | "outlook" | "sharepoint" | "word" | "playbook" | "prior_matter";
  externalId: string;
  title: string;
  deepLink: string | null;
  capturedAt: Instant;
  sourceUpdatedAt: Instant | null;
  excerpt: string | null;
  contentHash: string | null;
  accessStatus: "available" | "restricted" | "missing";
};
```

Required display behavior:

- every important factual value can reveal its source and freshness;
- AI synthesis exposes the facts it derived from and is never styled as a source fact;
- policy guidance exposes playbook identity and version;
- precedent exposes the comparable-matter cohort and redaction-safe basis;
- human decisions expose the decision maker, time, rationale, and superseded recommendation;
- unavailable sources remain visible as unavailable rather than silently disappearing.

## 8. Projection contracts by experience

| Experience | Projection must answer | Authoritative inputs |
|---|---|---|
| Teams | What happened, what is needed, and where to act | Events, tasks, delivery state, deep links |
| Seller | What is blocking the deal and what should I do now? | Opportunity, issues, seller requests, decisions, forecast |
| Lawyer | Why does the deal matter and what judgment is required? | Commercial brief claims, issues, playbooks, precedent, documents |
| Specialist | What input is requested, by when, and what evidence supports it? | Specialist request, issue, claims, document excerpts, SLA |
| Document | What changed, why, and which approved position applies? | Document versions, findings, decisions, positions, sources |
| Leadership | What moved and why, with drill-down lineage? | Aggregations over opportunity changes, matters, training, events |
| Operations/admin | Is the service healthy and which configuration caused this outcome? | Integration health, queues, rule versions, evaluation traces, audit events |

Selectors should compute these projections from shared records. They should not contain alternate copies of business facts.

## 9. Contoso golden scenario

The following sequence is the minimum end-to-end acceptance path. Every step must be observable through records and events, not only through changed copy.

1. Maya submits the Contoso agreement in Teams. A request, deal room, document version, source artifact, Teams thread, and `RequestSubmitted` event share stable references.
2. Analysis records findings and claims with source excerpts. It identifies AI liability and residency issues, requests missing seller context, and emits `AnalysisCompleted`.
3. Maya provides hosting, liability-driver, and signature-condition answers. A versioned seller submission creates seller-input claims and triggers issue re-evaluation.
4. Routing assigns Priya based on the active, versioned rule and records the rule evaluation that produced the assignment.
5. Priya sees a Commercial Brief assembled from the same opportunity and claims visible to Maya, including source type and freshness.
6. Priya requests Privacy input on residency. A specialist request appears in the specialist queue and the matter moves to `awaiting_specialist`.
7. The specialist responds with a sourced position. The response updates the issue to `ready_for_decision` and notifies Priya.
8. Priya records the liability fallback and residency decision. Decision records update issue state, document positions, activity, and seller-facing guidance.
9. The approved document position is applied to a specific document version. The resulting draft and provenance remain traceable to decisions and playbooks.
10. Maya accepts a forecast recommendation changing Commit/Sep 30/75% to Best case/Oct 15/55%. One forecast record changes; every surface reads that record.
11. Teams receives auditable status notifications with deep links. Delivery failure does not change domain completion.
12. Leadership totals recompute from the changed opportunity and disclose Contoso as lineage. Training metrics change only from actual completion records.

### Golden-scenario invariants

- There is one current forecast position for Contoso.
- Every UI surface resolves the same matter, opportunity, issue, and participant IDs.
- No completed action lacks actor, timestamp, previous state, new state, and causal event.
- No material legal or commercial claim lacks provenance classification.
- Notification delivery and business completion are separate states.
- Replaying a command with the same idempotency key creates no duplicate action.

## 10. Phase 0 freeze rules

Until review approval:

- do not add new screens, personas, dashboards, or conditional success copy;
- do not add another boolean to simulate a business outcome;
- do not duplicate Contoso facts in view components;
- do not let a component directly perform cross-surface business mutation;
- do not imply integration, source verification, auditability, or delivery when only mock data exists;
- preserve present layouts and useful Fluent components unless a contract cannot be expressed through them.

Allowed Phase 0 work after contract approval:

- extract and type fixture data without changing appearance;
- add versioned schemas, commands, events, selectors, and reducer tests;
- add a deterministic Contoso seed and golden-scenario test harness;
- add explicit mock/source labels where the current prototype overstates trust.

## 11. Provisional phased implementation plan

This plan cannot be certified as aligned to the missing architecture addendum's Section 12. It is proposed for review from the requested priorities and must be replaced or reconciled when the intended document is available.

### Phase 0 — Freeze, audit, and establish contracts

Approve the architecture, domain vocabulary, state machines, command/event contracts, provenance model, Contoso scenario, and test boundaries. Create schemas and contract tests only after review.

### Phase 1 — Shared causal state spine

Introduce a typed domain store, command handlers, atomic reducer, immutable activity events, schema-versioned persistence, migrations, and selectors. Migrate Contoso without visual redesign.

### Phase 2 — Sources, claims, and document truth

Implement source artifacts, claim lineage, playbook versions, document versions, findings, and honest mock/integration status. Make lawyer evidence and Commercial Brief provenance functional.

### Phase 3 — Contoso vertical slice

Implement request, analysis, seller context, lawyer assignment, legal decision, forecast change, Teams notifications, and leadership recomputation end to end using the shared contracts.

### Phase 4 — Specialist and document collaboration

Implement specialist requests/responses, document-position application, dependencies, SLAs, and cross-persona tasks.

### Phase 5 — Portfolio and operational projections

Replace leadership, training, quality, service, and admin literals with derived projections, rule evaluation traces, and audit views.

### Phase 6 — Integration and production hardening

Add authorized adapters for Microsoft 365 and Dynamics, server-side persistence, concurrency, retry/idempotency, observability, permissions, privacy controls, failure recovery, and end-to-end testing.

## 12. Phase 0 exit criteria

Phase 0 is complete only when reviewers approve:

- the canonical specification or an explicit reconciliation of the supplied document mismatch;
- aggregate boundaries and entity vocabulary;
- matter and issue state machines;
- command, event, and idempotency contracts;
- provenance classifications and minimum source fields;
- projection ownership for every experience;
- the full Contoso golden scenario and invariants;
- persistence, migration, authorization, and integration boundaries;
- automated contract and golden-scenario test expectations;
- the reconciled phased plan.

## 13. Review decisions required

1. Supply the intended **Functional Vision & Architecture Addendum**, or approve this document as the interim architecture baseline.
2. Confirm whether the Deal Room or Matter is the transaction boundary for atomic changes; this proposal uses Deal Room as the coordinating aggregate and separate revisioned records for high-contention entities.
3. Confirm whether forecast changes are applied directly by CPS or remain recommendations requiring seller/Revenue Operations acceptance; this proposal models recommendation and acceptance separately.
4. Confirm which source systems are mocked versus genuinely integrated in the next phase so the UI can label provenance honestly.

