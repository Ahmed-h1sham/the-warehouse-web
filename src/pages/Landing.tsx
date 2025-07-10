import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="bg-brand w-10 h-10 flex items-center justify-center font-bold text-black rounded-full">WH</div>
          <span className="text-xl font-bold text-brand">The Warehouse</span>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a className="hover:text-brand" href="#">Services</a>
          <a className="hover:text-brand" href="#">About</a>
          <a className="hover:text-brand" href="#">Contact</a>
        </nav>
        <Button>Get Started</Button>
      </header>

      <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          From Stock to Ship,<br />
          <span className="text-brand">We Handle It All</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          From stock reception to smart warehousing, seamless distribution, and precise order fulfillment— The Warehouse gets it stored, sorted, and shipped!
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">
            Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      <section className="py-16 bg-black text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At The Warehouse, we streamline inventory management, warehousing, and order fulfillment,
          allowing business owners to focus on growth while we handle their logistics & operations.
        </p>
      </section>
    </div>
  );
}
