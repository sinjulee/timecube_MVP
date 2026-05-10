import {
  mockCorePressures,
  mockHegemonyScore,
  mockHegemonyReactions,
  mockHypotheses,
  mockInflationPressures,
  mockLiquidityMetrics,
  mockMacroScore,
  mockMapEdges,
  mockMapNodes,
  mockPipelineStatus,
  mockRecentSignals,
  mockRegionalReactions,
  mockRiskAssetFlows,
  mockSettlementPressures,
  mockSyncStatus,
} from '../../data/timecubeMockData';
import { TimeCubeSection } from '../../types/timecube';
import DataQualityMonitor from './DataQualityMonitor';
import GlobalEventMap from './GlobalEventMap';
import HegemonyHypotheses from './HegemonyHypotheses';
import MacroPressureCard from './MacroPressureCard';
import PipelineSyncCard from './PipelineSyncCard';
import RecentSignals from './RecentSignals';
import TrendChart from './TrendChart';

const inflationPressureBadgeStyles: Record<'low' | 'medium' | 'high', string> = {
  low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  high: 'bg-rose-50 text-rose-700 border-rose-200',
};

const corePressureBadgeStyles: Record<'low' | 'medium' | 'high', string> = {
  low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  medium: 'bg-amber-50 text-amber-700 border-amber-200',
  high: 'bg-rose-50 text-rose-700 border-rose-200',
};

const stanceBadgeStyles: Record<'defensive' | 'expansive' | 'hedging' | 'neutral', string> = {
  defensive: 'bg-blue-50 text-blue-700 border-blue-200',
  expansive: 'bg-violet-50 text-violet-700 border-violet-200',
  hedging: 'bg-amber-50 text-amber-700 border-amber-200',
  neutral: 'bg-slate-50 text-slate-700 border-slate-200',
};

interface TimeCubeDashboardProps {
  activeSection: TimeCubeSection;
  onSectionChange: (section: TimeCubeSection) => void;
}

