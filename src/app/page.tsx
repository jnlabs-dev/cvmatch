
import { Button } from "@/app/components/ui/Button";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 space-y-4 rounded-lg shadow-sm bg-white">
        <h1 className="text-2xl font-semibold text-slate-800">CVMatch</h1>

        <Button variant="primary">Upload CV</Button>
      </div>
    </main>
  );
}
