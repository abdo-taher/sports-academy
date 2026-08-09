# Frontend Agent Instructions

Before Frontend work:

1. read the root `AGENTS.md`;
2. read `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`;
3. read `docs/00_GOVERNANCE/ARCHITECTURE_RULES.md` and `DEPENDENCY_RULES.md`;
4. read the relevant Business Domain;
5. read Requirements;
6. read the Frontend/UX View;
7. read the UX Flow Catalog;
8. read the Permission Catalog;
9. read relevant API behavior.

The Frontend must respect Business permissions and states, show only valid actions, and handle loading, error, empty and permission states. Never invent a Business action because a control appears useful, and never treat UI behavior as Business Truth.

If UX work reveals missing Business behavior, return to Business documentation first through the change protocol.

The Frontend lock is Next.js App Router + React + strict TypeScript + Tailwind + shadcn/ui + TanStack Query + React Hook Form + Zod. Use the fixed feature/component structure and state ownership in `ARCHITECTURE_RULES.md`; do not introduce a competing UI system, state library, form library, validation library or Pages Router feature.

Before a feature, follow:

```text
Business Domain -> Requirements -> UX Flow -> Permission Rules -> API Contract -> Implementation
```

Consume data through the approved contract/client, feature API layer and query hooks. Use `TESTING_STRATEGY.md` for Vitest, React Testing Library and Playwright requirements.

If requested work conflicts with the lock, stop with `TECH STACK CONFLICT — ADR REQUIRED`.
