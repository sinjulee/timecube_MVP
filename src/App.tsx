import { useState } from 'react';

import SideNavBar from './components/timecube/SideNavBar';
import SystemHealthFooter from './components/timecube/SystemHealthFooter';
import TimeCubeDashboard from './components/timecube/TimeCubeDashboard';
import TopAppBar from './components/timecube/TopAppBar';
import { mockSystemHealth } from './data/timecubeMockData';
import { TimeCubeSection } from './types/timecube';

export default function App() {
  const [activeSection, setActiveSection] =
    useState<TimeCubeSection>('INTELLIGENCE');

  return (
    <div className='bg-tc-bg min-h-screen flex flex-col'>
      <TopAppBar />
      <div className='flex flex-1'>
        <SideNavBar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className='flex-1 p-4 md:p-8'>
          <TimeCubeDashboard
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </main>
      </div>
      <SystemHealthFooter healthData={mockSystemHealth} />
    </div>
  );
}
