import type { Metadata } from 'next';
import { GuideOverview } from '@/components/GuideOverview';

export const metadata: Metadata = {
  title: 'Manual from SN-045 (English)',
  description:
    'Accessible manual for the THITRONIK Pro-finder, device generation from SN-045. Pilot translation.',
};

export default function Page() {
  return <GuideOverview generation="sn-045-plus" language="en" />;
}
