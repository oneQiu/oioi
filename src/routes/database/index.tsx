import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/database/')({
  component: DatabasePage
});

// 多维表格
function DatabasePage() {
  return <div>DatabasePage</div>;
}
