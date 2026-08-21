"use client";

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  FluentProvider,
  Input,
  ProgressBar,
  Radio,
  RadioGroup,
  SSRProvider,
  Spinner,
  Textarea,
  Tooltip,
  webLightTheme,
} from "@fluentui/react-components";
import {
  Add20Regular,
  Apps20Regular,
  ArrowLeft20Regular,
  Attach20Regular,
  Bot20Regular,
  CalendarLtr20Regular,
  Checkmark16Regular,
  CheckmarkCircle20Filled,
  ChevronRight20Regular,
  Document20Regular,
  Gavel20Regular,
  Home20Regular,
  Info20Regular,
  MoreHorizontal20Regular,
  People20Regular,
  Person20Regular,
  Send20Filled,
  ShieldError20Regular,
  Video20Regular,
} from "@fluentui/react-icons";
import { useEffect, useMemo, useState } from "react";
import { defaultAnswers, DemoState, matter, Persona, SellerAnswers, Surface } from "@/lib/model";

const initialState: DemoState = {
  persona: "business",
  surface: "teams",
  requestSent: false,
  analysisComplete: false,
  questionsOpen: false,
  slowdownOpen: false,
  managerMessageOpen: false,
  specialistInviteOpen: false,
  newRequestOpen: false,
};

function Status({ tone, children }: { tone: "success" | "warning" | "info" | "neutral"; children: React.ReactNode }) {
  return (
    <span className={`status status-${tone}`}>
      <span className="status-dot" aria-hidden="true" />
      {children}
    </span>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone?: "warning" | "success" }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong className={tone ? `text-${tone}` : ""}>{value}</strong>
    </div>
  );
}

export default function Home() {
  const [state, setState] = useState<DemoState>(initialState);
  const [answers, setAnswers] = useState<SellerAnswers>(defaultAnswers);
  const [selectedDecision, setSelectedDecision] = useState<number | null>(null);

  const update = (patch: Partial<DemoState>) => setState((current) => ({ ...current, ...patch }));

  const switchPersona = (persona: Persona) => {
    update({ persona, surface: persona === "legal" ? "deal" : state.surface === "teams" ? "teams" : "deal" });
  };

  const openSurface = (surface: Surface) => update({ surface, persona: "business" });

  return (
    <SSRProvider>
    <FluentProvider theme={webLightTheme} className="app-provider">
      {state.surface === "teams" && state.persona === "business" ? (
        <TeamsExperience state={state} update={update} answers={answers} setAnswers={setAnswers} />
      ) : (
        <AppShell state={state} switchPersona={switchPersona} openSurface={openSurface}>
          {state.persona === "business" ? (
            state.surface === "new-request" ? (
              <NewRequest onCancel={() => openSurface("deal")} onContinue={() => update({ surface: "deal", analysisComplete: true })} />
            ) : (
              <BusinessNavigator state={state} update={update} />
            )
          ) : (
            <LegalWorkspace answered={Boolean(state.sellerAnswers)} onDecision={setSelectedDecision} />
          )}
        </AppShell>
      )}
      <DecisionDialog selected={selectedDecision} onClose={() => setSelectedDecision(null)} />
    </FluentProvider>
    </SSRProvider>
  );
}

