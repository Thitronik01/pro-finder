# EN-02: English language review, tasks 06–10 from SN-045

Status: prepared for independent language review · Date: 2026-08-11 · No approval recorded

This packet covers the second English vertical slice derived from the reviewed German
master for the device generation **from SN-045**. All five files remain
`review_status: entwurf`. This packet supports language review and grants no language,
technical, safety or legal approval.

## Scope

| Position | English task                 | German master    | Primary source pages              |
| -------- | ---------------------------- | ---------------- | --------------------------------- |
| 06       | `manage-destination-numbers` | `zielrufnummern` | DOC-IBA-SN045 8, 10, 12, 14–18    |
| 07       | `understand-status-led`      | `status-led`     | DOC-KA-SN045 1–2                  |
| 08       | `understand-messages`        | `meldungen`      | DOC-IBA-SN045 9–10, 15, 19–22, 24 |
| 09       | `use-geofencing`             | `geofencing`     | DOC-IBA-SN045 9–10, 12, 19, 21    |
| 10       | `request-status-report`      | `statusbericht`  | DOC-IBA-SN045 9–10, 15, 19–24     |

Automated comparison: `npm run tokens:check` compares tasks 01–10 and must report
`10 Aufgabenpaar(e) verglichen`. The content test also checks that each English task has
the same task-level document-and-page set as its German master.

## Review boundaries

- Review against the German master, not the English section of the source PDF. The
  source-language sections contain documented command conflicts.
- Preserve project terminology exactly: `Pro-finder`, `THITRONIK`, `THITRONIK App`,
  `WiPro III`, `WiPro III safe.lock`, `safe.lock`, `Status-LED` and `Geofencing`.
- Do not add SMS command words, authorisation punctuation, the smartphone marker,
  example telephone numbers, coordinates or complete example map addresses. BLK-004,
  BLK-005 and BLK-006 remain active.
- Preserve decimal commas and technical thresholds exactly where the automated token
  check protects them: 11,2 V; 12,5 V; 5 V; 6 V; and 900 m.
- Do not silently decide whether pin 3 or WiPro III has priority, whether theft messages
  require an armed WiPro III, what operating modes C to F do with geofencing, what UTC
  represents, or whether the C/D values really cause automatic reports.
- A call in operating modes 2 and 3 can change the WiPro III state. Wording must never
  present that call as a harmless status-only request.
- A position accompanied by no current GPS reception is the last valid position and can
  be outdated. Wording must not present it as the current vehicle location.
- Reviewers may flag technical concerns but may not approve safety-relevant values. A
  separate technical decision is required before promotion beyond draft.

## Reviewer checklist

- [ ] Reviewer identity, role, English proficiency and review date recorded.
- [ ] All five English tasks compared field by field with their German master.
- [ ] Meaning, modality and negation preserved in warnings and troubleshooting.
- [ ] Destination-number roles remain distinct; deletion is clearly all-or-nothing.
- [ ] All nine Status-LED states are understandable without colour alone.
- [ ] All message types and the additional master-number calls remain correctly stated.
- [ ] Geofencing thresholds, reversed mode-B logic and undefined 5 V to 6 V range remain
      unchanged in meaning.
- [ ] Outdated GPS positions and the conflicting UTC descriptions remain explicit.
- [ ] No forbidden command string, customer-like data or inferred rule was introduced.
- [ ] Figure alternatives and tables remain understandable without the image.
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
