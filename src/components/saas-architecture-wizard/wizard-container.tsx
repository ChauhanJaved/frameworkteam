"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check, Copy, RotateCcw, Edit3, ArrowLeft, ArrowRight, Sparkles, Layers, ShieldCheck, CreditCard, Building2, User } from "lucide-react";

type ScopeType = "single" | "single-workspace" | "multi-workspace";
type RolesType = "enum" | "rbac";
type HierarchyType = "flat" | "nested";
type JoinMethodType = "invite" | "domain" | "both";
type BillingScopeType = "user" | "workspace" | "org";

interface Answers {
  scope: ScopeType | null;
  roles: RolesType | null;
  hierarchy: HierarchyType | null;
  joinMethod: JoinMethodType | null;
  billingScope: BillingScopeType | null;
  productName: string;
  productFeature: string;
}

interface QuestionOption {
  value: string;
  title: string;
  desc: string;
  code: string;
  icon?: React.ReactNode;
}

type QuestionKey = keyof Answers | "product";

interface Question {
  key: QuestionKey;
  qnum: string;
  title: string;
  hint: string;
  type: "single" | "text";
  skipIf?: (a: Answers) => boolean;
  options?: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    key: "scope",
    qnum: "Step 1 of 6 / Access Scope",
    title: "How do users access the application?",
    hint: "This decides whether core feature database tables key off user_id or workspace_id.",
    type: "single",
    options: [
      {
        value: "single",
        title: "Single-user (Solo Access)",
        desc: "One person signs up and uses the app alone. No team members, no shared data.",
        code: "schema: profiles only (user_id scoped)",
        icon: <User className="h-5 w-5 text-blue-500" />,
      },
      {
        value: "single-workspace",
        title: "Single-workspace per Account",
        desc: "User gets one workspace automatically upon signup and can invite teammates into it.",
        code: "schema: profiles + workspaces (1:1) + workspace_members",
        icon: <Layers className="h-5 w-5 text-emerald-500" />,
      },
      {
        value: "multi-workspace",
        title: "Multi-workspace (Switchable)",
        desc: "User can create or join multiple separate workspaces and switch between them.",
        code: "schema: profiles + workspaces (many) + workspace_members",
        icon: <Building2 className="h-5 w-5 text-purple-500" />,
      },
    ],
  },
  {
    key: "roles",
    qnum: "Step 2 of 6 / Role System",
    title: "How should permissions and roles be managed?",
    hint: "Determines role granularity inside workspaces. Skipped for solo single-user apps.",
    type: "single",
    skipIf: (a) => a.scope === "single",
    options: [
      {
        value: "enum",
        title: "Fixed Enum Roles (Owner / Admin / Member)",
        desc: "Simple, battle-tested role setup. Logic is hardcoded in application rules.",
        code: "column: workspace_members.role (owner | admin | member)",
        icon: <ShieldCheck className="h-5 w-5 text-amber-500" />,
      },
      {
        value: "rbac",
        title: "Custom RBAC (Granular Permissions)",
        desc: "Workspace owners can define custom roles with specific feature-level permissions.",
        code: "tables: roles + permissions + workspace_members.role_id",
        icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
      },
    ],
  },
  {
    key: "hierarchy",
    qnum: "Step 3 of 6 / Organizational Hierarchy",
    title: "Do workspaces sit under a parent Organization?",
    hint: "Ideal for agencies or enterprises where one parent entity manages multiple client workspaces.",
    type: "single",
    skipIf: (a) => a.scope === "single",
    options: [
      {
        value: "flat",
        title: "Flat Hierarchy (Top-level Workspaces)",
        desc: "Workspaces operate independently as top-level entities. Standard for 95% of SaaS apps.",
        code: "structure: workspaces (no organizations parent table)",
        icon: <Layers className="h-5 w-5 text-teal-500" />,
      },
      {
        value: "nested",
        title: "Nested Hierarchy (Organization > Workspace)",
        desc: "Parent organizations own multiple workspaces with centralized billing & member controls.",
        code: "structure: organizations + org_members + workspaces",
        icon: <Building2 className="h-5 w-5 text-cyan-500" />,
      },
    ],
  },
  {
    key: "joinMethod",
    qnum: "Step 4 of 6 / Workspace Onboarding",
    title: "How do members join a workspace?",
    hint: "Defines whether tokenized email invitations or domain-based auto-join is required.",
    type: "single",
    skipIf: (a) => a.scope === "single",
    options: [
      {
        value: "invite",
        title: "Token-based Email Invites",
        desc: "Owners or admins generate and send email invitation links with unique tokens.",
        code: "table: invites (token, email, role, expires_at)",
        icon: <ShieldCheck className="h-5 w-5 text-indigo-500" />,
      },
      {
        value: "domain",
        title: "Domain Auto-Join",
        desc: "Users registering with a verified matching domain automatically join the workspace.",
        code: "column: workspaces.allowed_domains text[]",
        icon: <Sparkles className="h-5 w-5 text-blue-500" />,
      },
      {
        value: "both",
        title: "Both Manual Invites & Domain Auto-Join",
        desc: "Support both token email invitations and matching domain auto-join flows.",
        code: "tables: invites + workspaces.allowed_domains",
        icon: <Layers className="h-5 w-5 text-violet-500" />,
      },
    ],
  },
  {
    key: "billingScope",
    qnum: "Step 5 of 6 / Stripe Billing Scope",
    title: "Where is the Stripe subscription attached?",
    hint: "Determines where stripe_customer_id and plan tier live in your database schema.",
    type: "single",
    skipIf: (a) => a.scope === "single",
    options: [
      {
        value: "user",
        title: "Per-User Subscription",
        desc: "Billing attaches to the user's profile. Best for solo products or personal plans.",
        code: "column: profiles.stripe_customer_id",
        icon: <CreditCard className="h-5 w-5 text-emerald-500" />,
      },
      {
        value: "workspace",
        title: "Per-Workspace Subscription",
        desc: "One subscription covers all team members inside the workspace.",
        code: "column: workspaces.stripe_customer_id",
        icon: <CreditCard className="h-5 w-5 text-amber-500" />,
      },
      {
        value: "org",
        title: "Per-Organization Subscription",
        desc: "Billing rolls up to the parent organization level, covering all its nested workspaces.",
        code: "column: organizations.stripe_customer_id",
        icon: <CreditCard className="h-5 w-5 text-purple-500" />,
      },
    ],
  },
  {
    key: "product",
    qnum: "Step 6 of 6 / Product Details",
    title: "Define your SaaS product details",
    hint: "These details will be directly embedded into the generated AI builder prompt.",
    type: "text",
  },
];

