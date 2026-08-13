import type { Metadata } from 'next';
import { loadTasks, loadTask } from '@/lib/content/content';
import { TaskView } from '@/components/TaskView';

export function generateStaticParams() {
  return loadTasks('sn-045-plus', 'en').map((t) => ({ task: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ task: string }>;
}): Promise<Metadata> {
  const { task } = await params;
  const t = loadTask('sn-045-plus', 'en', task);
  return {
    title: t ? `${t.title} (from SN-045)` : 'Task not found',
  };
}

export default async function Page({ params }: { params: Promise<{ task: string }> }) {
  const { task } = await params;
  return <TaskView generation="sn-045-plus" language="en" slug={task} />;
}
