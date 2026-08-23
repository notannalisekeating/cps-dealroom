# CPS Deal Room PRD Traceability

## Status definitions

- Implemented: functional UI and shared state exist in the prototype.
- Partial: meaningful UI exists, but integration or breadth remains simulated.
- Pending: not yet implemented.
- Verified: exercised in the production build and browser interaction pass.

## Requirement matrix

| ID | Requirement | Source | Persona | Destination | Screen / component | Required data | User action | Expected state change | Downstream effects | Status | Gap | Priority | Verification |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| BUS-01 | Show deal status, legal activity, next action, owner, and expected update | Refresh PRD; Addendum 1, 4, 5 | Seller | My deals | Deal overview | Matter, owner, timing | Open deal | None | Shared matter context | Implemented | Live integrations simulated | P0 | Verified 2026-08-23 |
| BUS-02 | Humanize named CPS partner | Addendum 4-7 | Seller | Overview | Your CPS partner | Person, expertise, presence | View partner | None | Relationship context | Implemented | Profile data simulated | P1 | Verified 2026-08-23 |
| BUS-03 | Message CPS partner without auto-send | Addendum 6 | Seller | Overview | Partner dialog | Matter and recipient | Create Teams draft | Draft only | Teams entry point | Implemented | External Teams handoff simulated | P0 | Verified 2026-08-23 |
| BUS-04 | Show risks, seller action, legal detail, and what not to promise | Addendum 2, 9 | Seller | Overview | Deal impact accordions | Legal issues | Expand issue | Disclosure state | None | Implemented | None | P0 | Verified 2026-08-23 |
| BUS-05 | MEDDPICC and Command of the Message coaching | Addendum 10; conversation | Seller | Overview / Coaching | Deal coaching | Opportunity and matter signals | Expand coaching | Disclosure state | Training recommendation | Implemented | Broader scenario library is P2 | P0 | Verified 2026-08-23 |
| BUS-06 | Contextual training tied to current deal | Conversation requirement | Seller | Coaching | Training workspace | Issue, playbook, opportunity | Complete practice | Training complete | Legal readiness and Leadership adoption update | Implemented | LMS persistence simulated | P0 | Verified 2026-08-23 |
| BUS-07 | Training progress and recommendations | Conversation requirement | Seller | Coaching | Training workspace | Progress and assignments | Complete / expand | Progress changes | Leadership metric update | Implemented | Multi-module progress simulated | P1 | Verified 2026-08-23 |
| BUS-08 | Forecast category, date, probability, value, and reason | Conversation requirement | Seller | Forecast | Forecast workspace | Forecast fields and signals | Review recommendation | Dialog opens | None until confirmed | Implemented | CRM data simulated | P0 | Verified 2026-08-23 |
| BUS-09 | Confirm before applying forecast change | Conversation requirement | Seller | Forecast | Forecast dialog | Proposed change | Apply or cancel | Forecast fields change | Leadership and audit update | Implemented | Dynamics writeback simulated | P0 | Verified 2026-08-23 |
| BUS-10 | Forecast history and attribution | Conversation requirement | Seller | Forecast | Audit disclosure | Changes and actors | Expand history | Disclosure state | Shared audit context | Implemented | Persistent audit store simulated | P1 | Verified 2026-08-23 |
| BUS-11 | Documents, activity, people, and organization | Refresh PRD; Addendum 8 | Seller | Deal tabs | Documents, Activity, People | Files, events, people | Change tabs / view org | Tab and disclosure state | Shared context | Implemented | Files are prototype records | P1 | Verified 2026-08-23 |
| BUS-12 | Readiness conclusions with sources behind disclosure | Addendum 9, 13 | Seller | Overview | Deal readiness | Conclusions and citations | Expand | Disclosure state | None | Implemented | Direct deep links simulated | P1 | Verified 2026-08-23 |
| LEG-01 | Prioritized matter queue | Prompt Phase F; conversation | Legal | My queue | Legal queue | Priority, due time, status | Open queue row | Selected matter | Matter workspace | Implemented | Multiple matter detail routes simulated | P0 | Verified 2026-08-23 |
| LEG-02 | Explain why deal matters commercially | Addendum 11 | Legal | Matter workspace | Why this deal matters | Value, use case, event, forecast | Open matter | None | Decision context | Implemented | None | P0 | Verified 2026-08-23 |
| LEG-03 | Synthesized commercial brief | Addendum 11 | Legal | Matter workspace | Commercial brief | Product, value, forecast, objective, competition | Expand brief | Disclosure state | None | Implemented | CRM connection simulated | P0 | Verified 2026-08-23 |
| LEG-04 | Explain issue, significance, playbook, posture, and decision | Addendum 12 | Legal | Matter workspace | Legal issue detail | Issue and guidance | Expand issue | Disclosure state | Decision path | Implemented | None | P0 | Verified 2026-08-23 |
| LEG-05 | Sources, citations, precedent, and comparable matters | Addendum 13 | Legal | Matter / Playbooks | Evidence disclosure | Source records | Expand evidence | Disclosure state | Verifiability | Implemented | Deep source navigation simulated | P0 | Verified 2026-08-23 |
| LEG-06 | Decision updates Seller and Teams | Refresh journey | Legal | Matter workspace | Decision dialog | Recommendation and actor | Confirm decision | Legal complete | Seller and Teams status update | Implemented | Persistence simulated | P0 | Verified 2026-08-23 |
| LEG-07 | Show business partner and org context | Addendum 7, 8 | Legal | Matter workspace | Your business partner | Seller and organization | View org | Disclosure state | None | Implemented | None | P1 | Verified 2026-08-23 |
| LEG-08 | Show seller training readiness | Conversation requirement | Legal | Matter workspace | Business readiness | Training state | View matter | None | Shared coaching context | Implemented | Assignment action is P2 | P1 | Verified 2026-08-23 |
| LDR-01 | Decision-ready portfolio value and risk | Prompt Phase J | Leadership | Intelligence / Portfolio | Metrics and portfolio | Matters and forecast | Filter / drill down | View state | Supporting deals | Implemented | Aggregates simulated | P0 | Verified 2026-08-23 |
| LDR-02 | Forecast changes influenced by legal signals | Conversation requirement | Leadership | Intelligence / Portfolio | Forecast insight | Forecast audit and legal signals | Open supporting deals | Drill-down state | Underlying matter shown | Implemented | Multi-deal history simulated | P0 | Verified 2026-08-23 |
| LDR-03 | Training gaps and coaching outcomes | Conversation requirement | Leadership | Intelligence | Coaching insight | Completion and cycle data | View coaching gaps | Drill-down state | Recommended action shown | Implemented | Cohort analytics simulated | P1 | Verified 2026-08-23 |
| LDR-04 | Movement by category, region, segment, product | Conversation requirement | Leadership | Intelligence | Filters | Portfolio dimensions | Change filter | Filter state | Metrics scoped | Partial | Filters are prototype controls | P1 | Verified 2026-08-23 |
| OPS-01 | Service and integration health | Prompt Phase J | Operations | Service health | Service table | Component status | Expand incident | Disclosure state | Incident context | Implemented | Monitoring feed simulated | P0 | Verified 2026-08-23 |
| OPS-02 | Intake, routing, workload, and SLA health | Conversation requirement | Operations | Request operations | Operations workspace | Queue and SLA | Open row | Detail selection | Affected requests | Partial | Row drill-down depth is limited | P1 | Verified 2026-08-23 |
| OPS-03 | AI quality, escalation, workflow failures, safe mode | Prompt Phase J | Operations | Service health / Quality | Diagnostics | Quality telemetry | Expand diagnostics | Disclosure state | Quality review | Implemented | Telemetry simulated | P1 | Verified 2026-08-23 |
| ADM-01 | Routing rules with confirmation and audit | Conversation requirement | Administration | Settings | Routing control | Rule and scope | Enable / disable | Rule changes | Active workflow count and audit update | Implemented | Backend rule engine simulated | P0 | Verified 2026-08-23 |
| ADM-02 | Training assignment rules | Conversation requirement | Administration | Settings | Assignment rule | Trigger and module | Review rule | None | Seller assignment behavior | Partial | Editing is P2 | P1 | Verified 2026-08-23 |
| ADM-03 | Forecast mapping and synchronization | Conversation requirement | Administration | Settings | Forecast mapping | CRM field mapping | Review mapping | None | Seller and Leadership fields | Partial | Mapping editor is P2 | P1 | Verified 2026-08-23 |
| ADM-04 | Roles, integrations, notifications, playbook lifecycle, quality queue | Conversation requirement | Administration | Settings / Quality / Playbooks | Admin destinations | Configuration data | Navigate / inspect | View state | Operational governance | Partial | Full editors are P2 | P1 | Verified 2026-08-23 |
| TMS-01 | Normal, lived-in employee Teams environment | Corrective pass; conversation | Teams | Chat | Teams shell | Chats, channels, apps | Navigate | Selection / disclosure state | CPS remains one destination | Implemented | Exact Teams parity not intended | P0 | Verified 2026-08-23 |
| TMS-02 | Unread, Channels, Chats, Meeting chats filters | Conversation requirement | Teams | Chat | Filter tabs | Chat categories | Select filter | Filter state | List label/content changes | Implemented | Full filtering dataset simulated | P1 | Verified 2026-08-23 |
| TMS-03 | Collapsible Quick views, Favorites, Chats, Teams and channels, Communities | Conversation requirement | Teams | Chat | Navigation groups | Employee workspace items | Expand / collapse | Disclosure state | None | Implemented | None | P1 | Verified 2026-08-23 |
| TMS-04 | Commercial channels, ERGs, and unrelated employee conversations | Conversation requirement | Teams | Chat | Navigation list | Sample workspace data | Inspect / navigate | Selection state | None | Implemented | Channel conversations are P2 | P1 | Verified 2026-08-23 |
| TMS-05 | Calendar, Calls, OneDrive, and Apps rail | Conversation requirement | Teams | App rail | Microsoft apps | App destinations | Select app | Destination state | App gallery where supported | Partial | Calendar/call surfaces are decorative | P2 | Verified 2026-08-23 |
| TMS-06 | Request to analysis to seller input to lawyer decision to Teams update | Refresh journey | Teams and Deal Room | Ask CPS | Shared workflow | Matter lifecycle | Complete workflow | Shared matter state changes | All personas update | Implemented | Persistence simulated | P0 | Verified 2026-08-23 |
| SHR-01 | Shared structured matter state across personas | Conversation requirement | All | All | DemoState and matter model | Seller, legal, training, forecast, admin state | Perform workflow actions | Shared state changes | Relevant persona views update | Implemented | Server persistence is out of prototype scope | P0 | Verified 2026-08-23 |
| VIS-01 | Fluent, quiet, work-focused UI with progressive disclosure | All guides | All | All | Global shell and screens | Design tokens and hierarchy | Use app | UI states | None | Implemented | Final responsive audit pending | P0 | Verified 2026-08-23 |

