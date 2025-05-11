import { AuthProvider } from "./auth";
import { InnerApp } from "./main";

export function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
