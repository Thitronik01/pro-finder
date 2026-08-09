import { describe, expect, it } from 'vitest';
import {
  ContentSegmentSchema,
  loadAllContentSegments,
  segmentChecksum,
} from '@/lib/content/segment-schema.mjs';

describe('Versionierte Content-Segmente', () => {
  it('alle Segmentdateien validieren gegen Schema v1', () => {
    const all = loadAllContentSegments();
    expect(all.length).toBeGreaterThan(0);
    for (const { segment } of all) {
      expect(() => ContentSegmentSchema.parse(segment)).not.toThrow();
    }
  });

  it('segment_key und checksum sind eindeutig beziehungsweise aktuell', () => {
    const all = loadAllContentSegments();
    const keys = all.map(({ segment }) => segment.segment_key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const { file, segment } of all) {
      expect(segment.checksum, file).toBe(segmentChecksum(segment.body_md));
    }
  });

  it('sicherheitsrelevante Segmente sind nicht freigegeben', () => {
    for (const { file, segment } of loadAllContentSegments()) {
      if (segment.safety_class !== 'normal') {
        expect(segment.review_status, file).not.toBe('freigegeben');
      }
    }
  });
});
