DOWNSTREAM DOCUMENT — DERIVED FROM CANONICAL BUSINESS TRUTH

This file preserves technical/downstream detail under a semantic filename. It must not override domain rules, lifecycles, decisions or open questions.

# Functional Requirements And User Stories

Chapter 22 — Functional Requirements & User Stories
22.1 Overview
Purpose

هذا الفصل يحول الرؤية التجارية للنظام إلى متطلبات وظيفية قابلة للتنفيذ من فريق:

    Backend Developers

    Frontend Developers

    Mobile Developers

    QA Engineers

    Product Owners

الهدف هو تحديد:

    ماذا يجب أن يفعل النظام؟

    من يستطيع تنفيذ العملية؟

    ما هي القواعد؟

    ما هي الحالات المختلفة؟

    كيف يتم اختبارها؟

22.2 Functional Requirement Structure

كل Requirement سيتم تعريفه بالصيغة:

Requirement ID

Name

Description

Actors

Preconditions

Main Flow

Alternative Flows

Business Rules

Acceptance Criteria

Related Modules

22.3 System Functional Areas

النظام مقسم إلى Functional Domains:

Identity & Access

        |

Student Management

        |

Parent Management

        |

Sports & Training

        |

Groups & Scheduling

        |

Subscription Management

        |

Attendance

        |

Evaluation

        |

Communication

        |

Notifications

        |

Reports

        |

Administration

Module 1 — Identity & User Management
FR-AUTH-001
User Account Creation
Description

النظام يجب أن يسمح بإنشاء حسابات للمستخدمين.
Actors

    Admin

    Super Admin

Preconditions

    المستخدم لديه صلاحية إنشاء حسابات.

    البيانات الأساسية متوفرة.

Main Flow

    Admin يفتح Users Management.

    يختار Create User.

    يدخل:

    Name

    Phone

    Email

    Role

    النظام يتحقق من البيانات.

    يتم إنشاء الحساب.

    يتم إرسال بيانات الدخول.

Alternative Flow

إذا كان رقم الهاتف موجودًا:

النظام يمنع إنشاء حساب مكرر.
Business Rules

AUTH-RULE-001

Phone number must be unique.

AUTH-RULE-002

Every user must have at least one role.

Acceptance Criteria

Given:

Admin has permission.

When:

Creates user.

Then:

User account created successfully.
FR-AUTH-002
User Authentication
Description

المستخدم يستطيع تسجيل الدخول للنظام.
Actors

All Users
Main Flow

    User enters credentials.

    System validates.

    System checks account status.

    System creates session.

    User redirected based on role.

Exceptions
Invalid Password

Return error.
Suspended Account

Block login.
Acceptance Criteria

Given:

Active user.

When:

Correct credentials provided.

Then:

Access granted.
FR-AUTH-003
Role Based Access Control
Description

النظام يجب أن يتحكم في الصلاحيات حسب الدور.
Actors

Admin
Example

Coach:

Allowed:

View Assigned Students

Create Training Report

Record Attendance

Not Allowed:

View Payments
Manage Users

Acceptance Criteria

Unauthorized action returns:

403 Forbidden

Module 2 — Student Management
FR-STU-001
Create Student
Description

إنشاء ملف طالب جديد.
Actors

    Admin

    Reception

Student Data

Personal:

    Name

    Birth Date

    Gender

    Photo

    Contact Information

Relationship:

    Parent

    Guardian

Training:

    Sport

    Level

    Group

Main Flow

    User selects Create Student.

    Enters information.

    System validates.

    Student created.

    QR Code generated.

Business Rules

STU-RULE-001

Every student must have unique identifier.

STU-RULE-002

Student cannot be active without required information.

Acceptance Criteria

Student profile exists.

QR code generated.

Timeline created.
FR-STU-002
Student Profile View
Description

عرض ملف الطالب الكامل.
Contains
Basic Information

    Name

    Age

    Photo

Parent Information

    Parent name

    Phone

    Relationship

Training Information

    Sport

    Level

    Group

    Coach

Subscription

    Status

    Remaining sessions

    Expiry date

History

    Attendance

    Evaluations

    Transfers

    Payments

FR-STU-003
Student Archive
Description

أرشفة الطالب بدون حذف التاريخ.
Actors

Admin
Preconditions

Student has no active subscription.
Flow

    Admin selects Archive.

    Provides reason.

    System archives.

    Audit event created.

Module 3 — Parent Management
FR-PARENT-001
Create Parent Account
Description

ربط ولي الأمر بالطلاب.
Actors

Admin
Parent Can Have

Multiple students.

Example:

Parent A

|
├── Student 1
├── Student 2
└── Student 3

Rules

PARENT-RULE-001

Parent can manage only linked students.

FR-PARENT-002
Parent Portal Access
Description

ولي الأمر يستطيع متابعة أبنائه.
Features

    View profile.

    View attendance.

    View evaluations.

    View subscription.

    Communicate.

