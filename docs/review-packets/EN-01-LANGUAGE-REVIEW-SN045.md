# EN-01: English language review, tasks 01–05 from SN-045

Status: prepared for independent language review · Date: 2026-08-11 · No approval recorded

This packet covers the first English vertical slice derived from the reviewed German
master for the device generation **from SN-045**. The five files remain
`review_status: entwurf`. This packet is a review aid, not a language, technical or legal
approval.

## Scope

| Position | English task                   | German master                 | Primary source pages                          |
| -------- | ------------------------------ | ----------------------------- | --------------------------------------------- |
| 01       | `determine-device-generation`  | `geraetegeneration-bestimmen` | DOC-IBA-SN045 1, 2, 6, 25, 26; DOC-KA-SN045 1 |
| 02       | `choose-installation-location` | `montageort`                  | DOC-IBA-SN045 7                               |
| 03       | `wire-connections`             | `anschluesse`                 | DOC-IBA-SN045 8, 11                           |
| 04       | `prepare-and-insert-sim-card`  | `sim-karte`                   | DOC-IBA-SN045 13, 18                          |
| 05       | `install-app-and-activate`     | `app-und-aktivierung`         | DOC-IBA-SN045 6, 13–15, 18, 25                |

Automated comparison: `npm run tokens:check` compares all five pairs and must report
`5 Aufgabenpaar(e) verglichen`. Product names, serial-number boundaries, URLs and
numeric values with units must have no missing or additional token.

## Review boundaries

- Review the English wording against the German master, not against the existing English
  section of the source PDF. The source-language sections contain documented conflicts
  and are not a reliable translation memory.
- Preserve `Pro-finder`, `THITRONIK`, `THITRONIK App`, `WiPro III`,
  `WiPro III safe.lock`, `safe.lock`, `Status-LED`, `Geofencing`, `up to SN-044` and
  `from SN-045` exactly as project terminology.
- Do not add an SMS command, example phone number, coordinate, customer data, inferred
  authorisation symbol or unconfirmed support contact. BLK-004, BLK-005 and BLK-006
  remain active.
- Do not reinterpret voltages, currents, pins, cable lengths, SIM requirements or device
  states. A language reviewer may flag them but cannot technically approve them.
- The corrected electrical statement is mandatory: Pin 1 is ground (GND), Pin 8 is
  permanent positive 12 V, and the source separately requires the positive lead to be
  fused. The earlier unsupported phrase assigning the positive lead to Pin 1 must not
  reappear.
- Every change requested by the reviewer needs the task path, field, proposed wording and
  reason. A second person must apply or accept safety-relevant changes.

## Reviewer checklist

- [ ] Reviewer identity, role, English proficiency and review date recorded.
- [ ] All five English tasks compared field by field with their German master.
- [ ] Meaning, modality and negation preserved in warnings and troubleshooting.
- [ ] Technical tokens and source page references unchanged in meaning.
- [ ] Figure alternatives and table headers understandable without the image.
- [ ] No German user-interface sentence remains except quoted source wording and section
      titles that are deliberately identified as German.
- [ ] No SMS command string or inferred programming rule introduced.
- [ ] Open contradictions remain explicit rather than silently resolved.
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
all accepted changes are traceable, protected-token checks remain green and no
safety-relevant task is promoted beyond the documented review state without a separate
technical decision.
