import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/dashboard")({
  component: DashboardComponent,
});

function DashboardComponent() {
  return <h1>Welcome Dashboard</h1>;
}