Module 4 — Trial Registration
FR-TRIAL-001
Free Trial Booking
Description

الأكاديمية ترسل رابط التسجيل للحصة المجانية.
Actors

    Admin

    Parent

Flow

    Admin creates trial availability.

    Generates registration link.

    Parent registers child.

    Booking created.

    Academy evaluates student.

Business Rules

TRIAL-RULE-001

Trial does not create active subscription automatically.

FR-TRIAL-002
Trial Evaluation
Description

تقييم الطالب بعد الحصة التجريبية.
Actors

    Admin

    Supervisor

    Coach (permission based)

Evaluation Contains

    Skills.

    Level suggestion.

    Notes.

    Recommendation.

Module 5 — Subscription Management
FR-SUB-001
Create Subscription
Description

إنشاء اشتراك للطالب.
Actors

    Admin

    Parent (Future)

Subscription Data

    Student

    Sport

    Group

    Coach

    Schedule

    Duration

    Sessions Count

    Price

Flow

Select Student

↓

Choose Training Type

↓

Assign Group / Private

↓

Generate Subscription

↓

Activate

FR-SUB-002
Freeze Subscription
Description

ولي الأمر يطلب تجميد الاشتراك.
Flow

Parent:

Request Freeze

↓

Admin Review

↓

Approve / Reject

↓

Update Subscription

↓

Notify Parent
FR-SUB-003
Subscription Expiration
Description

إدارة انتهاء الاشتراك.
System Actions

Before expiration:

    Send notification.

After expiration:

    Change status.

Module 6 — Group Management
FR-GRP-001
Create Training Group
Description

إنشاء مجموعة تدريبية.
Group Contains

    Sport

    Level

    Schedule

    Main Coach

    Students

FR-GRP-002
Assign Coach
Description

ربط المدرب بالمجموعة.
Rules

GROUP-RULE-001

One main coach per group.

Module 7 — Attendance
FR-ATT-001
Record Attendance
Actors

    Coach

    Supervisor

Methods

    QR Code

    Manual

Flow

Student arrives.

↓

Scan QR.

↓

Validate subscription.

↓

Record attendance.

↓

Deduct session.
FR-ATT-002
Attendance Correction
Description

تصحيح الحضور.
Requires

    Permission.

    Reason.

    Audit.

Module 8 — Evaluation
FR-EVAL-001
Student Evaluation
Description

تقييم دوري للطالب.
Actors

Coach / Supervisor
Contains

    Skills

    Score

    Notes

    Recommendation

FR-EVAL-002
Promotion Decision
Flow

Evaluation

↓

Recommendation

↓

Admin Approval

↓

Level Transfer
Module 9 — Communication
FR-COM-001
Send Message

Actors:

    Parent

    Coach

    Admin

Rules

Communication controlled by permissions.
Module 10 — Reporting
FR-REP-001
Generate Report
Types

    Student

    Attendance

    Financial

    Coach

    Business

22.4 Global Acceptance Criteria

كل Feature يجب أن تحقق:
Security

    Permission checked.

Audit

    Important action logged.

Validation

    Invalid data rejected.

History

    Previous data preserved.

Notification

    Relevant users informed.

Chapter 22 Status

Completed Foundation:

✅ Functional Requirement Structure
✅ Identity Requirements
✅ Student Requirements
✅ Parent Requirements
✅ Trial Flow
✅ Subscription Requirements
✅ Group Management
✅ Attendance
✅ Evaluation
✅ Communication
✅ Reporting

التالي:


---
## 📋 Document Reference Metadata
- **Document Title**: Chapter 22 — Functional Requirements & User Stories
- **Category Directory**: `01_PRODUCT_VISION`
- **Legacy Standard Label**: Enterprise Academy Platform BRD/SRS Specification v1.0 (approval not verified)
- **Target Audience**: Software Architects, Core Developers, QA Engineers, Product Managers
- **Governance Status**: Supporting or legacy source; consult `00_GOVERNANCE/SOURCE_OF_TRUTH.md` before use.
---

## 🎯 Executive Summary & Purpose
This document is a supporting downstream specification migrated from **Chapter 22 — Functional Requirements & User Stories** within the **Academy Sports Management Platform**. 
It defines functional requirements, domain rules, operational boundaries, dynamic flows, and architectural constraints necessary to implement, validate, and maintain the system.

---


---
## 🔗 Cross-Module References & Invariants Matrix
- **Core Domain Boundary**: `03_DOMAIN_DOCUMENTATION` (`../03_DOMAIN_DOCUMENTATION/` — legacy path superseded)
- **Business Rules Catalog**: `05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` (`../05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` — legacy path superseded)
- **Database Model**: `07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` (`../07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` — legacy path superseded)
- **API Specification**: `08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` (`../08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` — legacy path superseded)
- **Global Index Sitemap**: `INDEX.md` (`../INDEX.md` — legacy path superseded)
