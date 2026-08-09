DOWNSTREAM DOCUMENT — DERIVED FROM CANONICAL BUSINESS TRUTH

This file preserves technical/downstream detail under a semantic filename. It must not override domain rules, lifecycles, decisions or open questions.

# Permission Matrix

Chapter 5 — Permission Matrix

    المبدأ الأساسي

    كل عملية في النظام تحتاج إلى صلاحية واضحة.
    ولا نعتمد على اسم الـ Role فقط، بل على Permissions مستقلة يمكن تركيبها.

Roles

ليس كل هؤلاء مستخدمين إلزاميين، لكن النظام يدعمهم.
1. Super Admin

مالك النظام.

يمتلك جميع الصلاحيات.

يمكنه:

    إدارة الإعدادات العامة.

    إنشاء الأدمن.

    إدارة الصلاحيات.

    إدارة جميع البيانات.

    الاطلاع على Audit Logs.

    إدارة الأكاديمية بالكامل.

2. Academy Admin

مدير الأكاديمية.

يمكنه:

    إنشاء الطلاب.

    إنشاء أولياء الأمور.

    إنشاء الاشتراكات.

    إنشاء المجموعات.

    إنشاء المدربين.

    تعيين المدربين.

    اعتماد التجميد.

    اعتماد النقل.

    إدارة التقارير.

    إدارة الاستبيانات.

    إدارة المنشورات.

    إدارة الإعدادات التشغيلية.

3. Supervisor

المشرف.

يمكنه:

    متابعة المدربين.

    اعتماد الحضور.

    إضافة تقييمات.

    مراجعة التقارير.

    كتابة تقارير.

    متابعة الأداء.

    استلام المهام.

لا يمكنه:

    حذف الطلاب.

    حذف الاشتراكات.

    تغيير الإعدادات العامة.

4. Coach

يمكنه:

    مشاهدة مجموعاته فقط.

    مشاهدة طلاب مجموعاته.

    تسجيل تقارير.

    إضافة تقييمات.

    الاطلاع على الحضور.

    إرسال رسائل.

لا يمكنه:

    إنشاء طالب.

    حذف اشتراك.

    تعديل الأسعار.

    إدارة المستخدمين.

5. Reception

الاستقبال.

يمكنه:

    تسجيل الطلاب.

    تسجيل أولياء الأمور.

    حجز الحصة المجانية.

    متابعة المواعيد.

    طباعة QR.

    البحث عن الطلاب.

6. Accountant

المحاسب.

يمكنه:

    إدارة المدفوعات.

    متابعة الاشتراكات.

    إصدار الفواتير.

    متابعة المديونيات.

    التقارير المالية.

لا يمكنه:

    تعديل التقييمات.

    تعديل الحضور.

    تعديل المجموعات.

7. Parent

يمكنه:

    مشاهدة أبنائه فقط.

    مشاهدة الاشتراكات.

    مشاهدة الحضور.

    مشاهدة التقارير.

    التعليق.

    طلب التجميد.

    طلب تغيير المجموعة.

    المراسلة.

Permissions Philosophy

لن نعتمد على:

Admin

Coach

Parent

فقط.

بل كل عملية ستكون Permission مستقلة.

مثل:

Student.Create

Student.Update

Student.Archive

Student.Restore

Subscription.Create

Subscription.Update

Subscription.Freeze

Subscription.Cancel

Subscription.Renew

Attendance.Record

Attendance.Edit

Attendance.Delete

Evaluation.Create

Evaluation.Approve

Evaluation.Publish

Coach.Assign

Coach.Replace

Coach.Transfer

Group.Create

Group.Update

Group.Archive

Survey.Create

Survey.Publish

Survey.Close

Post.Create

Post.Pin

Post.Delete

Settings.Update

Notifications.Send

وهكذا.
قاعدة مهمة جدًا

لا نعتمد على الـ Role داخل الكود.

بل نعتمد على الـ Permission.

يعني بدل:

if ($user->isAdmin())

يكون التفكير:

if ($user->can('Subscription.Freeze'))

وهذا يجعل النظام مرنًا جدًا إذا تغيرت المسؤوليات مستقبلاً.
Delegation

