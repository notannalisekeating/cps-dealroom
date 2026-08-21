# CPS Deal Room --- UI/UX Implementation Addendum

## Core Design Principle

The new information is valuable, but **do not respond by making the
product denser**.

> **Show me the conclusion first. Let me progressively reveal the
> evidence, reasoning, people, and source material when I need it.**

## 1. Preserve Low Cognitive Load Across All New Features

The additional commercial intelligence, MEDDPICC coaching, precedent,
playbooks, citations, people data, and lawyer information **must not
result in dashboard overload**.

Use progressive disclosure aggressively.

At the default state, every page should answer approximately **3--5
questions**, not expose every field the system knows.

For example, the Seller Deal Room should initially tell me:

-   **Where are we?** Legal review in progress · Expected response
    tomorrow
-   **What matters?** 2 issues could affect timing
-   **What should I do?** 2 actions could strengthen the deal
-   **Who has it?** Priya Shah · Senior Corporate Counsel

Everything else can be expanded.

Use collapsible Fluent-style sections for Deal coaching, Commercial
context, Why this matters, Legal issues, MEDDPICC / deal health details,
Applied playbooks, Precedent, Sources, Connected systems,
Relationship/org details, and Historical activity.

**Do not make every individual field a card.** Prefer clean typography,
whitespace, subtle dividers, compact rows, disclosure chevrons, and
nested detail.

> **The user should understand the screen without someone explaining it
> during the demo.**

## 2. Make the Teams Shell Feel Lived-In

An empty or sparsely populated Teams shell makes the prototype feel
synthetic. The Teams simulation should look like someone opened Teams
during a normal workday.

### Chat Sidebar

Populate the Chats area with realistic examples:

-   **Priya Shah** --- *I'll take a look this afternoon.*
-   **Jordan Lee** --- *Great --- I'll update the forecast.*
-   **Maya Chen** --- *Customer call moved to 3:30.*
-   **EMEA AI Deal Team** --- *Alex: added the latest architecture...*
-   **CPS Deal Room** --- *Contoso review is now in progress.*
-   **Sarah Kim** --- *Thanks!*
-   **Contoso pursuit team** --- *2 new messages*
-   **Daniel Okafor** --- *Can we sync tomorrow?*

Add presence indicators, timestamps, unread states, avatars, and
occasional notification counts where appropriate.

**Do not make every chat about CPS or the demo deal.**

### Teams and Channels

Populate realistic teams:

**EMEA Enterprise Sales** - General - AI & Cloud - Deal strategy - Wins
& learnings

**Contoso Account Team** - General - Customer strategy - Technical -
Commercial & Legal

**AI Strategic Deals** - General - Field updates - Competitive intel

**CPS Deal Room** - General - Deal support - Announcements

**Commercial Sales Community** - General - Contracting tips - Ask CPS

Only a few need to be expanded at once. The objective is environmental
realism, not another navigation problem.

## 3. CPS Deal Room Should Appear as a Real Microsoft App

Include **CPS Deal Room** in the Teams left app rail alongside normal
Microsoft apps. Give it a restrained Microsoft-style app icon rather
than a startup-looking logo.

Plausible entry paths:

1.  **Teams conversation → CPS response → View deal**
2.  **Teams app rail → CPS Deal Room**
3.  **Microsoft 365 app launcher → CPS Deal Room**

These paths can converge on the same application state. The experience
should create the impression that CPS Deal Room is simply **part of the
Microsoft 365 work surface**.

## 4. Seller: Add a Prominent "Your CPS Partner" Component

Once a lawyer is assigned, the seller should never wonder: **Who has my
deal?**

Do not simply show "Assigned: Priya Shah." Humanize the lawyer.

### Example

#### Your CPS partner

**\[Priya avatar\] Priya Shah**\
Senior Corporate Counsel · Cloud + AI

**Reviewing your deal**

Priya primarily supports strategic Azure and AI transactions across
enterprise accounts.

**Location:** New York\
**Contact:** Available on Teams

**A little about Priya**\
Former competitive swimmer. Will argue that New York has better bagels
than anywhere else.

**Message Priya** · **View profile**

Use Fluent icons rather than emoji. Keep the fun fact subtle.

## 5. Tell the Seller What the Lawyer Is Actually Doing

Instead of "Legal review in progress," show meaningful activity.

#### Priya is reviewing your deal

**Priya Shah** · Senior Corporate Counsel\
Cloud + AI · New York

**Current focus:** Reviewing Contoso's requested AI liability position
against Microsoft's enterprise AI contracting guidance and comparable
strategic deals.

**Next step:** Priya is reviewing the liability language. Privacy input
has also been requested on data residency.

**Expected update:** Tomorrow by 2:00 PM

Then provide a collapsed **About Priya ›** section.

The seller should feel: *Priya has it. She knows AI deals. She's
reviewing this specific thing. I know what she's doing. I know when I'll
hear back.*

The seller should not feel: *My ticket disappeared into Legal.*

