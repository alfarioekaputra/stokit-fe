import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Barcode, Calculator, Package, ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      <div className="min-h-screen">
        <div className="py-10 px-6 lg:px-10 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Stokit</div>
            <Button asChild>
              <Link to="/app/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              All-in-One Inventory Management
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Manage your inventory, sales, accounting and more with our
              integrated business management solution.
            </p>
            <Button size="lg" asChild className="h-12 px-6 text-lg">
              <Link to="/app/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              All The Tools You Need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border border-gray-200 rounded-xl text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Inventory Management</h3>
                <p className="text-gray-600">
                  Keep track of your products, stocks, and get low inventory
                  alerts.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Point of Sale (POS)</h3>
                <p className="text-gray-600">
                  Process sales quickly with an intuitive point of sale
                  interface.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Accounting</h3>
                <p className="text-gray-600">
                  Track income, expenses and generate financial reports.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Barcode className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Barcode Generator</h3>
                <p className="text-gray-600">
                  Create and print barcodes for your inventory items.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Streamline Your Business Operations
                </h2>
                <p className="text-gray-600 mb-8">
                  Stokit helps you manage all aspects of your business in one
                  place. From tracking inventory to processing sales and
                  managing your finances, our platform is designed to make your
                  business operations smoother and more efficient.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-neutral-950">
                      Real-time inventory tracking
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-neutral-950">
                      Easy sales processing with POS
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-neutral-950">
                      Comprehensive financial reporting
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-neutral-950">
                      Bulk barcode generation and printing
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Dashboard Preview</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Inventory</span>
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Sales</span>
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Accounting</span>
                  </div>
                  <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-8">
              Join thousands of businesses that use Stokit to streamline their
              operations.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-white"
              asChild
            >
              <Link to="/app/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>

        <footer className="py-10 px-6 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="font-bold text-xl text-white mb-4">Stokit</div>
              <p className="mb-6">
                All-in-one inventory and business management solution.
              </p>
              <div className="text-sm">
                © 2025 Stokit. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
