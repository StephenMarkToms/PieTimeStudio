import { InkOnView } from "@/components/InkOnView";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-stage">
      <InkOnView />
      {children}
    </div>
  );
}
