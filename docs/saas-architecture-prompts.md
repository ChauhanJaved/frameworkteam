# SaaS Architecture Prompts for AI App Builders

Use these as the **foundation block** of any prompt you give to an AI app builder (Cursor, v0, Bolt, Claude, etc.) when building a SaaS on Next.js + Supabase + Vercel. Swap out "[PRODUCT FEATURE]" with whatever the actual software does (QR tracker, chatbot widget, link shortener, etc.) — the auth/workspace/role architecture underneath stays the same.

---

## Pattern 1: Single-User SaaS (No Workspace)

Use when: one person signs up and uses the tool alone. No team, no invites, no shared access.

```
Build a SaaS application called [PRODUCT NAME] using Next.js, Supabase, and deployed on Vercel.

ARCHITECTURE: Single-user, no workspace/team concept.

Auth:
- Use Supabase Auth (email/password + Google OAuth)
- On signup, auto-create a row in `profiles` table linked to auth.users.id

Database schema:
- profiles (id, full_name, avatar_url, plan, stripe_customer_id, created_at)
  - plan and billing fields live directly on profiles (no workspace layer)

Access rules:
- Every user only ever sees their own data
- All data tables (e.g. [feature tables]) must have a `user_id` column referencing profiles.id
- Enable Row Level Security (RLS) on every table: users can only select/insert/update/delete rows where user_id = auth.uid()

Billing:
- Integrate Stripe Checkout + Customer Portal
- Subscription status stored on profiles.plan (free/pro/premium)
- Webhook updates profiles.plan on subscription events

Core feature: [PRODUCT FEATURE — e.g. "a dynamic QR code generator where each QR can be edited after creation and tracks scan analytics"]

Build in this order: auth pages → profile creation trigger → RLS policies → core feature tables → Stripe integration → dashboard UI.
```

---

## Pattern 2: Single-Workspace SaaS (Team Can Join One Workspace)

Use when: user signs up, gets one workspace automatically, and can invite teammates into that same workspace.

```
Build a SaaS application called [PRODUCT NAME] using Next.js, Supabase, and deployed on Vercel.

ARCHITECTURE: Single-workspace per account. Each account has exactly one workspace, but can invite team members into it with roles.

Auth:
- Use Supabase Auth (email/password + Google OAuth)
- On signup, auto-create a `profiles` row AND auto-create one `workspaces` row owned by that user
- Auto-insert the creator into `workspace_members` with role = 'owner'

Database schema:
- profiles (id, full_name, avatar_url, created_at)
- workspaces (id, name, owner_id, plan, stripe_customer_id, created_at)
- workspace_members (id, workspace_id, user_id, role, created_at) — role: owner/admin/member
- invites (id, workspace_id, email, role, token, expires_at, created_at)

Access rules:
- Enable RLS on all tables
- A user can only read/write data belonging to a workspace where they exist in workspace_members
- Only 'owner' or 'admin' roles can invite/remove members or change billing
- 'member' role can only use the core feature, not manage team/billing
- All feature tables (e.g. [feature tables]) must have a `workspace_id` column, NOT user_id — data belongs to the workspace, not the individual

Invites:
- Owner/admin can invite via email → generates a token-based invite link
- New/existing user accepting invite gets added to workspace_members

Billing:
- Stripe subscription tied to workspaces.stripe_customer_id (billing is per-workspace, not per-user)
- Only owner/admin can access billing portal

Core feature: [PRODUCT FEATURE — e.g. "a helpdesk tool where the team shares one inbox of support tickets"]

Build in this order: auth pages → profile + workspace auto-creation trigger → workspace_members + RLS policies → invite flow → core feature tables (workspace-scoped) → Stripe integration → team settings UI.
```

---

## Pattern 3: Multi-Workspace SaaS (User Can Belong to Many Workspaces)

Use when: user can create or join multiple separate workspaces and switch between them (like Slack/Notion).

```
Build a SaaS application called [PRODUCT NAME] using Next.js, Supabase, and deployed on Vercel.

ARCHITECTURE: Multi-workspace. A single user account can own or belong to many separate workspaces, and switches between them via a workspace switcher UI.

Auth:
- Use Supabase Auth (email/password + Google OAuth)
- On signup, auto-create a `profiles` row only — do NOT auto-create a workspace
- User is prompted to either create a new workspace or accept a pending invite after signup

Database schema:
- profiles (id, full_name, avatar_url, current_workspace_id, created_at)
- workspaces (id, name, owner_id, plan, stripe_customer_id, created_at)
- workspace_members (id, workspace_id, user_id, role, created_at) — role: owner/admin/member — unique(workspace_id, user_id)
- invites (id, workspace_id, email, role, token, expires_at, created_at)

Access rules:
- Enable RLS on all tables
- A user's access to any workspace's data is checked via EXISTS in workspace_members for that workspace_id + auth.uid()
- All feature tables (e.g. [feature tables]) must have a `workspace_id` column
- UI must include a workspace switcher (dropdown showing all workspaces the user belongs to, pulled from workspace_members joined to workspaces)
- profiles.current_workspace_id tracks which workspace is "active" in the current session — all queries default to this scope

Invites:
- Any owner/admin can invite a user (existing or new) into their workspace by email
- If invited user already has an account, they just get added to workspace_members for that workspace (their existing other workspaces are untouched)

Billing:
- Stripe subscription tied to workspaces.stripe_customer_id — each workspace bills separately
- Switching workspace context also switches which plan/limits apply

Core feature: [PRODUCT FEATURE — e.g. "an AI chatbot widget builder where an agency manages multiple client workspaces, each with its own chatbot config and usage limits"]

Build in this order: auth pages → profile creation trigger (no auto-workspace) → workspace creation/join flow → workspace switcher → RLS policies scoped by workspace_members → invite flow → core feature tables (workspace-scoped) → Stripe integration (per-workspace) → settings UI.
```

---

## Optional Add-On Blocks (attach to any pattern above)

**If you need custom/granular roles instead of fixed enum roles:**
```
Add a full RBAC layer instead of fixed roles:
- roles (id, workspace_id, name) — lets workspace owners create custom roles
- permissions (id, role_id, action) — e.g. 'invite_user', 'edit_billing', 'delete_data'
- workspace_members.role_id references roles.id instead of a text enum
- Middleware/helper function checks permissions table before allowing any sensitive action
```

**If you need org > workspace hierarchy (agency managing multiple client workspaces):**
```
Add an organizations layer above workspaces:
- organizations (id, name, owner_id, plan, stripe_customer_id)
- workspaces (id, organization_id, name, created_at) — workspace now belongs to an org, not directly billed
- org_members (id, organization_id, user_id, role) — org-level roles
- Workspace-level access still uses workspace_members, but billing/plan limits are enforced at the organization level
```

**If you want domain-based auto-join instead of manual invites:**
```
Add to workspaces table: allowed_domains text[] 
On signup, after email verification, check if the user's email domain matches any workspace's allowed_domains — if so, auto-add them to workspace_members as 'member' instead of requiring a manual invite.
```
