# NestJS Upstream Source

## Upstream Source

| Field | Pinned value |
|---|---|
| Repository | [Kadajett/agent-nestjs-skills](https://github.com/Kadajett/agent-nestjs-skills) |
| Commit SHA | [`3986e0cede33958e000f959031cbee0cd83c2941`](https://github.com/Kadajett/agent-nestjs-skills/tree/3986e0cede33958e000f959031cbee0cd83c2941) |
| Version/tag | Skill metadata version `1.2.0`; the upstream repository had no Git tags at inspection time |
| License | `MIT`, as declared by the pinned skill front matter; no standalone `LICENSE` file exists in the pinned tree |
| Skill | [`skills/nestjs-best-practices/SKILL.md`](https://github.com/Kadajett/agent-nestjs-skills/blob/3986e0cede33958e000f959031cbee0cd83c2941/skills/nestjs-best-practices/SKILL.md) |
| Inspection date | 2026-08-09 |
| Adoption date | 2026-08-09 |

The license field records the upstream declaration accurately; it is not a claim that a separate license text was audited. Any redistribution beyond project-native references must be reviewed against the actual upstream licensing materials available at that time.

## Purpose

The pinned repository is an advisory reference for NestJS engineering practices. The review covered the skill entry point, section metadata, and every non-template rule file under the pinned [`rules/`](https://github.com/Kadajett/agent-nestjs-skills/tree/3986e0cede33958e000f959031cbee0cd83c2941/skills/nestjs-best-practices/rules) directory.

The pinned inventory contains 40 rules in 10 categories:

| Category | Rule files |
|---|---:|
| Architecture | 6 |
| Dependency Injection | 6 |
| Error Handling | 3 |
| Security | 5 |
| Performance | 4 |
| Testing | 3 |
| Database and ORM | 3 |
| API Design | 4 |
| Microservices | 3 |
| DevOps and Deployment | 3 |
| **Total** | **40** |

## Authority

The pinned upstream source does not define Sports Academy architecture, dependencies, Business behavior, security policy, or delivery decisions. Precedence is:

```text
Canonical Business Truth
  > AI Change Propagation Protocol
  > Technology Stack Lock
  > Architecture Rules
  > NestJS Engineering Rules
  > pinned external NestJS skill
```

Local project governance remains authoritative. Upstream TypeORM, JWT, microservice, test-runner, logging, validation-library, deployment, and dependency examples are never implicit project approvals.

## Update Policy

- The commit SHA above is the only reviewed upstream baseline for this adoption record.
- Future upstream changes require an explicit diff review, a complete reclassification of changed or added rules, validation, and a cumulative Change Log entry.
- There is no automatic synchronization, moving-branch authority, or runtime requirement to browse GitHub.
- Project-native rules and the adoption matrix must be updated deliberately; upstream examples must not be copied wholesale.
- A new technology, distributed architecture, authentication mechanism, persistence tool, or test runner still requires the project's normal technical decision path.