## Screen and navigation inventory

### Seller / Business

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| Home | Prioritize seller work | Three deals need attention; confirm Contoso timing | Confirm timing | Review other deals, Ask CPS | Attention list and active-deal summary | Full deal table | Deal status and next action |
| Deal overview | Understand legal progress | Priya is reviewing; confirm whether residency blocks signature | Answer Priya | Message partner, inspect risks | Owner, timing, current focus, next action | Risk detail, readiness, sources, history | Matter, seller answers, legal decision |
| Coaching | Prepare for current customer conversation | Complete the AI-risk practice before the next call | Complete guided practice | View additional learning | Contextual module and call question | Additional modules | Training completion and readiness |
| Forecast | Govern forecast movement | Legal signals make Commit less supportable | Review forecast change | Inspect signals and history | Current versus recommended forecast | Audit history | Forecast state and legal signals |
| Documents / Activity / People | Inspect supporting context | Relevant records and collaborators are connected | Open item / view org | Change tab | Focused lists | Organization chain | Matter context |

### Legal / Lawyer

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| My queue | Prioritize lawyer work | Four matters need attention; two are due today | Open highest-priority matter | Review other matters | Priority, issue, due time | Matter detail | Queue and matter state |
| Matter workspace | Make a legal decision in commercial context | German agreement matters; two decisions affect timing | Review issue | Open brief, evidence, partner org | Commercial importance and decisions | Brief, playbooks, precedent, citations | Seller answers, training, forecast, decision |
| Playbooks | Verify approved positions | Two playbooks may need review | Open playbook | Inspect version | Active guidance list | Source detail | Playbook metadata |

