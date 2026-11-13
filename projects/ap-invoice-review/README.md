# AP Invoice Review — BA Practice Case Study

**Type:** Self-initiated learning exercise  
**Scenario:** Fictional small finance team  
**Snapshot date:** 31 October 2026  
**Data:** 12 synthetic invoice records; VND

> This is a practice case study, not client work or a record of a real company. The organization, workflow, supplier names, and amounts are invented. The findings demonstrate a way to structure analysis; they are not claims about actual payment performance.

## Question

How might a small finance team get a clearer view of invoices that are waiting for review, approaching their due date, or overdue?

## Scope and assumptions

- Focus on invoice visibility, status, due dates, and follow-up.
- Treat `Pending approval` and `Approved for payment` as open; exclude `Paid`.
- Treat an invoice due on the snapshot date as due today, not overdue.
- Calculate overdue days from the due date through 31 October 2026.
- The process and requirements are assumptions to validate with finance and approvers.
- Excludes payment execution, accounting/tax advice, ERP integrations, and real approval policy.

## Deliverables

- [Process map](process-map.mmd) — assumed receipt-to-payment-record flow, including a return path for incomplete invoices.
- [Business requirements and test scenarios](requirements.md) — five user needs with observable acceptance criteria.
- [Synthetic invoice dataset](sample-invoices.csv) — 12 fictional records for discussion and reproducibility.
- [Case study page](index.html) — concise presentation of the workflow and sample analysis.

## Sample analysis

At the snapshot date, 10 records are open, totalling **VND 135.2 million**. Six are past due, totalling **VND 95.4 million** (about **70.6%** of the open balance).

| Open invoice aging | Count | Amount (VND) |
|---|---:|---:|
| Not yet due | 3 | 21,300,000 |
| Due on snapshot date | 1 | 18,500,000 |
| 1–30 days overdue | 5 | 91,000,000 |
| 31–60 days overdue | 1 | 4,400,000 |
| Over 60 days overdue | 0 | 0 |
| **Total open** | **10** | **135,200,000** |

Two paid records total VND 16.5 million and are excluded from open and overdue figures.

### How to reproduce

1. Open `sample-invoices.csv` in a spreadsheet.
2. Use 31 October 2026 as the fixed snapshot date.
3. Filter out `Paid` records to calculate open invoices and open amount.
4. For remaining records with a due date before the snapshot date, subtract the due date from the snapshot date and group into 1–30, 31–60, and over-60-day buckets.
5. Keep records due on the snapshot date separate from overdue records.

## What this analysis does not prove

The sample has no real payment history, policy, or operational context. A high overdue share in invented data is not evidence that a real company has late-payment issues or that a proposed dashboard would improve them. In a real engagement, validate data definitions, ownership, approval states, and follow-up rules before making recommendations.

## Interview walkthrough

Explain the case in this order: the assumed user problem, the scope and assumptions, the workflow, how overdue was defined, the sample finding, and what would need validation before proposing a real solution. This is a requirements and process-analysis exercise; it is not a deployed system.
