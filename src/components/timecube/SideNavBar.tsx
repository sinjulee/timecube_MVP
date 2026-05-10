import { Activity, Brain, Globe, Landmark } from 'lucide-react';

import { TimeCubeSection } from '../../types/timecube';

interface SideNavBarProps {
  activeSection: TimeCubeSection;
  onSectionChange: (section: TimeCubeSection) => void;
}

const items: Array<{
  label: TimeCubeSection;
  icon: typeof Brain;
}> = [
  { label: 'INTELLIGENCE', icon: Brain },
  { label: 'LIQUIDITY', icon: Landmark },
  { label: 'HEGEMONY', icon: Globe },
  { label: 'SIGNALS', icon: Activity },
];

export default function SideNavBar({
  activeSection,
  onSectionChange,
}: SideNavBarProps) {
  return (
    <aside className='hidden lg:flex bg-tc-muted border-r border-tc-line w-64 flex-col py-8'>
      <nav className='px-4 space-y-1'>
        {items.map(({ label, icon: Icon }) => {
          const isActive = activeSection === label;

          return (
            <button
              key={label}
              type='button'
              onClick={() => onSectionChange(label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left ${
                isActive ? 'bg-tc-primary/10 font-bold' : 'hover:bg-white'
              }`}
            >
              <Icon size={18} />
              <span className='text-[10px] uppercase font-bold'>{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