### Leadership

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| Intelligence | Decide where to intervene | Legal signals moved forecast and training gaps add cycles | View supporting deals | Filter, inspect coaching gaps | Outcome metrics and changed-this-week insights | Supporting deals and gap detail | Forecast, training, portfolio aggregates |
| Portfolio | Review commercial exposure | CPS attention is concentrated in forecast-influenced deals | Open Contoso | Inspect cohorts | Value, forecast influence, risk | Supporting matter | Shared forecast state |
| Trends | Identify recurring friction | AI data use and residency demand are rising | Review trend | Compare topics | Demand metrics and trend rows | Future cohort detail | Aggregate request data |

### Operations

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| Service health | Trust current service | Systems are operational | Inspect incident | Open diagnostics | Service status and incident summary | Incident and quality diagnostics | Operational telemetry |
| Request operations | Manage queues and SLA | Seven requests are unassigned; 91% are in target | Open queue | Inspect service line | Workload and SLA metrics | Affected requests (limited prototype) | Routing and request state |
| Quality review | Review weak outputs | Three sampled outputs need follow-up | Open review | Inspect source issue | Review metrics and queue | Detailed review (limited prototype) | Quality state |

### Administration

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| Settings | Govern CPS behavior | One routing rule can be changed; systems are connected | Enable or disable routing | Review mappings and rules | Rule, mapping, assignment, connections | Audit history | Routing, training assignment, forecast mapping |

