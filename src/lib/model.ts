export type Persona = "business" | "legal";
export type Surface = "teams" | "deal" | "new-request";

export type SellerAnswers = {
  hosting: "Germany only" | "EU" | "Global" | "Customer hasn't confirmed";
  liabilityReason:
    | "Customer Legal requirement"
    | "Procurement policy"
    | "Internal AI policy"
    | "Specific deployment concern"
    | "I don't know yet";
  signatureCondition: "Yes" | "No" | "Unclear";
};

export type DemoState = {
  persona: Persona;
  surface: Surface;
  requestSent: boolean;
  analysisComplete: boolean;
  questionsOpen: boolean;
  sellerAnswers?: SellerAnswers;
  slowdownOpen: boolean;
  managerMessageOpen: boolean;
  specialistInviteOpen: boolean;
  newRequestOpen: boolean;
};

export const matter = {
  id: "CPS-2027-01482",
  title: "Contoso — European Azure AI Expansion",
  opportunityValue: "$18.4M TCV",
  compactValue: "$18.4M",
  region: "Germany / EMEA",
  product: "Azure AI",
  customerType: "Strategic Enterprise",
  accountLabel: "Strategic Account",
  targetClose: "September 30",
  initiative: "FY27 Strategic AI Adoption",
  executiveSponsored: true,
  competitivePressure: true,
  salesStage: "Contracting",
  intakeSource: "teams" as const,
  attachment: "Contoso_Azure_AI_Redline.docx",
  request:
    "Customer sent back their paper for the Contoso Azure AI expansion. They want this signed before quarter end. Can CPS take a look?",
  expectedPath: "1–3 business days",
  impact: "High" as const,
  risk: "Moderate" as const,
  initialReadiness: 68,
  answeredReadiness: 78,
  analysis: {
    substantiveChanges: 16,
    withinGuidance: 11,
    standardProcess: 3,
    needsJudgment: 2,
  },
  slowdowns: [
    {
      id: "liability",
      title: "AI liability",
      status: "Potential blocker",
      summary:
        "The customer is asking for a position outside the standard approach typically used in comparable transactions.",
      coach:
        "Find out whether the request comes from Legal, Procurement, internal policy, or a concern with the actual deployment.",
      why:
        "The requested position could expand Microsoft's exposure beyond what is typical for a comparable deployment.",
      avoid:
        "Do not promise that Microsoft will accept the customer's proposed liability position.",
    },
    {
      id: "residency",
      title: "Data residency",
      status: "Needs clarification",
      summary: "The agreement suggests a Germany-specific hosting requirement.",
      coach:
        "Confirm whether Germany-only hosting is a contractual condition or a deployment preference.",
      why:
        "The answer determines whether Privacy input is needed before CPS responds.",
      avoid: "Do not confirm a hosting commitment before the deployment design is validated.",
    },
  ],
  selfService: [
    "Standard notice details",
    "Approved invoice timing",
    "Existing order-form references",
  ],
  benchmark: {
    cohort: "Strategic enterprise · AI · Germany · $10–25M",
    medianReview: "2.4 days",
    cycles: "2",
    commonDelay: "Data-residency clarification",
  },
  decisions: [
    {
      title: "AI liability",
      impact: "High",
      risk: "Moderate",
      recommendation: "Use the approved fallback position.",
      rationale:
        "Comparable enterprise matters resolved without accepting deployment-wide indemnification.",
      action: "Review",
    },
    {
      title: "Data residency",
      impact: "High",
      risk: "High sensitivity",
      recommendation: "Request Privacy input before responding.",
      rationale:
        "The agreement may require Germany-only hosting, but the deployment facts are incomplete.",
      action: "Request input",
    },
  ],
};

export const defaultAnswers: SellerAnswers = {
  hosting: "Germany only",
  liabilityReason: "Internal AI policy",
  signatureCondition: "Unclear",
};
