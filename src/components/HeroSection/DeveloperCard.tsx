export default function DeveloperCard() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-surface shadow-lg">
      {/* Window header */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="font-mono text-xs text-muted-foreground">
          developer.ts
        </span>
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-5 font-mono text-sm leading-7 sm:text-base">
        <div>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-400">developer</span>{" "}
          <span className="text-foreground">= {"{"}</span>
        </div>

        <div className="pl-5">
          <span className="text-foreground">location:</span>{" "}
          <span className="text-[#81B88B]">"Chicago, IL"</span>,
        </div>

        <div className="pl-5">
          <span className="text-foreground">focus:</span>{" "}
          <span className="text-[#81B88B]">"Frontend Development"</span>,
        </div>

        <div className="pl-5">
          <span className="text-foreground">stack:</span>{" "}
          <span className="text-foreground">[</span>
          <span className="text-[#81B88B]">"React"</span>,{" "}
          <span className="text-[#81B88B]">"TypeScript"</span>,{" "}
          <span className="text-[#81B88B]">"Node.js"</span>
          <span className="text-foreground">]</span>,
        </div>

        <div className="pl-5">
          <span className="text-foreground">education:</span>{" "}
          <span className="sm:hidden text-[#81B88B]">"M.S. Info Systems"</span>
          <span className="hidden sm:inline text-[#81B88B]">
            "M.S. Information Systems"
          </span>,
          
        </div>

        <div className="text-foreground">{"};"}</div>
      </div>
    </div>
  );
}