export default function WizardContainer() {
  const { toast } = useToast();
  const wizardRef = useRef<HTMLDivElement>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    scope: null,
    roles: null,
    hierarchy: null,
    joinMethod: null,
    billingScope: null,
    productName: "",
    productFeature: "",
  });
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (wizardRef.current) {
      const yOffset = -100;
      const element = wizardRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [stepIndex]);

  const visibleQuestions = QUESTIONS.filter(
    (q) => !q.skipIf || !q.skipIf(answers)
  );
  const currentQuestion = visibleQuestions[stepIndex];
  const isFinished = stepIndex >= visibleQuestions.length;

  const handleSelectOption = (key: keyof Answers, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [key]: value };
      if (key === "hierarchy" && value !== "nested" && prev.billingScope === "org") {
        next.billingScope = null;
      }
      return next;
    });
  };

  const getQuestionOptions = (q: Question): QuestionOption[] => {
    if (!q.options) return [];
    if (q.key === "billingScope" && answers.hierarchy !== "nested") {
      return q.options.filter((opt) => opt.value !== "org");
    }
    return q.options;
  };

  const handleNext = () => {
    if (currentQuestion && currentQuestion.type === "text") {
      if (!answers.productFeature.trim()) {
        setErrorMsg("Please describe your SaaS product feature before continuing.");
        return;
      }
    }
    setErrorMsg("");
    setStepIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setErrorMsg("");
      setStepIndex((prev) => prev - 1);
    }
  };

  const buildPromptText = () => {
    const name = answers.productName.trim() || "[PRODUCT NAME]";
    const feature =
      answers.productFeature.trim() ||
      "[PRODUCT FEATURE — e.g. a QR code generator with live scan analytics]";

    const lines: string[] = [];

    lines.push(
      `Build a production-grade SaaS application called ${name} using Next.js (App Router), Supabase (Auth & Postgres), Tailwind CSS, and deployable on Vercel.`
    );
    lines.push("");

    let archLabel = "";
    if (answers.scope === "single") {
      archLabel = "Single-user (Solo), no team/workspace concepts.";
    } else if (answers.scope === "single-workspace") {
      archLabel =
        "Single-workspace per user account. Workspace owner can invite team members with roles.";
    } else {
      archLabel =
        "Multi-workspace. Users can belong to multiple workspaces and switch between them via workspace switcher.";
    }
    lines.push(`ARCHITECTURE: ${archLabel}`);
    lines.push("");

    lines.push("AUTHENTICATION:");
    lines.push("- Supabase Auth (Email/Password + Google OAuth)");
    if (answers.scope === "single") {
      lines.push(
        "- On signup trigger: auto-create a row in `profiles` referencing auth.users.id"
      );
    } else if (answers.scope === "single-workspace") {
      lines.push(
        "- On signup trigger: auto-create a `profiles` row AND a default `workspaces` row owned by user"
      );
      lines.push(
        "- Auto-insert creator into `workspace_members` with role = 'owner'"
      );
    } else {
      lines.push(
        "- On signup trigger: auto-create a `profiles` row only (no auto-workspace creation)"
      );
      lines.push(
        "- Post-signup flow: Prompt user to create a new workspace or accept pending invite"
      );
    }
    lines.push("");

    lines.push("DATABASE SCHEMA & MODELS:");
    if (answers.scope === "single") {
      lines.push(
        "- profiles (id, full_name, avatar_url, plan, stripe_customer_id, created_at)"
      );
    } else {
      const workspaceCol =
        answers.scope === "multi-workspace" ? ", current_workspace_id" : "";
      lines.push(
        `- profiles (id, full_name, avatar_url${workspaceCol}, created_at)`
      );
      if (answers.hierarchy === "nested") {
        lines.push(
          "- organizations (id, name, owner_id, plan, stripe_customer_id, created_at)"
        );
        lines.push("- workspaces (id, organization_id, name, created_at)");
        lines.push(
          "- org_members (id, organization_id, user_id, role, created_at)"
        );
      } else {
        lines.push(
          "- workspaces (id, name, owner_id, plan, stripe_customer_id, created_at)"
        );
      }
      if (answers.roles === "rbac") {
        lines.push("- roles (id, workspace_id, name)");
        lines.push("- permissions (id, role_id, action)");
        lines.push(
          "- workspace_members (id, workspace_id, user_id, role_id, created_at)"
        );
      } else {
        lines.push(
          "- workspace_members (id, workspace_id, user_id, role, created_at) — role enum: owner | admin | member"
        );
      }
      if (
        answers.joinMethod === "invite" ||
        answers.joinMethod === "both"
      ) {
        lines.push(
          "- invites (id, workspace_id, email, role, token, expires_at, created_at)"
        );
      }
    }
    lines.push("");

    lines.push("ACCESS CONTROL & ROW LEVEL SECURITY (RLS):");
    lines.push("- Enable RLS on ALL database tables without exception.");
    if (answers.scope === "single") {
      lines.push(
        "- Users can only SELECT, INSERT, UPDATE, DELETE rows where user_id = auth.uid()"
      );
      lines.push(
        "- Every feature table MUST include `user_id` referencing profiles.id"
      );
    } else {
      lines.push(
        "- Users can only access data belonging to workspaces where they exist in workspace_members"
      );
      lines.push(
        "- All feature data tables MUST have a `workspace_id` column (data belongs to workspace, not individuals)"
      );
      if (answers.roles === "rbac") {
        lines.push(
          "- Enforce sensitive operations (billing, inviting, deleting) via permissions lookup on role_id"
        );
      } else {
        lines.push(
          "- Roles 'owner' & 'admin' can invite/remove members and manage billing"
        );
        lines.push(
          "- Role 'member' can only access core product features, restricted from workspace settings"
        );
      }
      if (answers.scope === "multi-workspace") {
        lines.push(
          "- Include Workspace Switcher UI component driven by workspace_members join"
        );
        lines.push(
          "- Maintain profiles.current_workspace_id to scope queries to active context"
        );
      }
    }
    lines.push("");

    if (answers.scope !== "single") {
      lines.push("ONBOARDING & WORKSPACE JOINING:");
      if (answers.joinMethod === "invite") {
        lines.push(
          "- Email invitation flow using secure cryptographically generated tokens"
        );
        lines.push(
          "- Accepting invite joins user to workspace_members with invited role"
        );
      } else if (answers.joinMethod === "domain") {
        lines.push("- Workspaces store `allowed_domains text[]` array");
        lines.push(
          "- Auto-join matching verified domain signups directly into workspace_members as 'member'"
        );
      } else if (answers.joinMethod === "both") {
        lines.push("- Support both token email invitations and domain auto-join");
        lines.push(
          "- Check domain match on signup; fallback to manual invite acceptance"
        );
      }
      lines.push("");
    }

    lines.push("STRIPE BILLING & MONETIZATION:");
    lines.push("- Integrate Stripe Checkout Session + Stripe Customer Portal");
    const effectiveBillingScope =
      answers.scope === "single"
        ? "user"
        : answers.hierarchy !== "nested" && answers.billingScope === "org"
        ? "workspace"
        : answers.billingScope;
    if (effectiveBillingScope === "user") {
      lines.push(
        "- Stripe customer & plan fields stored directly on `profiles`"
      );
      lines.push(
        "- Webhook handler updates profiles.plan tier on invoice payment success/cancel"
      );
    } else if (effectiveBillingScope === "workspace") {
      lines.push("- Stripe customer ID attached to `workspaces` table");
      lines.push(
        "- Workspace plan limits and features applied to all workspace members"
      );
    } else {
      lines.push(
        "- Billing rolls up to `organizations.stripe_customer_id` across child workspaces"
      );
    }
    lines.push("");

    lines.push(`CORE PRODUCT FEATURE: ${feature}`);
    lines.push("");

    const buildSteps = ["Auth Pages", "Profile Database Triggers"];
    if (answers.scope !== "single") {
      buildSteps.push(
        `Workspace ${answers.hierarchy === "nested" ? "& Org " : ""}Creation Flow`
      );
    }
    if (answers.scope === "multi-workspace") {
      buildSteps.push("Workspace Switcher Component");
    }
    buildSteps.push("RLS Policies Setup");
    if (
      answers.scope !== "single" &&
      (answers.joinMethod === "invite" || answers.joinMethod === "both")
    ) {
      buildSteps.push("Team Invite Tokens Flow");
    }
    buildSteps.push(
      `Core Feature Tables (${answers.scope === "single" ? "User" : "Workspace"}-scoped)`
    );
    buildSteps.push("Stripe Billing Integration");
    buildSteps.push("Dashboard UI & Settings Pages");

    lines.push(
      `EXECUTION STEP ORDER: ${buildSteps.map((s, i) => `${i + 1}. ${s}`).join(" → ")}.`
    );

    return lines.join("\n");
  };

  const handleCopyPrompt = () => {
    const text = buildPromptText();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      toast({
        title: "Prompt Copied!",
        description:
          "Your SaaS architecture prompt has been copied to your clipboard. Paste it into Cursor, v0, Claude, or Bolt.",
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const getBadges = () => {
    const badges: string[] = [];
    if (answers.scope === "single") badges.push("Single-user App");
    else if (answers.scope === "single-workspace") badges.push("Single Workspace");
    else badges.push("Multi-workspace");

    if (answers.scope !== "single") {
      badges.push(answers.roles === "rbac" ? "Custom RBAC" : "Fixed Roles");
      if (answers.hierarchy === "nested") badges.push("Org Hierarchy");
      badges.push(
        answers.joinMethod === "invite"
          ? "Invite Only"
          : answers.joinMethod === "domain"
          ? "Domain Join"
          : "Invite + Domain"
      );
    }

    const effectiveBillingScope =
      answers.scope === "single"
        ? "user"
        : answers.hierarchy !== "nested" && answers.billingScope === "org"
        ? "workspace"
        : answers.billingScope;
    badges.push(
      `Billing: ${
        effectiveBillingScope === "user"
          ? "Per-User"
          : effectiveBillingScope === "workspace"
          ? "Per-Workspace"
          : "Per-Org"
      }`
    );

    return badges;
  };

  return (
    <div ref={wizardRef} className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Step Progress Rail */}
      {!isFinished && (
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs font-mono text-muted-foreground mb-2">
            <span>Progress</span>
            <span>
              {stepIndex + 1} of {visibleQuestions.length} Steps
            </span>
          </div>
          <div className="flex gap-1.5 h-2 w-full bg-secondary rounded-full overflow-hidden">
            {visibleQuestions.map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full transition-all duration-300 ${
                  i < stepIndex
                    ? "bg-primary"
                    : i === stepIndex
                    ? "bg-primary/60 animate-pulse"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main Form Panel */}
      <div className="bg-card border rounded-2xl p-6 sm:p-8 shadow-sm">
        {!isFinished ? (
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-mono font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-md mb-2">
                Step {stepIndex + 1} of {visibleQuestions.length} / {currentQuestion.qnum.split(" / ")[1]}
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-card-foreground">
                {currentQuestion.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {currentQuestion.hint}
              </p>
            </div>

            {/* Single Select Question */}
            {currentQuestion.type === "single" && currentQuestion.options && (
              <div className="grid gap-3 sm:grid-cols-1">
                {getQuestionOptions(currentQuestion).map((opt) => {
                  const key = currentQuestion.key as keyof Answers;
                  const isSelected = answers[key] === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => handleSelectOption(key, opt.value)}
                      className={`flex items-start gap-4 p-4 text-left border rounded-xl transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                          : "border-border bg-card hover:border-muted-foreground/30 hover:bg-accent/40"
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border mt-0.5 transition-colors ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/30 bg-background"
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5" />}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          {opt.icon}
                          <span className="font-semibold text-base text-card-foreground">
                            {opt.title}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {opt.desc}
                        </p>
                        <code className="inline-block text-[11px] font-mono text-muted-foreground/80 bg-muted px-2 py-0.5 rounded mt-2">
                          {opt.code}
                        </code>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Text Input Question */}
            {currentQuestion.type === "text" && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="productName"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Product Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="productName"
                    value={answers.productName}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        productName: e.target.value,
                      }))
                    }
                    placeholder="e.g. QuickQR, SupportPulse, ChatCraft"
                    className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="productFeature"
                    className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    Core Product Feature Description (Required)
                  </label>
                  <textarea
                    id="productFeature"
                    rows={4}
                    value={answers.productFeature}
                    onChange={(e) => {
                      setAnswers((prev) => ({
                        ...prev,
                        productFeature: e.target.value,
                      }));
                      if (errorMsg) setErrorMsg("");
                    }}
                    placeholder="e.g. A customer support desk tool where team members share an inbox of support tickets, assign conversations, respond to inquiries, and track resolution SLA analytics."
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errorMsg ? "border-destructive ring-1 ring-destructive" : ""
                    }`}
                  />
                  {errorMsg && (
                    <p className="text-xs text-destructive mt-1.5 font-medium">
                      {errorMsg}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Action Navigation */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 mt-8 pt-4 border-t">
              <button
                type="button"
                onClick={handleBack}
                disabled={stepIndex === 0}
                className="h-11 sm:h-10 px-5 flex items-center justify-center gap-2 text-sm font-medium rounded-lg border border-border bg-background hover:bg-accent text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-all w-full sm:w-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={
                  currentQuestion.type === "single" &&
                  !answers[currentQuestion.key as keyof Answers]
                }
                className="h-11 sm:h-10 px-6 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all w-full sm:w-auto whitespace-nowrap"
              >
                {stepIndex === visibleQuestions.length - 1
                  ? "Generate SaaS Prompt"
                  : "Next Step"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-md mb-2">
                  <Check className="h-3.5 w-3.5" /> Ready for AI Code Generator
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-card-foreground">
                  Generated SaaS Architecture Prompt
                </h2>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {getBadges().map((b, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative group">
              <pre className="p-5 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto max-h-[500px] overflow-y-auto whitespace-pre-wrap break-words border border-slate-800">
                {buildPromptText()}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t">
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className={`h-11 sm:h-10 px-5 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg transition-all shadow-sm w-full sm:w-auto ${
                    copied
                      ? "bg-emerald-600 text-white"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Prompt Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Prompt
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setStepIndex(visibleQuestions.length - 1)}
                  className="h-11 sm:h-10 px-4 flex items-center justify-center gap-1.5 text-sm font-medium rounded-lg border bg-background text-foreground hover:bg-accent transition-all w-full sm:w-auto"
                >
                  <Edit3 className="h-4 w-4" /> Edit Answers
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStepIndex(0);
                  setAnswers({
                    scope: null,
                    roles: null,
                    hierarchy: null,
                    joinMethod: null,
                    billingScope: null,
                    productName: "",
                    productFeature: "",
                  });
                }}
                className="h-11 sm:h-10 px-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-all underline decoration-dashed w-full sm:w-auto"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
