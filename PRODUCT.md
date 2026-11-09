# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, talent-acquisition partners and hiring managers at manufacturing companies in Mexico (automotive, aerospace, electronics/EMS, microelectronics; Bajío, Querétaro, Coahuila, Guadalajara, Chihuahua) screening candidates for Senior Industrial Engineer and Continuous Improvement Lead roles.

Their situation: they arrive from a link in Angel's CV, LinkedIn, OCC/Indeed profile or an application email, usually with many candidates to review and little time. Their job is to decide in under a minute whether Angel is worth a call, then confirm the claims in his CV with concrete evidence.

Secondary: the hiring manager (plant/engineering/CI manager) who reads deeper before or after an interview.

## Product Purpose

A personal portfolio whose only goal is to get Angel interviews for Senior IE / Continuous Improvement Lead roles. Success = a recruiter understands who he is and what he has delivered within the first screen, finds proof behind each number, and contacts him (email, LinkedIn) or downloads the CV.

It is not a freelance services site. Service offerings (web development, training, "work flow") are out of scope.

## Positioning

Senior Industrial Engineer & Continuous Improvement Lead: an engineer who measures (time studies, MODAPTS, OEE, headcount and direct-labor-cost models) and then builds his own tools to sustain the improvement (Excel/VBA applications, KPI dashboards, Python). Proof that a neighbor candidate cannot copy: a direct-labor-cost segregation model presented to Nissan Japan leadership that drove a promotion from Jr IE straight to Senior IE, and VBA tools that removed 1,500+ man-hours per month.

Maintenance (current role) is not part of the headline; it appears factually in the work history only.

## Operating Context

- Static site hosted on GitHub Pages: angelserna23.github.io/myWeb (repo angelserna23/myWeb, branch main).
- Plain HTML + SCSS (compiled with `sass` to css/main.css) + vanilla JavaScript. No framework, no build step beyond Sass.
- Pages: index, workExperience, awards (projects), education, certifications, terms, privacy.
- Recruiters open it on desktop during screening and on phones from LinkedIn/WhatsApp; shared links must preview well.
- The CV PDF (assets/) is the companion document; site and CV must state the same numbers and titles.

## Capabilities and Constraints

- Bilingual: English default with a Spanish version (EN/ES switch). Decided 2026-11-09; implementation approach still open.
- Removed by decision (2026-11-09): freelance service sections, percentage skill bars, Facebook and Instagram links.
- Kept: LinkedIn, email, phone, CV download, OCC CV link (pending confirmation).
- Terminology: OEE (not "OOE"); MXN; man-hours/month.
- Open: whether to keep the OCC CV link; consolidation of the three CV PDFs in assets/ into one current version.

## Brand Commitments

- Name: Ángel Andrés Hernández Serna (displayed as "Angel Serna").
- Existing logo assets: img/logo__header_blanco.png, img/logo__footer.png.
- Voice: direct, factual, numbers first; no inflated claims. English level B2 and French B2 are stated honestly, never overstated.

## Evidence on Hand

Confirmed by Angel (also in CV):
- JATCO México career: Quality Engineering Intern (Jul 2022) → Jr IE (Dec 2022) → Senior IE (Mar 2025), skipping the intermediate level.
- 93% scrap reduction (BRP casting); 24% OEE improvement (Nissan CVT8); 98+ headcount positions optimized; 60% monthly workforce-efficiency improvement (JATCO/Nissan Japan project); JCP VBA tool removing 1,500+ man-hours/month; BIS VBA application for IE/OEE study traceability; led a 14-person cross-functional team across 3 facilities; built 3 KPI dashboards from scratch.
- Awards: DX Competition FY23 2nd place (JCP), FY24 3rd place (BIS).
- Flor de Calvillo (Nov 2025 – Mar 2026), fixed-term project.
- ABC Autolíneas (Mar 2026 – present), General Supervisor, Preventive/Corrective Maintenance & Continuous Improvement. Not yet on the site.
- Education: TSU Industrial Processes – Manufacturing (2018–2020); Postgraduate, Measurement, Quality and Industrial Automation, Université de Lille (2020–2021); B.Eng. Industrial Engineering (2021–2023); Full Stack Python diploma, EBAC (in progress).
- Certifications: Yellow Belt (International Lean Six Sigma, 2025), White Belt (2024), Lean Productive Staff, 7 Statistical Tools, Core Tools (APQP, FMEA, SPC), Kaizen & problem solving (JATCO internal), VBA with distinction (Lille).
- Real project photos and charts in img/ (OEE charts, headcount efficiency chart, casting, assembly, Flor de Calvillo).

Inconsistencies to resolve before publishing (do not invent values):
- Home says "+20% OOE"; work experience and CV say +24% OEE.
- Home says "-$140 MMXM" cost reduction: unit and source unconfirmed.
- Work experience lists "+50% OOE" (Flor de Calvillo), "+30%" (JATCO UK & MX), "+15%", "+10%", "-200" and "-750 hrs/man month": confirm each before reuse.

Absent (must not be fabricated): testimonials, recommendation quotes, client logos, Green/Black Belt.

## Product Principles

1. Numbers first, each with its context (where, what, how measured).
2. The site and the CV never disagree.
3. Show the work: real charts, tools and photos beat icons and illustrations.
4. Thirty-second scan, five-minute depth: headline and proof up top, detail one click away.
5. Honest scope: claim only confirmed skills and levels.

## Accessibility & Inclusion

WCAG 2.1 AA contrast and minimum 16px body text (current site fails both: 2.4–3.4:1 contrast on colored tags, 9.6px text). Meaningful alt text on project images.