## 6. Add Explicit Relationship-Building Interactions

Give the seller **Message Priya in Teams**. Clicking it should open a
realistic Teams composer/thread related to the matter, but **must not
automatically send a message**.

When CPS needs seller input, make the relationship visible.

Instead of "Missing field: residency_requirement," show:

#### Priya needs your input

Does the customer consider Germany-only residency a signature
requirement?

**Answer Priya**

This should feel like collaboration with a colleague rather than
completion of an intake form.

## 7. Give the Lawyer the Reciprocal People View

When the lawyer opens Contoso, immediately identify the business
partner.

#### Your business partner

**\[Maya avatar\] Maya Chen**\
Account Executive · EMEA Enterprise --- Manufacturing\
London

**Account owner · Contoso**

Maya has owned the Contoso relationship for 2.4 years and is leading the
current Azure AI expansion.

**Manager:** Jordan Lee · Sales Director\
**Senior leader:** Elena Rodriguez · VP EMEA Enterprise

**Last customer interaction:** Aug 18\
**Next customer meeting:** Aug 21 · 3:30 PM

**Message Maya** · **View org**

The product should communicate:

> **These aren't intake submitters and legal reviewers. They're
> colleagues working on the same outcome.**

## 8. Expand the People Tab

For each relevant person, include:

-   Photo or avatar
-   Full name
-   Role/title
-   Department
-   Business unit
-   Email
-   Phone number where appropriate
-   Office/location
-   Manager
-   Senior leader
-   Org hierarchy
-   Relationship to the matter
-   Account/deal responsibility
-   Relevant subject-matter expertise
-   Teams presence/status where appropriate

Provide an easy **View org** interaction that reveals the reporting
chain without overwhelming the default screen. Use progressive
disclosure.

## 9. Replace Seller "Connected Context" With Something More Useful

A seller does not need a list saying Outlook, Teams, SharePoint,
Dynamics 365, and Word. The seller cares about what those systems
collectively tell them about **their deal**.

Replace it with **Deal Readiness** or **What CPS Knows About Your
Deal**.

Potential default content:

-   **Close plan:** Target signature September 30
-   **Customer urgency:** Customer wants deployment before its Q4 AI
    rollout
-   **Executive sponsorship:** Executive sponsor identified and engaged
-   **Commercial risk:** Competitor remains active in the account
-   **Legal readiness:** 2 decisions may affect timing
-   **Missing context:** Seller confirmation needed on whether
    Germany-only residency is a signature requirement

Then allow **View source context ›**. Only there should Outlook, Teams,
Dynamics, SharePoint, Word, etc. appear.

> **The insight should be primary. The plumbing should be secondary.**

## 10. Strengthen Seller Coaching With MEDDPICC + Command of the Message

Seller coaching should not consist of generic legal intake questions.
Coach the seller using enterprise-selling mental models, including
MEDDPICC and Command of the Message where relevant, without turning the
interface into a checklist.

### Example: Confirm Whether Residency Is Tied to the Compelling Event

CPS needs to understand whether Germany-only residency is a stated
procurement requirement, security preference, requirement from the
Economic Buyer, connected to the deployment deadline, or a condition
that could stop signature.

**Why this matters:** If residency is tied to the customer's compelling
event or decision criteria, CPS may need to treat it differently than a
negotiable preference.

**Suggested customer question:**\
"If we can satisfy the security objective another way, is Germany-only
hosting still required for signature?"

**MEDDPICC signal:** Decision Criteria · Compelling Event

### Example: Understand Who Owns the Liability Position

Determine who introduced the position, whether that person has authority
over the decision, whether the Economic Buyer endorsed it, whether it is
a standard procurement ask, and what business outcome they are trying to
protect.

**Why this matters:** CPS may have more room to structure an alternative
if the request is a negotiating position rather than a true decision
criterion.

**MEDDPICC signal:** Economic Buyer · Decision Process · Paper Process

The coaching should help the seller **sell better**, not teach them to
become a lawyer.

## 11. Lawyer Commercial Context Must Explain Why the Deal Matters

The lawyer's commercial context should answer:

> **Why should I care about this matter, and what commercial reality
> should shape my legal judgment?**

Build a synthesized Commercial Brief resembling an intelligent
Dynamics/Salesforce opportunity record.

Include:

-   Deal name
-   Commercial value / TCV
-   Motion: strategic expansion vs. net-new
-   Products
-   Forecast
-   Target signature
-   Business mandate
-   Customer objective
-   Primary use cases and pain points
-   Compelling event
-   Competitive situation
-   Biggest risk to close
-   Consequence if the deal slips or fails
-   Commercial team
-   Seller
-   Frontline manager
-   Senior leader
-   Relevant specialists

This should give the lawyer enough context to understand **how to
exercise judgment**, not merely what contract is being reviewed.

## 12. Legal Issues Must Explain Why Judgment Is Required

Each issue should answer:

