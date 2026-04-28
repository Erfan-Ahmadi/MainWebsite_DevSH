// Visual concept components for each expertise area

function FlameGraphVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md bg-neutral-900/50">
      {/* Flame graph bars representing execution time reduction */}
      <div className="absolute inset-0 flex items-end justify-around px-2 pb-2 gap-1">
        {/* Before optimization - tall bars */}
        <div className="flex flex-col gap-0.5 items-center">
          <div className="w-3 sm:w-4 h-28 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-t opacity-40" />
          <span className="text-[8px] text-neutral-500">Before</span>
        </div>
        <div className="w-2 sm:w-3 h-24 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-t opacity-40" />
        <div className="w-3 sm:w-4 h-32 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-t opacity-40" />
        <div className="w-2 sm:w-3 h-20 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-t opacity-40" />
        
        {/* Divider */}
        <div className="w-px h-36 bg-neutral-700" />
        
        {/* After optimization - short bars with glow */}
        <div className="flex flex-col gap-0.5 items-center">
          <div className="w-3 sm:w-4 h-8 bg-gradient-to-t from-devsh to-devsh-light rounded-t shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
          <span className="text-[8px] text-neutral-500">After</span>
        </div>
        <div className="w-2 sm:w-3 h-6 bg-gradient-to-t from-devsh to-devsh-light rounded-t shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
        <div className="w-3 sm:w-4 h-10 bg-gradient-to-t from-devsh to-devsh-light rounded-t shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
        <div className="w-2 sm:w-3 h-5 bg-gradient-to-t from-devsh to-devsh-light rounded-t shadow-[0_0_20px_rgba(20,184,166,0.5)]" />
      </div>
      
      {/* Performance indicator */}
      <div className="absolute top-2 right-2 text-xs font-mono text-devsh">
        -85% exec time
      </div>
    </div>
  );
}

function PathTracingVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md bg-neutral-900/50">
      {/* Split screen effect */}
      <div className="absolute inset-0 flex">
        {/* Noisy side */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-600">
            {/* Noise pattern via dots */}
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-neutral-500"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8,
                }}
              />
            ))}
          </div>
          <div className="absolute bottom-2 left-2 text-[10px] text-neutral-400 font-mono">Noisy</div>
        </div>
        
        {/* Divider line with glow */}
        <div className="w-0.5 h-full bg-devsh shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
        
        {/* Clean denoised side */}
        <div className="w-1/2 h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900">
            {/* Smooth gradient sphere representation */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-devsh/30 via-neutral-800 to-neutral-900 shadow-inner" />
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-devsh font-mono">Denoised</div>
        </div>
      </div>
    </div>
  );
}

function CADVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md bg-neutral-900/50">
      <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full p-4">
        {/* Wireframe side */}
        <g className="stroke-neutral-500 fill-none stroke-[0.5]">
          <polygon points="20,70 50,20 80,70" />
          <polygon points="50,20 80,70 95,40" />
          <line x1="50" y1="20" x2="65" y2="50" />
          <line x1="20" y1="70" x2="50" y2="85" />
          <line x1="80" y1="70" x2="50" y2="85" />
        </g>
        
        {/* Transition arrow */}
        <path d="M100,50 L115,50 M110,45 L115,50 L110,55" className="stroke-devsh stroke-2 fill-none" />
        
        {/* Shaded solid side */}
        <g>
          <polygon points="130,70 160,20 190,70" className="fill-neutral-700" />
          <polygon points="160,20 190,70 175,50" className="fill-neutral-600" />
          <polygon points="130,70 160,85 190,70" className="fill-neutral-800" />
          {/* Highlight edge */}
          <line x1="160" y1="20" x2="190" y2="70" className="stroke-devsh stroke-[0.5]" />
        </g>
      </svg>
      
      <div className="absolute bottom-2 left-2 text-[10px] text-neutral-400 font-mono">Wireframe</div>
      <div className="absolute bottom-2 right-2 text-[10px] text-devsh font-mono">Shaded</div>
    </div>
  );
}

function FPSGraphVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md bg-neutral-900/50 p-4">
      {/* FPS graph line */}
      <svg viewBox="0 0 200 80" className="w-full h-full">
        {/* Grid lines */}
        <g className="stroke-neutral-800 stroke-[0.5]">
          <line x1="0" y1="20" x2="200" y2="20" />
          <line x1="0" y1="40" x2="200" y2="40" />
          <line x1="0" y1="60" x2="200" y2="60" />
        </g>
        
        {/* Before optimization - low FPS line */}
        <path
          d="M0,55 Q25,58 50,52 T100,55"
          className="stroke-red-500/60 stroke-2 fill-none"
        />
        
        {/* Optimization point */}
        <circle cx="100" cy="55" r="3" className="fill-devsh" />
        
        {/* After optimization - high FPS line with glow */}
        <path
          d="M100,55 Q110,40 120,15 T150,12 Q175,10 200,8"
          className="stroke-devsh stroke-2 fill-none"
          style={{ filter: 'drop-shadow(0 0 4px rgba(20,184,166,0.6))' }}
        />
        
        {/* Labels */}
        <text x="5" y="15" className="fill-neutral-500 text-[8px] font-mono">144fps</text>
        <text x="5" y="58" className="fill-neutral-500 text-[8px] font-mono">30fps</text>
      </svg>
      
      <div className="absolute top-2 right-2 text-xs font-mono text-devsh">
        +380% FPS
      </div>
    </div>
  );
}

function VRVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-md bg-neutral-900/50 flex items-center justify-center">
      {/* VR Headset wireframe */}
      <svg viewBox="0 0 120 60" className="w-32 h-16">
        {/* Headset outline */}
        <rect x="10" y="10" width="100" height="40" rx="8" className="stroke-neutral-500 stroke-[1.5] fill-none" />
        
        {/* Left lens */}
        <circle cx="40" cy="30" r="12" className="stroke-devsh stroke-[1.5] fill-devsh/10" />
        
        {/* Right lens */}
        <circle cx="80" cy="30" r="12" className="stroke-devsh stroke-[1.5] fill-devsh/10" />
        
        {/* Bridge */}
        <line x1="52" y1="30" x2="68" y2="30" className="stroke-neutral-600 stroke-[1]" />
        
        {/* Glow effect on lenses */}
        <circle cx="40" cy="30" r="12" className="fill-none stroke-devsh/30 stroke-4" style={{ filter: 'blur(4px)' }} />
        <circle cx="80" cy="30" r="12" className="fill-none stroke-devsh/30 stroke-4" style={{ filter: 'blur(4px)' }} />
      </svg>
      
      {/* Latency metrics */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="text-center">
          <div className="text-devsh font-mono text-sm font-bold">{"<"}1ms</div>
          <div className="text-neutral-500 text-[8px]">Frame Time</div>
        </div>
        <div className="text-center">
          <div className="text-devsh font-mono text-sm font-bold">90Hz+</div>
          <div className="text-neutral-500 text-[8px]">Refresh Rate</div>
        </div>
      </div>
    </div>
  );
}

const expertiseData = [
  {
    title: "High-Performance Compute & Optimization",
    Visual: FlameGraphVisual,
  },
  {
    title: "Advanced Rendering & Path Tracing",
    Visual: PathTracingVisual,
  },
  {
    title: "CAD Visualization & Geometry Processing",
    Visual: CADVisual,
  },
  {
    title: "Real-Time Graphics & Engine Optimization",
    Visual: FPSGraphVisual,
  },
  {
    title: "VR/AR Optimization",
    Visual: VRVisual,
  },
];

function ExpertiseCard({ title, Visual }: { title: string; Visual: React.ComponentType }) {
  return (
    <div className="group flex flex-col bg-neutral-900/30 border border-neutral-800 rounded-lg overflow-hidden hover:border-devsh/50 transition-colors">
      <Visual />
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-devsh transition-colors my-0">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ExpertiseGrid() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 my-0">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} title={item.title} Visual={item.Visual} />
          ))}
        </div>
      </div>
    </section>
  );
}
