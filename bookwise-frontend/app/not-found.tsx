import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <p className="text-8xl font-black text-brand-500/20 leading-none select-none">
          404
        </p>
        <h1 className="text-2xl font-bold text-foreground">Page not found</h1>
        <p className="text-sm text-muted-foreground max-w-xs">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <Button
            asChild
            className="rounded-xl px-6 bg-brand-500 hover:bg-brand-600 text-white border-0"
          >
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl px-6">
            <Link href="/book/glow-beauty">View Demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
