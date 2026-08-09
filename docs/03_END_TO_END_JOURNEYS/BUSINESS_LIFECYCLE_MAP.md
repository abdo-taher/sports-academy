# Canonical Business Lifecycle Map

## Purpose

This map is the canonical navigation source for end-to-end business operation. Detailed rules reside in domain `*_RULES.md` files and approved decisions in `15_CHANGE_MANAGEMENT/DECISION_LOG.md`. There are no open client Business Decisions.

## Lifecycle Map

```text
Academy operating intent
  → Academy setup
  → Branch setup and operating readiness
  → Sport and level availability
  → Program decision [OPEN]
  → Coach assignment
  → Group and schedule preparation
  → Parent and prospective-student registration
  → Trial scheduling and attendance
  → Initial evaluation
  → Student creation/activation decision [OPEN]
  → Level and group assignment
  → Subscription preparation
  → Invoice/payment handling
  → Subscription activation decision [OPEN]
  → Scheduled sessions
  → Attendance and training
  → Reports and performance tracking
  → Periodic evaluation and placement decision
  → Parent monitoring and communication
  → Triggered operational communication and follow-up
  → Operational change requests
       ├─ Freeze/resume
       ├─ Group/level/sport/branch transfer
       ├─ Excuse/make-up
       └─ Renewal
  → Events/tournaments [FUTURE until approved]
  → Exit
  → Archive
  → Restore/reactivation decision [OPEN]
```

## Canonical Journey Index

| Journey | Canonical File | Completion Status |
|---|---|---|
| Academy | `LIFECYCLES/ACADEMY_LIFECYCLE.md` | Partial; state/closure decisions open |
| Branch | `LIFECYCLES/BRANCH_LIFECYCLE.md` | Partial; readiness/closure decisions open |
| Sport and Level Availability | `LIFECYCLES/SPORT_LEVEL_AVAILABILITY_LIFECYCLE.md` | Partial; branch/program decisions open |
| Coach | `LIFECYCLES/COACH_LIFECYCLE.md` | Partial; scope and exit decisions open |
| Group and Schedule | `LIFECYCLES/GROUP_SCHEDULE_LIFECYCLE.md` | Partial; closure/capacity decisions open |
| Lead, Trial and Student | `LIFECYCLES/LEAD_TRIAL_STUDENT_LIFECYCLE.md` | Partial; creation/state decisions open |
| Parent | `LIFECYCLES/PARENT_LIFECYCLE.md` | Partial; guardianship decisions open |
| Subscription | `LIFECYCLES/SUBSCRIPTION_LIFECYCLE.md` | Partial; activation/renewal decisions open |
| Payment | `LIFECYCLES/PAYMENT_LIFECYCLE.md` | Partial; partial/late/failure decisions open |
| Attendance, Training and Evaluation | `LIFECYCLES/ATTENDANCE_TRAINING_EVALUATION_LIFECYCLE.md` | Partial; eligibility/outcome decisions open |
| Freeze, Transfer, Make-up and Renewal | `LIFECYCLES/CHANGE_REQUESTS_LIFECYCLE.md` | Partial; policy decisions open |
| Exit and Archive | `LIFECYCLES/EXIT_ARCHIVE_LIFECYCLE.md` | Partial; linked-record and return decisions open |
| Events and Tournaments | `LIFECYCLES/EVENTS_LIFECYCLE.md` | Future consideration |
| Communication | `LIFECYCLES/COMMUNICATION_LIFECYCLE.md` | Partial; timing, retry and escalation policies open |

## Confirmed Cross-Lifecycle Transitions

- An approved initial evaluation supports level recommendation and subsequent placement.
- A Student requires an eligible active, financially cleared, non-frozen, unexpired Subscription with sufficient balance; there is no implicit expiry grace.
- Confirmed attendance affects the subscription session ledger.
- An approved Excuse prevents a deduction or restores one through a compensating Ledger entry; extension/Make-up is not the default.
- A transfer preserves history and must identify its effective date.
- Freeze and transfer decisions are recorded and communicated.
- Renewal preserves historical subscription and financial information.
- Archive preserves historical student information and does not permanently delete it.

## Controlled Dead Ends

The following transitions intentionally end at an Open Question instead of an invented outcome:

- Trial not attended or not converted.
- Evaluation rejected or requiring re-evaluation.
- Payment ultimately failed or late.
- Subscription expired with grace or outstanding debt.
- Freeze ended or resumed early.
- Transfer rejected, cancelled or blocked.
- Make-up unused or expired.
- Archived student returning.
