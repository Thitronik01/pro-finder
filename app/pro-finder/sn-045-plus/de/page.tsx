import type { Metadata } from 'next';
import { GuideOverview } from '@/components/GuideOverview';

export const metadata: Metadata = {
  title: 'Anleitung ab SN-045 (Deutsch)',
  description:
    'Barrierefreie Anleitung für den THITRONIK Pro-finder der Gerätegeneration ab SN-045.',
};

export default function Page() {
  return <GuideOverview generation="sn-045-plus" language="de" />;
}
