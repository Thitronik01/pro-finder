# EN-03: English language review, tasks 11–14 from SN-045

Status: prepared for independent language review · Date: 2026-08-11 · No approval recorded

This packet covers the third English vertical slice derived from the reviewed German
master for the device generation **from SN-045**. All four files remain
`review_status: entwurf`. This packet supports language review and grants no language,
technical, safety or legal approval.

## Scope

| Position | English task            | German master      | Primary source pages             |
| -------- | ----------------------- | ------------------ | -------------------------------- |
| 11       | `control-outputs`       | `ausgaenge`        | DOC-IBA-SN045 8–9, 11, 22–23, 25 |
| 12       | `troubleshoot-problems` | `fehlerbehebung`   | DOC-IBA-SN045 12, 18–21, 25      |
| 13       | `technical-data`        | `technische-daten` | DOC-IBA-SN045 25                 |
| 14       | `get-help-and-support`  | `support`          | DOC-IBA-SN045 25                 |

Automated comparison: `npm run tokens:check` compares tasks 01–14 and must report
`14 Aufgabenpaar(e) verglichen`. The content test checks that every English task has the
same task-level document-and-page set as its German master.

## Review boundaries

- Review against the German master, not the English section of the source PDF. Source
  translations contain documented command and technical-value conflicts.
- Preserve project terminology exactly: `Pro-finder`, `THITRONIK`, `THITRONIK App`,
  `WiPro III`, `WiPro III safe.lock`, `safe.lock`, `Status-LED` and `Geofencing`.
- Do not add any SMS command, output-B substitution rule, example coordinate, map address
  or customer-like data. BLK-005 and BLK-006 remain active.
- Task 11 is deliberately not executable: it preserves output modes, pins, electrical
  limits, durations and confirmation behaviour but omits all four command strings.
- Preserve `12 V`, `500 mA`, the one-second pulse and the range from 1 to 120 minutes.
  Reviewers may improve wording but may not approve these values.
- Task 12 must keep switch-position-dependent Status-LED meanings separate. Do not
  resolve the mode-B voltage gap, silent-alert cross-reference, GPS-field mismatch or
  the open WiPro III dependency.
- Preserve decimal commas and thresholds exactly: `11,2 V`, `12,5 V`, `13,5 V` and
  `900 m`. Do not interpret the two five-minute statements as the separate ten-minute
  GPS waiting period.
- Task 13 retains the German-master normal-current range despite the conflicting English
  source value. DSC-020 remains open and the table is not a production specification.
- Task 14 intentionally omits the historical manufacturer website, phone number and
  email address under BLK-004. The token check permits only removal of a phone token for
  position 14; adding or changing a protected contact still fails.
- Reviewers may flag technical concerns but may not approve safety-relevant values. A
  separate technical decision is required before promotion beyond draft.

## Reviewer checklist

- [ ] Reviewer identity, role, English proficiency and review date recorded.
- [ ] All four English tasks compared field by field with their German master.
- [ ] Meaning, modality and negation preserved in warnings and troubleshooting.
- [ ] Output A and B remain correctly assigned to pin 7 and pin 6.
- [ ] No SMS command or output-B syntax was introduced.
- [ ] Electrical ratings, timed-operation limits and returned status report remain clear.
- [ ] Status-LED meanings are understandable without colour alone and stay tied to the
      correct switch position.
- [ ] All unresolved source contradictions remain explicit rather than silently solved.
- [ ] Technical-data values match the German master and remain marked as drafts.
- [ ] No unconfirmed support contact appears in visible task content.
- [ ] `npm run tokens:check`, content tests and English route browser tests rerun after
      accepted changes.

## Decision record

| Field                                                  | Entry                       |
| ------------------------------------------------------ | --------------------------- |
| Reviewer                                               | open                        |
| Review date                                            | open                        |
| Tasks accepted without change                          | open                        |
| Tasks requiring changes                                | open                        |
| Safety-relevant findings escalated to technical review | open                        |
| Result                                                 | open — no language approval |

Exit criterion: an independent English-language reviewer has completed the checklist,
all accepted changes are traceable, protected-token and source-parity checks remain
green, and no safety-relevant task advances without a separate technical decision.
