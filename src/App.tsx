import { mockSystemHealth } from './data/timecubeMockData';
import SideNavBar from './components/timecube/SideNavBar';
import SystemHealthFooter from './components/timecube/SystemHealthFooter';
import TimeCubeDashboard from './components/timecube/TimeCubeDashboard';
import TopAppBar from './components/timecube/TopAppBar';

export default function App(){return <div className='bg-tc-bg min-h-screen flex flex-col'><TopAppBar/><div className='flex flex-1'><SideNavBar/><main className='flex-1 p-4 md:p-8'><TimeCubeDashboard/></main></div><SystemHealthFooter healthData={mockSystemHealth}/></div>}