ميزة أقترح إضافتها من البداية.

مثلاً:

مدير الأكاديمية في إجازة.

يعطي صلاحياته للمشرف لمدة أسبوع.

ثم ترجع تلقائيًا.
Approval Matrix

هناك عمليات لا تنفذ مباشرة.

مثل:

تجميد الاشتراك.

↓

طلب

↓

موافقة

↓

تنفيذ

نفس الشيء:

    نقل الطالب.

    تغيير المدرب.

    تعديل السعر.

    حذف تقرير.

    تعديل تقييم.

    إعادة حصة.

    استرجاع اشتراك.

كلها يمكن أن تمر عبر Workflow موافقات إذا قررت الأكاديمية تفعيل ذلك.
Temporary Permissions

ميزة ممتازة أيضًا.

مثال:

اليوم فقط

يعطى المدرب صلاحية تسجيل حضور مجموعة أخرى.

ثم تنتهي تلقائيًا.
Data Visibility

مهم جدًا.

ليس كل من يستطيع رؤية الطالب يرى كل شيء.

مثلاً:

المدرب يرى:

✅ الاسم

✅ العمر

✅ المستوى

✅ التقارير

❌ المدفوعات

❌ الملاحظات المالية

❌ بيانات ولي الأمر الحساسة

المحاسب يرى:

✅ الاشتراكات

✅ الفواتير

✅ المدفوعات

❌ التقييمات الفنية

ولي الأمر يرى أبناءه فقط.
Audit

أي Permission حساسة تسجل.

مثلاً:

من غير السعر؟

من حذف التقرير؟

من غير التقييم؟

من نقل الطالب؟

من استرجع الحصة؟

كلها تسجل مع:

    المستخدم.

    الوقت.

    الجهاز (إن أمكن).

    القيمة قبل وبعد التعديل.

نقطة أريد إضافتها للمشروع

أقترح ألا تكون الصلاحيات فقط Allow / Deny.

بل تدعم مستويات، مثل:

    View: عرض فقط.

    Create: إنشاء.

    Edit: تعديل.

    Delete / Archive: حذف أو أرشفة.

    Approve: اعتماد.

    Export: تصدير البيانات.

    Manage: إدارة كاملة.

بهذا يمكن مثلًا أن يمتلك المشرف صلاحية Approve Evaluation دون أن يمتلك Delete Evaluation، مما يجعل النظام أكثر دقة ومرونة، وهو أسلوب مستخدم في الأنظمة المؤسسية الكبيرة.


---
## 📋 Document Reference Metadata
- **Document Title**: Chapter 5 — Permission Matrix
- **Category Directory**: `10_SECURITY_COMPLIANCE`
- **Legacy Standard Label**: Enterprise Academy Platform BRD/SRS Specification v1.0 (approval not verified)
- **Target Audience**: Software Architects, Core Developers, QA Engineers, Product Managers
- **Governance Status**: Supporting or legacy source; consult `00_GOVERNANCE/SOURCE_OF_TRUTH.md` before use.
---

## 🎯 Executive Summary & Purpose
This document is a supporting downstream specification migrated from **Chapter 5 — Permission Matrix** within the **Academy Sports Management Platform**. 
It defines functional requirements, domain rules, operational boundaries, dynamic flows, and architectural constraints necessary to implement, validate, and maintain the system.

---


---
## 🔗 Cross-Module References & Invariants Matrix
- **Core Domain Boundary**: `03_DOMAIN_DOCUMENTATION` (`../03_DOMAIN_DOCUMENTATION/` — legacy path superseded)
- **Business Rules Catalog**: `05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` (`../05_BUSINESS_RULES/Chapter_24_Business_Rules_Catalog.md` — legacy path superseded)
- **Database Model**: `07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` (`../07_DATABASE_DESIGN/Chapter_27_Database_Design_&_Data_Model.md` — legacy path superseded)
- **API Specification**: `08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` (`../08_API_DESIGN/Chapter_28_API_Design_&_Integration_Specification.md` — legacy path superseded)
- **Global Index Sitemap**: `INDEX.md` (`../INDEX.md` — legacy path superseded)