function TeamsExperience({
  state,
  update,
  answers,
  setAnswers,
}: {
  state: DemoState;
  update: (patch: Partial<DemoState>) => void;
  answers: SellerAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<SellerAnswers>>;
}) {
  const [draft, setDraft] = useState(matter.request);

  useEffect(() => {
    if (!state.requestSent || state.analysisComplete) return;
    const timer = window.setTimeout(() => update({ analysisComplete: true }), 1150);
    return () => window.clearTimeout(timer);
  }, [state.requestSent, state.analysisComplete]);

  const submitAnswers = () => update({ sellerAnswers: answers, questionsOpen: false });

  return (
    <div className="teams-frame">
      <header className="teams-topbar">
        <div className="teams-product"><span className="teams-mark">T</span><strong>Microsoft Teams</strong></div>
        <Input className="teams-search" aria-label="Search Teams" placeholder="Search" />
        <div className="top-actions">
          <Tooltip content="Settings and more" relationship="label"><Button appearance="subtle" icon={<MoreHorizontal20Regular />} aria-label="Settings and more" /></Tooltip>
          <Avatar name="Maya Chen" size={32} color="colorful" />
        </div>
      </header>
      <div className="teams-layout">
        <nav className="teams-rail" aria-label="Teams">
          <RailItem icon={<Home20Regular />} label="Activity" />
          <RailItem icon={<People20Regular />} label="Chat" selected />
          <RailItem icon={<Video20Regular />} label="Meet" />
          <RailItem icon={<CalendarLtr20Regular />} label="Calendar" />
          <RailItem icon={<Apps20Regular />} label="Apps" />
        </nav>
        <aside className="chat-list">
          <div className="chat-list-title"><strong>Chat</strong><Button appearance="subtle" icon={<Add20Regular />} aria-label="New chat" /></div>
          <button className="chat-row selected"><span className="ask-avatar"><Gavel20Regular /></span><span><strong>Ask CPS</strong><small>Your deal is moving</small></span></button>
          <button className="chat-row"><Avatar name="Jordan Lee" size={32} /><span><strong>Jordan Lee</strong><small>Quarter-end plan</small></span></button>
          <button className="chat-row"><Avatar name="EMEA Deal Team" size={32} /><span><strong>EMEA Deal Team</strong><small>Contoso steering...</small></span></button>
        </aside>
        <main className="conversation">
          <header className="conversation-header">
            <span className="ask-avatar large"><Gavel20Regular /></span>
            <div><h1>Ask CPS</h1><span>Commercial legal guidance</span></div>
            <div className="conversation-actions"><Button appearance="subtle" icon={<Video20Regular />}>Meet</Button><Button appearance="subtle" icon={<People20Regular />}>Participants</Button></div>
          </header>
          <div className="messages" aria-live="polite">
            <div className="date-rule"><span>Today</span></div>
            {!state.requestSent && (
              <div className="welcome-note"><Bot20Regular /><div><strong>Ask CPS</strong><p>Tell CPS what you’re trying to get done. Attach an agreement or supporting file if you have one.</p></div></div>
            )}
            {state.requestSent && (
              <>
                <div className="message seller-message">
                  <Avatar name="Maya Chen" size={32} />
                  <div className="message-content"><div className="message-meta"><strong>Maya Chen</strong><time>9:41 AM</time></div><p>{matter.request}</p><div className="file-chip"><Document20Regular /><div><strong>{matter.attachment}</strong><small>Word · 842 KB</small></div></div></div>
                </div>
                {!state.analysisComplete ? (
                  <div className="message cps-message"><span className="ask-avatar"><Gavel20Regular /></span><div className="message-content"><div className="message-meta"><strong>Ask CPS</strong><time>9:41 AM</time></div><div className="reviewing"><Spinner size="tiny" /><span>Reviewing the agreement and deal context…</span></div></div></div>
                ) : (
                  <CpsResponse state={state} update={update} />
                )}
              </>
            )}
          </div>
          <div className="composer-wrap">
            <div className="composer">
              <Textarea aria-label="Message Ask CPS" value={draft} onChange={(_, data) => setDraft(data.value)} resize="vertical" placeholder="Type a message" />
              <div className="composer-actions"><Button appearance="subtle" icon={<Attach20Regular />} aria-label="Attach file" /><span className="attached-label"><Document20Regular />{matter.attachment}</span><Button appearance="primary" icon={<Send20Filled />} disabled={!draft.trim() || state.requestSent} onClick={() => update({ requestSent: true })}>Send</Button></div>
            </div>
            <small className="disclaimer">Ask CPS can make mistakes. Review important information.</small>
          </div>
        </main>
      </div>
      <Dialog open={state.questionsOpen} onOpenChange={(_, data) => update({ questionsOpen: data.open })}>
        <DialogSurface className="questions-dialog"><DialogBody><DialogTitle>Three details CPS couldn’t determine</DialogTitle><DialogContent>
          <p className="dialog-intro">Your answers may avoid another review cycle. These questions stay with the Contoso matter.</p>
          <Question number="1" title="Where will the customer’s relevant workloads be hosted?" value={answers.hosting} options={["Germany only", "EU", "Global", "Customer hasn't confirmed"]} onChange={(value) => setAnswers((a) => ({ ...a, hosting: value as SellerAnswers["hosting"] }))} />
          <Question number="2" title="Why is the customer requesting the AI liability change?" value={answers.liabilityReason} options={["Customer Legal requirement", "Procurement policy", "Internal AI policy", "Specific deployment concern", "I don't know yet"]} onChange={(value) => setAnswers((a) => ({ ...a, liabilityReason: value as SellerAnswers["liabilityReason"] }))} />
          <Question number="3" title="Has the customer said this issue is a condition to signature?" value={answers.signatureCondition} options={["Yes", "No", "Unclear"]} onChange={(value) => setAnswers((a) => ({ ...a, signatureCondition: value as SellerAnswers["signatureCondition"] }))} />
        </DialogContent><DialogActions><DialogTrigger disableButtonEnhancement><Button appearance="secondary">Cancel</Button></DialogTrigger><Button appearance="primary" onClick={submitAnswers}>Send to CPS</Button></DialogActions></DialogBody></DialogSurface>
      </Dialog>
    </div>
  );
}

