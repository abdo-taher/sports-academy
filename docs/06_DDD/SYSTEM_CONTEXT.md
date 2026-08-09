# System Context — Academy Sports Management Platform

## 1. Executive Summary & Context
The **Academy Sports Management Platform** is an enterprise-grade, multi-tenant digital solution designed to digitize and automate the entire operational, academic, financial, and engagement lifecycle of sports academies.

## 2. Platform Core Architecture Principles
- **Domain Driven Design (DDD)**: Core domain logic is encapsulated inside bounded contexts (Student, Training, Finance, Communication, Analytics).
- **Modular Architecture**: High cohesion, low coupling between business modules.
- **API First & Mobile First**: Micro-service / modular REST API architecture powering web portals and mobile apps for Admins, Coaches, Parents, and Students.
- **Financial Invariance**: Financial operations (invoices, session deductions, refunds) are immutable with complete audit trails.
- **Global & Multi-Tenant Ready**: Support for multiple sports, branches, currencies, languages, timezones, and tenant isolation.

## 3. Key Actors & User Roles
1. **Super Admin / Platform Admin**: Global configuration, tenant management, system-wide monitoring.
2. **Academy Admin / Branch Manager**: Operational management, staff assignment, schedule management, financial tracking.
3. **Coach / Instructor**: Session attendance, player evaluation, training log creation, performance feedback.
4. **Parent / Guardian**: Child progress tracking, subscription payment, freeze requests, communication.
5. **Student / Athlete**: Schedule viewing, evaluation history, QR attendance check-in.


---
## 📋 Document Reference Metadata
- **Document Title**: System Context — Academy Sports Management Platform
- **Category Directory**: `00_AI_AGENT_CONTEXT`
- **Legacy Standard Label**: Enterprise Academy Platform BRD/SRS Specification v1.0 (approval not verified)
- **Target Audience**: Software Architects, Core Developers, QA Engineers, Product Managers
- **Governance Status**: Supporting or legacy source; consult `00_GOVERNANCE/SOURCE_OF_TRUTH.md` before use.
---

## 🎯 Executive Summary & Purpose
This document is a supporting downstream specification migrated from **System Context — Academy Sports Management Platform** within the **Academy Sports Management Platform**. 
It defines functional requirements, domain rules, operational boundaries, dynamic flows, and architectural constraints necessary to implement, validate, and maintain the system.

---


---
## 🔗 Cross-Module References & Invariants Matrix
- **Core Domain Boundary**: `03_DOMAIN_DOCUMENTATION` (`../03_DOMAIN_DOCUMENTATION/` — legacy path superseded)
- **Business Rules Catalog**: `05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` (`../05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` — legacy path superseded)
- **Database Model**: `07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` (`../07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` — legacy path superseded)
- **API Specification**: `08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` (`../08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` — legacy path superseded)
- **Global Index Sitemap**: `INDEX.md` (`../INDEX.md` — legacy path superseded)
