# Business Requirements and Test Scenarios

These are practice requirements for the fictional scenario in [README.md](README.md). Confirm statuses, permissions, approval roles, and follow-up rules with stakeholders before treating them as real requirements.

## BR-01 — Find an invoice

**User need:** As finance staff, I want to find an invoice by reference or supplier so I can check its current status.

**Acceptance criteria**

- A matching result displays the invoice reference, supplier, amount, due date, and status.
- If there is no match, the user sees an explicit “no matching invoices” message.

**Example check:** Search for `INV-004`; confirm the matching record shows the sample amount and due date from `sample-invoices.csv`.

## BR-02 — See the current status

**User need:** As finance staff, I want to distinguish invoices awaiting approval, approved for payment, and paid.

**Acceptance criteria**

- Each invoice shows one agreed status.
- Paid records are distinguishable from open records.
- A held or rejected invoice shows a reason, if that reason is recorded and the user is authorized to see it.

**Example check:** Compare `INV-002` (Pending approval), `INV-004` (Approved for payment), and `INV-006` (Paid) in the sample.

## BR-03 — Prioritize by due date

**User need:** As finance staff, I want to sort open invoices by due date to review upcoming and overdue items.

**Acceptance criteria**

- Open invoices can be sorted by due date.
- Paid invoices are excluded from the open-invoice view.
- The due date is visible alongside the invoice status.

**Example check:** Confirm the open records can be ordered from earliest to latest due date.

## BR-04 — Review aging

**User need:** As a team lead, I want open-invoice counts and amounts grouped by overdue age.

**Acceptance criteria**

- The report displays its snapshot date.
- It separates not-yet-due, due-today, 1–30, 31–60, and over-60-day items.
- Counts and totals can be traced to the underlying records.

**Example check:** Reproduce the 31 October 2026 breakdown in `README.md`; a record due on 31 October belongs in “due today,” not an overdue bucket.

## BR-05 — Prepare follow-up

**User need:** As authorized finance staff, I want a list of items needing attention without automatically sending supplier messages.

**Acceptance criteria**

- A follow-up list identifies the invoice, current status, due date, and responsible owner when known.
- Creating the list does not send an external message.
- Reminder timing, recipients, and escalation rules are agreed with the organization before use.

**Example check:** Review an overdue sample invoice and confirm it can be identified for a human follow-up decision without triggering an email.