function RailItem({ icon, label, selected }: { icon: React.ReactNode; label: string; selected?: boolean }) {
  return <button className={`rail-item ${selected ? "selected" : ""}`}>{icon}<span>{label}</span></button>;
}

function CpsResponse({ state, update }: { state: DemoState; update: (patch: Partial<DemoState>) => void }) {
  const answered = Boolean(state.sellerAnswers);
  return (
    <div className="message cps-message"><span className="ask-avatar"><Gavel20Regular /></span><div className="message-content"><div className="message-meta"><strong>Ask CPS</strong><time>9:42 AM</time></div>
      <section className="adaptive-card">
        <div className="matched"><span>Matched to</span><strong>{matter.title}</strong><small>{matter.compactValue} · Germany · Strategic Account</small><button>Not the right deal?</button></div>
        <div className="card-heading"><CheckmarkCircle20Filled /><div><h2>{answered ? "CPS has what it needs to continue" : "Your deal is moving"}</h2><p>{answered ? "Nothing else is needed from you right now." : "Most requested changes appear manageable. Two could affect timing."}</p></div></div>
        <div className="compact-metrics"><Metric label="Expected CPS path" value={matter.expectedPath} /><Metric label="Business impact" value={matter.impact} /><Metric label="Legal risk" value={matter.risk} tone="warning" /></div>
        {!answered && <div className="missing-info"><strong>Three details couldn’t be determined</strong><p>Providing them now may avoid another review cycle.</p></div>}
        {state.slowdownOpen && <div className="slowdown-card"><strong>One thing is likely to matter most</strong><p>The customer’s AI liability request is outside the approach typically used in comparable transactions.</p><span>Before your next customer conversation</span><p>Find out whether the request comes from Legal, Procurement, internal policy, or the actual deployment.</p></div>}
        <div className="adaptive-actions">
          {!answered && <Button appearance="primary" onClick={() => update({ questionsOpen: true })}>Answer 3 questions</Button>}
          <Button appearance={answered ? "primary" : "secondary"} onClick={() => update({ surface: "deal" })}>View deal</Button>
          <Button appearance="subtle" onClick={() => update({ slowdownOpen: !state.slowdownOpen })}>{state.slowdownOpen ? "Hide timing risks" : "What could slow this down?"}</Button>
        </div>
      </section>
    </div></div>
  );
}