export default function TimeCubeDashboard({
  activeSection,
  onSectionChange,
}: TimeCubeDashboardProps) {
  if (activeSection === 'INTELLIGENCE') {
    return (
      <div className='max-w-[1440px] mx-auto space-y-6 pb-12'>
        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-5'>
            <h2 className='text-lg font-semibold'>Today's Core Pressure</h2>
            <span className='text-xs uppercase tracking-wide text-slate-500'>User View</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {mockCorePressures.map((pressure) => (
              <article
                key={pressure.id}
                className='border border-slate-200 rounded-lg p-4 space-y-2 cursor-pointer transition-colors hover:border-slate-300 hover:bg-slate-50'
                onClick={() => onSectionChange(pressure.targetSection)}
              >
                <div className='flex items-center justify-between gap-2'>
                  <p className='text-sm font-medium capitalize text-slate-500'>{pressure.pressureType}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-medium capitalize ${corePressureBadgeStyles[pressure.severity]}`}
                  >
                    {pressure.severity}
                  </span>
                </div>
                <h3 className='font-semibold leading-snug'>{pressure.title}</h3>
                <p className='text-sm text-slate-600 line-clamp-2'>{pressure.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <DataQualityMonitor data={mockPipelineStatus} />
          <MacroPressureCard data={mockMacroScore} />
          <PipelineSyncCard data={mockSyncStatus} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <GlobalEventMap nodes={mockMapNodes} edges={mockMapEdges} />
          <RecentSignals signals={mockRecentSignals} />
        </div>
      </div>
    );
  }

  if (activeSection === 'LIQUIDITY') {
    return (
      <div className='max-w-[1440px] mx-auto space-y-6 pb-12'>
        <TrendChart />
        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <h2 className='text-lg font-semibold mb-4'>Liquidity Metrics</h2>
          <div className='space-y-3'>
            {mockLiquidityMetrics.map((item) => (
              <div key={item.id} className='flex justify-between border-b pb-2'>
                <span>{item.label}</span>
                <span className='font-semibold'>
                  {item.value} ({item.change})
                </span>
              </div>
            ))}
          </div>
        </section>
        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <h2 className='text-lg font-semibold mb-4'>Inflation Pressure</h2>
          <div className='space-y-4'>
            {mockInflationPressures.map((item) => (
              <div key={item.id} className='border-b pb-3 last:border-b-0'>
                <div className='flex items-start justify-between gap-3'>
                  <div>
                    <p className='font-medium'>{item.indicator}</p>
                    <p className='text-sm text-slate-600'>Reading: {item.reading}</p>
                    <p className='text-sm text-slate-600'>Change: {item.change}</p>
                    <p className='text-sm text-slate-500 mt-1'>{item.interpretation}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-medium capitalize ${inflationPressureBadgeStyles[item.pressureLevel]}`}
                  >
                    {item.pressureLevel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <h2 className='text-lg font-semibold mb-4'>Risk Asset Flows</h2>
          <div className='space-y-3'>
            {mockRiskAssetFlows.map((flow) => (
              <div key={flow.id} className='flex justify-between border-b pb-2'>
                <span>
                  {flow.region} · {flow.asset}
                </span>
                <span className='font-semibold'>{flow.flow}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (activeSection === 'HEGEMONY') {
    return (
      <div className='max-w-[1440px] mx-auto space-y-6 pb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <section className='bg-white border border-tc-line p-8 rounded-xl'>
            <h2 className='text-lg font-semibold mb-4'>Hegemony Score</h2>
            <p className='text-sm text-slate-600'>{mockHegemonyScore.actor}</p>
            <p className='text-4xl font-bold my-2'>{mockHegemonyScore.score}</p>
            <p className='text-sm'>{mockHegemonyScore.trend}</p>
          </section>
          <HegemonyHypotheses data={mockHypotheses} />
        </div>

        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <h2 className='text-lg font-semibold mb-4'>Regional Power Reactions</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {mockHegemonyReactions.map((reaction) => (
              <article key={reaction.id} className='border border-slate-200 rounded-lg p-4 space-y-2'>
                <div className='flex items-center justify-between gap-3'>
                  <div>
                    <p className='font-semibold'>{reaction.actor}</p>
                    <p className='text-sm text-slate-500'>{reaction.region}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-medium capitalize ${stanceBadgeStyles[reaction.stance]}`}
                  >
                    {reaction.stance}
                  </span>
                </div>
                <p className='text-sm text-slate-600'>{reaction.summary}</p>
                <p className='text-xs text-slate-500'>Relevance score: {reaction.relevanceScore}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='bg-white border border-tc-line p-8 rounded-xl'>
          <h2 className='text-lg font-semibold mb-4'>Settlement &amp; Resource Pressure</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {mockSettlementPressures.map((pressure) => (
              <article key={pressure.id} className='border border-slate-200 rounded-lg p-4 space-y-2'>
                <div className='flex items-center justify-between gap-2'>
                  <p className='font-medium'>{pressure.title}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-medium capitalize ${corePressureBadgeStyles[pressure.severity]}`}
                  >
                    {pressure.severity}
                  </span>
                </div>
                <p className='text-xs uppercase tracking-wide text-slate-500'>{pressure.pressureType}</p>
                <p className='text-sm text-slate-600'>{pressure.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className='max-w-[1440px] mx-auto space-y-6 pb-12'>
      <RecentSignals signals={mockRecentSignals} />
      <section className='bg-white border border-tc-line p-8 rounded-xl'>
        <h2 className='text-lg font-semibold mb-4'>Regional Reactions</h2>
        <div className='space-y-3'>
          {mockRegionalReactions.map((reaction) => (
            <div key={reaction.id} className='flex justify-between border-b pb-2'>
              <span>{reaction.region}</span>
              <span>
                {reaction.reaction} ({reaction.status})
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
