DOWNSTREAM DOCUMENT — DERIVED FROM CANONICAL BUSINESS TRUTH

This file preserves technical/downstream detail under a semantic filename. It must not override domain rules, lifecycles, decisions or open questions.

# Frontend Applications Ux Design

Chapter 29 — Frontend Applications & User Experience Design

وسيتم فيه تعريف:

    Admin Dashboard

    Parent Portal

    Coach Portal

    Mobile Apps

    Screens

    User Flows

    Permissions UI

    UX Rules

    Design System.


Students
1250

Active Subscriptions
980

Today's Attendance
92%

2. Student Management Screen
Features

Admin can:

    Create student.

    Edit profile.

    Archive student.

    Transfer student.

    View history.

Student Profile Page

Tabs:

Profile

Parents

Subscription

Attendance

Evaluations

Transfers

Messages

Documents

3. Parent Management

Screens:

    Parent list.

    Parent profile.

    Linked children.

    Communication history.

4. Coach Management

Features:

    Create coach.

    Assign specialty.

    Assign groups.

    Suspend coach.

    Move coach.

Coach Profile:

Information

Specialties

Groups

Performance

Attendance

5. Group Management
Group Screen

Contains:

Group Name

Sport

Level

Main Coach

Schedule

Students

Actions:

    Add student.

    Remove student.

    Transfer student.

    Assign replacement coach.

6. Subscription Management

Admin can:

    Create subscription.

    Renew.

    Freeze.

    Extend.

    Compensate sessions.

Subscription View:

Student

Plan

Start Date

End Date

Remaining Sessions

History

7. Attendance Management

Features:

    Daily sessions.

    Attendance review.

    Corrections.

    Reports.

Views:

Calendar:

Monday
Group A

Tuesday
Group B

8. Evaluation Management

Admin can:

    Create templates.

    Define evaluation periods.

    Review evaluations.

    Approve promotions.

9. Communication Management

Admin can:

    Send messages.

    Create announcements.

    Manage notifications.

10. Dynamic Forms

Admin creates:

    Surveys.

    Questionnaires.

    Feedback forms.

Configuration:

Title

Questions

Audience

Start Date

End Date

29.7 Parent Portal
Purpose

تمكين ولي الأمر من متابعة الأبناء.
Parent Home Screen

Shows:

Welcome Parent


Child Cards:


Ahmed

Football

Level: Intermediate

Next Session:
Tomorrow 6 PM


Subscription:
Active

Parent Features
My Children

إذا كان لديه أكثر من طالب:

Child A

Child B

Child C

كل طالب مستقل.
Student Profile

Contains:

    Information.

    Current level.

    Group.

    Coach.

    Progress.

Subscription View

Shows:

Remaining Sessions

Expiry Date

Payment Status

Freeze Request

Attendance View

Calendar:

Present
Absent
Excused

Evaluation View

Displays:

    Latest evaluation.

    Progress.

    Coach notes.

Communication

Parent can:

    Message coach.

    Message admin.

    Comment on reports.

29.8 Coach Portal
Purpose

تسهيل عمل المدرب اليومي.
Coach Home

Shows:

Today's Groups

Next Sessions

Pending Reports

Students Count

My Groups

Contains:

    Group.

    Schedule.

    Students.

Student List

Each student:

Name

Level

Attendance

Last Evaluation

Attendance Screen

Workflow:

Open Session

↓

Scan QR

↓

Student Appears

↓

Confirm Attendance

Coach Reports

Coach adds:

    Daily notes.

    Performance.

    Improvements.

Coach Limitations

Cannot:

    Change subscription.

    Delete attendance.

    Modify official evaluation.

29.9 Mobile Applications
Parent Mobile App

Main Screens:

Login

Home

Children

Schedule

Attendance

Evaluation

Messages

Notifications

Profile

Coach Mobile App

Screens:

Login

Dashboard

Groups

Students

Attendance

Reports

Messages

Admin Mobile App (Future)

Limited:

    Alerts.

    Approvals.

    Reports.

29.10 Public Trial Registration UI
Purpose

رابط التسجيل للحصة المجانية.

Flow:

Landing Page

↓

Child Information

↓

Parent Information

↓

Choose Sport

↓

Choose Available Time

↓

Submit

↓

Confirmation

29.11 User Flows
Flow 1 — New Student Journey

Admin Sends Link

↓

Parent Registers

↓

Trial Session

↓

Evaluation

↓

Level Decision

↓

Subscription