### Microsoft Teams / Ask CPS

| Screen | Purpose | First-five-second answer | Primary action | Secondary actions | Initially visible | Progressive disclosure | Shared data |
|---|---|---|---|---|---|---|---|
| Teams chat shell | Work in a normal employee environment | Chats, channels, communities, and apps are available | Open Ask CPS | Filter chats, expand groups, choose apps | Employee navigation and active CPS conversation | Collapsible groups | Teams selection state |
| Ask CPS | Start and follow legal work | Send the agreement; CPS will identify what needs attention | Send request / answer questions | Open Deal Room, timing detail | Request, attachment, CPS response | Timing and seller questions | Matter lifecycle and legal decision |

## Assumptions

1. Dynamics 365 represents the CRM/forecast system named generically as Salesforce in conversation; the prototype models field synchronization without external writes.
2. Training is contextual enablement attached to the current deal, not a standalone LMS.
3. Operations and Administration are separate navigation concerns within the Operations persona.
4. External Microsoft 365, CRM, source-link, and persistence behavior is simulated locally.
5. P2 configuration editors and broad multi-record datasets are not required to validate the core corrective workflows.

## Verification results

Verified on 2026-08-23:

- Production build, type checking, and static export pass.
- Teams chat filters and navigation-group collapsibles respond correctly.
- Business, Legal, Leadership, Operations, and Administration navigation destinations render distinct screens.
- Seller training completion updates the Seller coaching screen, Legal business-readiness panel, and Leadership coaching metric.
- Seller forecast review requires confirmation, records attribution, and updates Leadership Portfolio and Intelligence.
- Administration routing changes require confirmation and update workflow count, status, and audit history.
- Legal evidence, decision, commercial brief, partner context, and progressive disclosure render correctly.
- Desktop viewport checked at 1440 by 1000 with no document-level horizontal overflow.
- Mobile viewport checked at 390 by 844 with no document-level horizontal overflow.

## Remaining P2 scope

- Live Microsoft 365, Dynamics 365, CRM, LMS, source-deep-link, monitoring, and persistence integrations.
- Full channel, Calendar, Calls, and OneDrive destination experiences inside the Teams simulation.
- Broad multi-deal datasets and production cohort analytics.
- Full editors for forecast mappings, training assignment rules, playbook lifecycle, notifications, roles, and access.
- Server-backed audit records and multi-user concurrency.

The corrective prototype is ready for stakeholder review. It should not be described as production-ready or advanced to integration-focused Phase 3 until the remaining external-system assumptions are approved.