1.  What is the customer asking for?
2.  Why does it matter in this deal?
3.  What guidance/playbook has already been applied?
4.  Where does the request fall outside the standard position?
5.  What have we done in comparable matters?
6.  What is CPS's current risk posture?
7.  What decision does this lawyer actually need to make?

### Example: AI Liability

**Outside standard position · Material**

**Why you're seeing this:** The Contoso paper requests deployment-wide
indemnification for claims arising from generative AI outputs. The
standard Enterprise AI Liability Playbook was applied automatically. The
request exceeds the approved fallback position.

**Why it matters commercially:** Contoso has positioned the issue as
important to its AI governance team, but the account team has not yet
confirmed whether it is a signature requirement. The deal is an \$18.4M
strategic Azure AI expansion targeted for September 30.

**Playbook applied:** Enterprise AI Liability Playbook v4.2

**CPS risk position:** Material, manageable with approved fallback.

**Prior approach:** 3 comparable strategic enterprise matters were
resolved without accepting deployment-wide indemnification.

**Decision needed:** Determine whether the approved fallback is
appropriate given the strategic value and commercial context of the
deal, or whether additional escalation is warranted.

**Review issue** · **Open in Word**

Allow deeper precedent and source material to expand beneath it.

## 13. Add Direct Sources and Citations for Lawyers

Lawyers should be able to verify why the system is telling them
something.

Do not make the primary interface a wall of citations. Provide subtle
indicators such as **3 sources** or **View evidence**.

Expanded sources can include:

-   **Dynamics 365 opportunity** --- Contoso Azure AI Expansion ·
    Updated Aug 20
-   **Teams · #contoso-deal** --- Maya Chen · Aug 19
-   **Outlook** --- Subject: Contoso AI governance requirements · Aug 18
-   **Enterprise AI Liability Playbook v4.2** --- Section 3.1 · Output
    indemnification
-   **Prior matter** --- Fabrikam Strategic AI Expansion · Closed May
    2026

Where appropriate, clicking a source should simulate opening the
corresponding Microsoft 365 artifact.

Distinguish between:

-   Facts sourced from systems
-   AI-generated synthesis
-   CPS policy/playbook guidance
-   Historical precedent
-   Seller-provided information

## 14. Persona-Specific Information Hierarchy

The Seller and Lawyer experiences should not be two versions of the same
deal dashboard.

### Seller --- First Glance

1.  **Deal status**
2.  **What happens next**
3.  **Who has it**
4.  **What I should do**

Then progressively disclose Deal coaching, Commercial risk, Deal
readiness, Legal detail, and Source context.

### Lawyer --- First Glance

1.  **Why this deal matters**
2.  **What needs my judgment**
3.  **Who I'm helping**
4.  **CPS recommendation**

Then progressively disclose Commercial context, Playbook, Risk
reasoning, Precedent, Sources, People/org, and Raw artifacts.

## 15. Preserve Depth Without Creating Density

Avoid excessive cards, excessive borders, dashboard tile overload, giant
blocks of AI-generated prose, repeated deal metadata, unnecessary
source-system names, exposing every backend field, making every insight
visually equal, and huge amounts of always-expanded content.

Prefer strong hierarchy, whitespace, Fluent typography, subtle
separators, compact metadata, disclosure chevrons, expandable sections,
inline source counts, clear action buttons, human language, and short
synthesized conclusions.

> **Depth should exist behind the interface, not on top of it.**

# Required Codex Self-Review After Implementation

> After implementing these changes, review every primary Seller and
> Lawyer screen at 1440px desktop width.
>
> For each screen, identify what a first-time user will perceive in the
> first five seconds.
>
> There should be one dominant answer to: **"What is happening and what
> do I need to do?"**
>
> Collapse or demote secondary information that competes with that
> answer.
>
> Specifically audit for excessive cards, excessive borders, repeated
> metadata, unnecessary labels, long AI-generated prose, duplicate
> information, sections that should be collapsed, and information shown
> merely because the system has it rather than because the user needs
> it.
>
> Do not remove depth. **Move depth behind progressive disclosure.**
>
> Then review the Teams shell separately for realism. It should look
> like a normal employee's active Microsoft Teams environment in which
> CPS Deal Room happens to exist --- **not a demo environment
> constructed entirely around CPS.**
>
> Finally, review the application as though you were a Microsoft
> employee seeing it for the first time. Identify and fix anything that
> visually or behaviorally makes CPS Deal Room feel like an external
> startup product, a generic AI dashboard, or a prototype rather than a
> plausible first-party Microsoft 365 experience.

# Product Principle

CPS Deal Room should not merely make Legal faster.

It should make the **relationship between Legal and the business
better**.

The product should reinforce that sellers and lawyers are not intake
submitters and ticket reviewers. They are colleagues working toward the
same commercial outcome.

The experience should combine:

**commercial intelligence + legal judgment + workflow orchestration +
relationship context**

without making the user feel like they are operating a complex legal
system.

The intended reaction is:

> **"This feels like something Microsoft could already have
> internally."**
