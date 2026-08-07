import type { Metadata } from 'next';
import { GuideOverview } from '@/components/GuideOverview';

export const metadata: Metadata = {
  title: 'Anleitung bis SN-044 (Deutsch)',
  description:
    'Barrierefreie Anleitung für den THITRONIK Pro-finder der Gerätegeneration bis SN-044.',
};

export default function Page() {
  return <GuideOverview generation="sn-001-044" language="de" />;
}