function Question({ number, title, value, options, onChange }: { number: string; title: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <fieldset className="question"><legend><span>{number}</span>{title}</legend><RadioGroup value={value} onChange={(_, data) => onChange(data.value)}>{options.map((option) => <Radio key={option} value={option} label={option} />)}</RadioGroup></fieldset>;
}

function AppShell({ state, switchPersona, openSurface, children }: { state: DemoState; switchPersona: (persona: Persona) => void; openSurface: (surface: Surface) => void; children: React.ReactNode }) {
  return <div className="navigator-shell">
    <header className="app-topbar"><div className="brand"><span className="brand-mark"><Gavel20Regular /></span><span>CPS Navigator</span></div><div className="persona-switch" aria-label="Persona"><button className={state.persona === "business" ? "active" : ""} onClick={() => switchPersona("business")}>Business</button><button className={state.persona === "legal" ? "active" : ""} onClick={() => switchPersona("legal")}>Legal</button></div><div className="user-menu"><span>Maya Chen</span><Avatar name="Maya Chen" size={32} /></div></header>
    <div className="app-body"><nav className="app-nav" aria-label="Primary navigation"><button className={state.surface === "deal" ? "active" : ""} onClick={() => openSurface("deal")}><Home20Regular />Overview</button><button onClick={() => openSurface("teams")}><People20Regular />Ask CPS</button>{state.persona === "business" && <button className={state.surface === "new-request" ? "active" : ""} onClick={() => openSurface("new-request")}><Add20Regular />New request</button>}<div className="nav-spacer" /><button><Info20Regular />Help</button></nav><main className="app-main">{children}</main></div>
  </div>;
}

function BusinessNavigator({ state, update }: { state: DemoState; update: (patch: Partial<DemoState>) => void }) {
  const answered = Boolean(state.sellerAnswers);
  const readiness = answered ? matter.answeredReadiness : matter.initialReadiness;
  return <div className="page business-page">
    <div className="breadcrumbs"><Button appearance="subtle" icon={<ArrowLeft20Regular />} onClick={() => update({ surface: "teams" })}>Back to Teams</Button></div>
    <header className="matter-header"><div><span className="eyebrow">Deal Navigator</span><h1>{matter.title}</h1><p>{matter.opportunityValue} · {matter.region} · {matter.product}</p></div><Status tone="info">Legal review underway</Status></header>
    <section className="outcome-panel"><div className="outcome-copy"><span className="eyebrow">Current outlook</span><h2>Your deal is moving</h2><p>Most requested changes are on a clear path. CPS is reviewing two items that could affect timing.</p></div><div className="outcome-metrics"><Metric label="Expected path" value={matter.expectedPath} /><Metric label="Deal readiness" value={`${readiness}%`} /><Metric label="Business impact" value="High" /><Metric label="Legal risk" value="Moderate" tone="warning" /></div><ProgressBar value={readiness / 100} thickness="medium" aria-label={`Deal readiness ${readiness}%`} /></section>
    <div className="business-grid"><div className="primary-column">
      <section className="attention-section"><div className="section-icon success"><CheckmarkCircle20Filled /></div><div><h2>{answered ? "Nothing needed from you right now" : "Three details could help move this faster"}</h2><p>{answered ? "CPS is reviewing two items. We’ll update you when something changes." : "Answer the questions in Teams to help avoid another review cycle."}</p>{!answered && <Button appearance="primary" onClick={() => update({ surface: "teams", questionsOpen: true })}>Answer in Teams</Button>}</div></section>
      <section><div className="section-heading"><div><span className="eyebrow">Timing</span><h2>What could slow this deal down</h2></div><span>2 items</span></div><Accordion collapsible multiple>{matter.slowdowns.map((item) => <AccordionItem key={item.id} value={item.id}><AccordionHeader><div className="risk-row"><span className="risk-icon"><ShieldError20Regular /></span><span><strong>{item.title}</strong><small>{item.status}</small></span><p>{item.summary}</p></div></AccordionHeader><AccordionPanel><div className="expanded-guidance"><div><strong>What to learn from the customer</strong><p>{item.coach}</p></div><div><strong>Why CPS cares</strong><p>{item.why}</p></div><div><strong>What not to promise</strong><p>{item.avoid}</p></div></div></AccordionPanel></AccordionItem>)}</Accordion></section>
      <section className="coach-section"><span className="eyebrow">Deal Coach</span><h2>Before your next customer call</h2><p className="lead">AI liability is likely to be the most important negotiation point. Before discussing a concession, understand what is driving the request.</p><Accordion collapsible><AccordionItem value="questions"><AccordionHeader>Useful questions</AccordionHeader><AccordionPanel><ul><li>Is this a Legal requirement or Procurement requirement?</li><li>Is the concern general policy or specific to the contemplated deployment?</li><li>What underlying exposure is the customer trying to address?</li></ul></AccordionPanel></AccordionItem></Accordion><div className="people-actions"><div><Avatar name="Jordan Lee" size={40} /><span><strong>Sales manager</strong><small>Commercial positioning</small></span><Button onClick={() => update({ managerMessageOpen: true })}>Message my manager</Button></div><div><Avatar name="Priya Shah" size={40} /><span><strong>AI specialist</strong><small>Deployment questions</small></span><Button onClick={() => update({ specialistInviteOpen: true })}>Invite AI specialist</Button></div></div></section>
    </div><aside className="secondary-column"><Timeline answered={answered} /><AlreadyHandled /><Benchmarks /><TeamsActionDialogs state={state} update={update} /></aside></div>
  </div>;
}

function Timeline({ answered }: { answered: boolean }) {
  const steps = ["Request received", "Agreement reviewed", "Deal context matched", "Seller information received", "CPS review underway", "Response ready"];
  const completeTo = answered ? 3 : 2;
  return <section className="side-section"><h2>Status</h2><ol className="timeline">{steps.map((step, index) => <li key={step} className={index <= completeTo ? "complete" : index === completeTo + 1 ? "current" : "future"}><span>{index <= completeTo ? <Checkmark16Regular /> : index + 1}</span><div><strong>{step}</strong>{index === completeTo + 1 && <small>Current step</small>}</div></li>)}</ol><p className="estimate-note">Similar matters usually complete CPS review in 1–3 business days.</p><Accordion collapsible><AccordionItem value="estimate"><AccordionHeader>What affects this estimate?</AccordionHeader><AccordionPanel><p>Germany-specific requirements, specialist input, customer clarification, and the number of review cycles can change the range.</p><p><strong>Estimate confidence:</strong> Moderate</p></AccordionPanel></AccordionItem></Accordion></section>;
}

function AlreadyHandled() { return <section className="side-section"><h2>Already handled</h2><p>Three changes fit existing approved guidance. They don’t require additional CPS review.</p><Accordion collapsible><AccordionItem value="handled"><AccordionHeader>View 3 changes</AccordionHeader><AccordionPanel><ul className="plain-list">{matter.selfService.map((item) => <li key={item}><Checkmark16Regular />{item}</li>)}</ul><small>Source: Commercial contracting playbook · Reviewed July 2026</small></AccordionPanel></AccordionItem></Accordion></section>; }

function Benchmarks() { return <section className="side-section"><Accordion collapsible><AccordionItem value="benchmarks"><AccordionHeader><h2>Deals like yours</h2></AccordionHeader><AccordionPanel><p className="cohort">{matter.benchmark.cohort}</p><dl className="benchmark-list"><div><dt>Median CPS review</dt><dd>{matter.benchmark.medianReview}</dd></div><div><dt>Typical review cycles</dt><dd>{matter.benchmark.cycles}</dd></div><div><dt>Most common delay</dt><dd>{matter.benchmark.commonDelay}</dd></div><div><dt>Your deal</dt><dd className="ahead">Currently ahead</dd></div></dl></AccordionPanel></AccordionItem></Accordion></section>; }

function TeamsActionDialogs({ state, update }: { state: DemoState; update: (patch: Partial<DemoState>) => void }) {
  return <><Dialog open={state.managerMessageOpen} onOpenChange={(_, d) => update({ managerMessageOpen: d.open })}><DialogSurface><DialogBody><DialogTitle>Message Jordan in Teams</DialogTitle><DialogContent><div className="teams-preview"><strong>Contoso deal context</strong><p>AI liability may be the main negotiation point. Before we discuss a concession, can we align on the commercial position and what’s driving the customer’s request?</p><small>{matter.compactValue} · Target close {matter.targetClose}</small></div></DialogContent><DialogActions><DialogTrigger disableButtonEnhancement><Button>Cancel</Button></DialogTrigger><Button appearance="primary" onClick={() => update({ managerMessageOpen: false })}>Send message</Button></DialogActions></DialogBody></DialogSurface></Dialog><Dialog open={state.specialistInviteOpen} onOpenChange={(_, d) => update({ specialistInviteOpen: d.open })}><DialogSurface><DialogBody><DialogTitle>Invite Priya Shah</DialogTitle><DialogContent><div className="teams-preview"><strong>Customer-call support</strong><p>Could you join the next Contoso call to help clarify the planned deployment and Germany-only hosting request?</p><small>No contract advice requested</small></div></DialogContent><DialogActions><DialogTrigger disableButtonEnhancement><Button>Cancel</Button></DialogTrigger><Button appearance="primary" onClick={() => update({ specialistInviteOpen: false })}>Send invite</Button></DialogActions></DialogBody></DialogSurface></Dialog></>;
}

function NewRequest({ onCancel, onContinue }: { onCancel: () => void; onContinue: () => void }) {
  const [text, setText] = useState("");
  return <div className="page intake-page"><header><span className="eyebrow">New request</span><h1>What are you working on?</h1><p>Tell CPS what you’re trying to get done.</p></header><section className="intake-form"><label htmlFor="request-text">Your request</label><Textarea id="request-text" value={text} onChange={(_, d) => setText(d.value)} placeholder="Describe the commercial objective, customer request, or decision you need help with." resize="vertical" /><div className="upload-zone"><Attach20Regular /><div><strong>Add anything that would help</strong><span>Agreement, customer document, or supporting file</span></div><Button>Add file</Button></div><div className="suggested-deal"><div><span className="eyebrow">Suggested from your deal context</span><strong>{matter.title}</strong><small>{matter.compactValue} · Germany · Azure AI</small></div><Status tone="success">Matched</Status></div><div className="intake-actions"><Button onClick={onCancel}>Cancel</Button><Button appearance="primary" disabled={!text.trim()} onClick={onContinue}>Continue</Button></div></section></div>;
}

function LegalWorkspace({ answered, onDecision }: { answered: boolean; onDecision: (index: number) => void }) {
  return <div className="page legal-page"><header className="matter-header"><div><span className="eyebrow">Legal workspace</span><h1>{matter.title}</h1><p>{matter.opportunityValue} · Strategic Account · Germany · Azure AI</p></div><Status tone="warning">2 decisions need your attention</Status></header><section className="why-matters"><div><span className="eyebrow">Why this matters</span><h2>German agreement enables the wider European rollout</h2></div><p>Executive-sponsored, quarter-end expansion in a strategic account. A competitor is active, and the customer wants the agreement signed by {matter.targetClose}.</p><Accordion collapsible><AccordionItem value="context"><AccordionHeader>View full commercial context</AccordionHeader><AccordionPanel><dl className="context-grid"><div><dt>Objective</dt><dd>Expand Azure AI across Contoso’s European operations</dd></div><div><dt>Initiative</dt><dd>{matter.initiative}</dd></div><div><dt>Stage</dt><dd>{matter.salesStage}</dd></div><div><dt>Seller input</dt><dd>{answered ? "Complete" : "3 details pending"}</dd></div></dl></AccordionPanel></AccordionItem></Accordion></section><section className="first-pass"><div><span className="eyebrow">First pass complete</span><h2>{matter.analysis.needsJudgment} decisions require judgment</h2></div><div className="pass-counts"><Metric label="Substantive changes" value="16" /><Metric label="Within guidance" value="11" /><Metric label="Standard process" value="3" /><Metric label="Need judgment" value="2" tone="warning" /></div></section><section><div className="section-heading"><div><span className="eyebrow">What needs your judgment</span><h2>Resolve the decisions that affect timing</h2></div></div><div className="decision-list">{matter.decisions.map((decision, index) => <article key={decision.title} className="decision-row"><div><div className="decision-labels"><Badge appearance="tint" color="informative">Impact: {decision.impact}</Badge><Badge appearance="tint" color="warning">{decision.risk}</Badge></div><h3>{decision.title}</h3><p><strong>Recommendation:</strong> {decision.recommendation}</p><small>{decision.rationale}</small></div><Button appearance={index === 0 ? "primary" : "secondary"} onClick={() => onDecision(index)}>{decision.action}</Button></article>)}</div></section></div>;
}

function DecisionDialog({ selected, onClose }: { selected: number | null; onClose: () => void }) {
  const decision = selected === null ? null : matter.decisions[selected];
  return <Dialog open={decision !== null} onOpenChange={(_, d) => !d.open && onClose()}><DialogSurface><DialogBody><DialogTitle>{decision?.title}</DialogTitle><DialogContent>{decision && <><span className="eyebrow">Decision needed</span><h3>{decision.recommendation}</h3><p>{decision.rationale}</p><Accordion collapsible multiple><AccordionItem value="language"><AccordionHeader>Contract language</AccordionHeader><AccordionPanel>Customer language departs from the standard limitation structure and extends coverage to AI-related claims.</AccordionPanel></AccordionItem><AccordionItem value="guidance"><AccordionHeader>Applicable guidance</AccordionHeader><AccordionPanel>Commercial contracting playbook v4.3 recommends the approved fallback unless deployment-specific facts justify escalation.</AccordionPanel></AccordionItem><AccordionItem value="trace"><AccordionHeader>Why CPS recommends this</AccordionHeader><AccordionPanel><p><strong>System rule:</strong> Non-standard liability positions require human review.</p><p><strong>Retrieved evidence:</strong> Approved playbook and three comparable matters.</p><p><strong>AI assessment:</strong> Moderate confidence; deployment facts remain relevant.</p><p><strong>Human decision:</strong> Pending.</p></AccordionPanel></AccordionItem></Accordion></>}</DialogContent><DialogActions><Button onClick={onClose}>Close</Button><Button appearance="primary" onClick={onClose}>{selected === 0 ? "Use fallback" : "Request Privacy input"}</Button></DialogActions></DialogBody></DialogSurface></Dialog>;
}