↓

Group Assignment

↓

Training Starts

Flow 2 — Student Transfer

Admin Opens Student

↓

Transfer

↓

Choose New Group

↓

Add Reason

↓

Confirm

↓

Timeline Updated

↓

Notification Sent

Flow 3 — Attendance

Coach Opens Session

↓

Scan QR

↓

Validate Subscription

↓

Record Attendance

↓

Decrease Balance

↓

Notify Parent

Flow 4 — Freeze Subscription

Parent Request

↓

Admin Review

↓

Approve

↓

Freeze Period

↓

Resume

29.12 Permissions UI
Dynamic Menu

القائمة تعتمد على Permission.

Example:

Admin:

Students
Coaches
Reports
Settings

Coach:

My Groups
Attendance
Evaluations
Messages

Parent:

My Children
Subscription
Messages

29.13 UX Rules
Rule 1

Never show unavailable actions.
Rule 2

Always show status.

Example:

Subscription:

Active

Expires in 15 Days

Rule 3

Critical actions require confirmation.

Examples:

    Archive student.

    Transfer.

    Delete.

Rule 4

Show history everywhere.

Examples:

    Student timeline.

    Subscription history.

Rule 5

Mobile First

خصوصًا:

    Attendance.

    Messaging.

    Notifications.

29.14 Design System
Components

Reusable components:
Forms

    Input.

    Select.

    Date Picker.

    File Upload.

Data Display

    Tables.

    Cards.

    Timeline.

    Charts.

Feedback

    Toast.

    Modal.

    Confirmation.

29.15 Color & Status System

Standard Status:
Success

Active.
Warning

Expiring.
Danger

Suspended.
Neutral

Archived.
29.16 Accessibility

Support:

    Keyboard navigation.

    Clear contrast.

    Responsive design.

    Arabic RTL.

29.17 Localization

Future:

Support:

    Arabic.

    English.

Requirements:

    RTL/LTR.

    Translation files.

    Date localization.

29.18 Performance Rules

Frontend يجب أن يدعم:

    Lazy Loading.

    Pagination.

    Image Optimization.

    Caching.

    Offline preparation Mobile.

29.19 Error Handling UX

كل Error:

يجب أن يكون:

    مفهوم.

    قابل للتصرف.

Example:

بدل:

Error 422

يعرض:

لا يمكن تسجيل الحضور،
الاشتراك منتهي.

29.20 Future UX Features
AI Assistant

يساعد:

    Parent.

    Coach.

    Admin.

Smart Dashboard

اقتراحات:

    Students at risk.

    Attendance problems.

    Performance trends.

Video Analysis Interface

مستقبلاً:

    Upload video.

    Compare performance.

    AI feedback.

29.21 Chapter Summary

تم تعريف:

✅ Admin Dashboard
✅ Parent Portal
✅ Coach Portal
✅ Mobile Applications
✅ Public Trial Flow
✅ Screens
✅ User Flows
✅ Permission UI
✅ UX Rules
✅ Design System
✅ Localization
✅ Future UX Expansion



التالي:


---
## 📋 Document Reference Metadata
- **Document Title**: Chapter 29 — Frontend Applications & UX Design
- **Category Directory**: `09_FRONTEND_ARCHITECTURE`
- **Legacy Standard Label**: Enterprise Academy Platform BRD/SRS Specification v1.0 (approval not verified)
- **Target Audience**: Software Architects, Core Developers, QA Engineers, Product Managers
- **Governance Status**: Supporting or legacy source; consult `00_GOVERNANCE/SOURCE_OF_TRUTH.md` before use.
---

## 🎯 Executive Summary & Purpose
This document is a supporting downstream specification migrated from **Chapter 29 — Frontend Applications & UX Design** within the **Academy Sports Management Platform**. 
It defines functional requirements, domain rules, operational boundaries, dynamic flows, and architectural constraints necessary to implement, validate, and maintain the system.

---


---
## 🔗 Cross-Module References & Invariants Matrix
- **Core Domain Boundary**: `03_DOMAIN_DOCUMENTATION` (`../03_DOMAIN_DOCUMENTATION/` — legacy path superseded)
- **Business Rules Catalog**: `05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` (`../05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` — legacy path superseded)
- **Database Model**: `07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` (`../07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` — legacy path superseded)
- **API Specification**: `08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` (`../08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` — legacy path superseded)
- **Global Index Sitemap**: `INDEX.md` (`../INDEX.md` — legacy path superseded)
