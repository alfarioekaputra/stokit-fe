import Sidebar from './sidebar';
import Header from './header';
import { Toaster } from '@/components/ui/sonner';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1">
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </ScrollArea>
      </div>
      <Toaster />
      <TanStackRouterDevtools initialIsOpen={false} />
    </div>
  );
}