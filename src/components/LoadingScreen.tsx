"use client";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50">
      <div className="w-full max-w-md mx-4">
        <div className="bg-dark-800 rounded-2xl overflow-hidden shadow-2xl border border-dark-700">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-700/50">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-3">
            <div className="flex items-center gap-2 animate-pulse">
              <span className="text-primary">$</span>
              <span className="text-gray-300">npm run start-portfolio</span>
            </div>

            <div className="space-y-2">
              <p className="text-yellow-500 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                &gt; Loading Rafael Felipe profile...
              </p>
              <p className="text-green-500 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                ✓ Skills loaded
              </p>
              <p className="text-green-500 animate-fade-in" style={{ animationDelay: "0.9s" }}>
                ✓ Certifications loaded
              </p>
              <p className="text-green-500 animate-fade-in" style={{ animationDelay: "1.2s" }}>
                ✓ Projects ready
              </p>
              <p className="text-green-500 animate-fade-in" style={{ animationDelay: "1.5s" }}>
                ✓ Contact info ready
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-dark-700">
              <span className="text-primary">$</span>
              <span className="text-gray-300">echo &quot;Welcome!&quot;</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="text-primary animate-blink">_</span>
            </div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="mt-6 h-1 bg-dark-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-progress" />
        </div>

        {/* Skip Button */}
        <button
          onClick={onComplete}
          className="mt-4 w-full py-2 text-xs text-gray-400 hover:text-primary transition-colors"
        >
          [Pular carregamento]
        </button>
      </div>
    </div>
  );
}
