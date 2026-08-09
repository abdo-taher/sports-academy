DOWNSTREAM DOCUMENT — DERIVED FROM CANONICAL BUSINESS TRUTH

This file preserves technical/downstream detail under a semantic filename. It must not override domain rules, lifecycles, decisions or open questions.

# Audit Activity History Management

Chapter 13 — Audit, Activity & History Management
الفلسفة

هناك فرق كبير بين ثلاثة مفاهيم:

    Activity Log: ماذا فعل المستخدم؟

    Audit Log: ماذا تغير في البيانات؟

    Timeline: ماذا حدث للطالب أو الاشتراك أو المجموعة؟

هذه ثلاثة أشياء مختلفة، ويجب ألا تُخلط مع بعضها.
13.1 Activity Log

يسجل كل نشاط يقوم به المستخدم داخل النظام.

أمثلة:

    تسجيل الدخول.

    تسجيل الخروج.

    إنشاء طالب.

    تعديل بيانات.

    فتح تقرير.

    تصدير Excel.

    إنشاء استبيان.

    إرسال رسالة.

    اعتماد طلب.

كل سجل يحتوي على:

    المستخدم.

    الدور.

    التاريخ والوقت.

    نوع العملية.

    الكيان المستهدف.

    عنوان IP (إن وجد).

    الجهاز والمتصفح (إن وجد).

    نتيجة العملية (نجحت / فشلت).

13.2 Audit Log

يسجل التغييرات الفعلية على البيانات.

مثال:

قبل:

اسم المجموعة: Football A

بعد:

اسم المجموعة: Football U10 - A

يسجل النظام:

    اسم الحقل.

    القيمة القديمة.

    القيمة الجديدة.

    من قام بالتعديل.

    وقت التعديل.

    سبب التعديل (إذا كان مطلوبًا).

13.3 Timeline

لكل كيان رئيسي Timeline مستقل.

مثل:
Student Timeline

    إنشاء الطالب.

    الحصة المجانية.

    أول تقييم.

    إنشاء الاشتراك.

    تغيير المجموعة.

    الترقية.

    التجميد.

    التجديد.

    الأرشفة.

Subscription Timeline

    الإنشاء.

    الدفع.

    الحضور.

    خصم حصة.

    إعادة حصة.

    تجميد.

    استئناف.

    انتهاء.

    تجديد.

Coach Timeline

    التعيين.

    النقل.

    تغيير المجموعات.

    الغياب.

    العودة.

    الأرشفة.

13.4 Approval History

كل عملية تحتاج موافقة يجب أن تحتفظ بتاريخها.

مثال:

طلب تجميد

↓

قُدم بواسطة ولي الأمر

↓

راجعه الأدمن

↓

وافق

↓

تم التنفيذ

مع تسجيل:

    من أنشأ الطلب.

    من راجعه.

    من اعتمده.

    وقت كل خطوة.

    سبب القرار.

13.5 Decision Log

ليس كل قرار يغيّر البيانات مباشرة.

بعض القرارات تحتاج توثيق.

مثل:

    رفض التجميد.

    رفض النقل.

    رفض التعويض.

    رفض الاسترداد.

يسجل:

    القرار.

    السبب.

    المرفقات.

    التعليقات.

    صاحب القرار.

    التاريخ.

13.6 Financial History

أي عملية مالية يجب أن تكون غير قابلة للحذف.

يشمل:

    الفواتير.

    المدفوعات.

    الاستردادات.

    الخصومات.

    التسويات.

مع إمكانية تتبع كامل لكل حركة.
13.7 Session History

لكل حصة:

    من أنشأها.

    من غيّر وقتها.

    من غيّر المدرب.

    من سجّل الحضور.

    من كتب التقرير.

    من عدّل التقرير.

    متى أُغلقت.

13.8 Communication History

الاحتفاظ بسجل:

    الرسائل.

    التعليقات.

    المنشورات.

    الاستبيانات.

    الإعلانات.

وفق سياسة الاحتفاظ بالبيانات.
13.9 Restore History

إذا تمت استعادة عنصر مؤرشف.

يسجل:

    من قام بالاستعادة.

    متى.

    السبب.

13.10 Export History

أي عملية تصدير بيانات تسجل.

مثل:

    اسم التقرير.

    نوع الملف.

    المستخدم.

    وقت التصدير.

    عدد السجلات المصدرة.

وهذا مهم لحماية البيانات.
Business Rules
AUD-001

لا يمكن حذف سجلات الـ Audit أو تعديلها من خلال واجهة النظام.
AUD-002

كل عملية حساسة (مالية، تقييمات، صلاحيات، إعدادات) يجب أن تُسجل في الـ Audit Log.
AUD-003

أي عملية استرجاع أو تراجع (Restore / Reversal) تُسجل كحدث جديد، ولا تُمحى العملية الأصلية.
AUD-004

الـ Timeline يعرض الأحداث بصيغة مفهومة للمستخدم، بينما يحتفظ الـ Audit Log بالتفاصيل التقنية الكاملة.
AUD-005

يمكن تحديد مدة الاحتفاظ بسجلات النشاط وفق سياسات الأكاديمية، مع منع حذف السجلات التي تفرض اللوائح أو السياسات الاحتفاظ بها.
نقطة أعتبرها إضافة احترافية جدًا
Event Store

أنصح بتصميم النظام بحيث يعتمد داخليًا على مفهوم Business Events.

أمثلة:

    StudentRegistered

    TrialCompleted

    SubscriptionActivated

    AttendanceRecorded

    SessionCompleted

    EvaluationPublished

    StudentPromoted

    SubscriptionFrozen

كل حدث يُسجل مرة واحدة، ثم تستخدمه الوحدات الأخرى لإرسال الإشعارات، تحديث الـ Timeline، إنشاء التقارير، أو تنفيذ أي عمليات لاحقة.

This approach may reduce coupling between modules inside the approved Modular Monolith. It does not authorize distributed services: event handling, audit persistence and any later module extraction must follow `../00_GOVERNANCE/ARCHITECTURE_RULES.md` and the technical ADR protocol.


---
## 📋 Document Reference Metadata
- **Document Title**: Chapter 13 — Audit, Activity & History Management
- **Category Directory**: `10_SECURITY_COMPLIANCE`
- **Legacy Standard Label**: Enterprise Academy Platform BRD/SRS Specification v1.0 (approval not verified)
- **Target Audience**: Software Architects, Core Developers, QA Engineers, Product Managers
- **Governance Status**: Supporting or legacy source; consult `00_GOVERNANCE/SOURCE_OF_TRUTH.md` before use.
---

## 🎯 Executive Summary & Purpose
This document is a supporting downstream specification migrated from **Chapter 13 — Audit, Activity & History Management** within the **Academy Sports Management Platform**. 
It defines functional requirements, domain rules, operational boundaries, dynamic flows, and architectural constraints necessary to implement, validate, and maintain the system.

---


---
## 🔗 Cross-Module References & Invariants Matrix
- **Core Domain Boundary**: `03_DOMAIN_DOCUMENTATION` (`../03_DOMAIN_DOCUMENTATION/` — legacy path superseded)
- **Business Rules Catalog**: `05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` (`../05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` — legacy path superseded)
- **Database Model**: `07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` (`../07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` — legacy path superseded)
- **API Specification**: `08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` (`../08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` — legacy path superseded)
- **Global Index Sitemap**: `INDEX.md` (`../INDEX.md` — legacy path superseded)
