import {
  Activity,
  AlertTriangle,
  Archive,
  Landmark,
  RefreshCcw,
} from 'lucide-react';
import {
  CircuitBreakerState,
  HegemonyScore,
  Hypothesis,
  MacroScore,
  MapEdge,
  MapNode,
  PipelineStatus,
  RecentSignal,
  RegionalReaction,
  RiskAssetFlow,
  InflationPressure,
  SystemHealth,
  SyncStatus,
  LiquidityMetric,
} from '../types/timecube';

export const mockPipelineStatus: PipelineStatus = {
  completePercent: 78,
  counts: {
    completed: '85%',
    partial: '15%',
    pending: '0%',
  },
};

export const mockMacroScore: MacroScore = {
  score: 42.8,
  max: 100,
  message: 'Nominal stability threshold maintained.',
};

export const mockSyncStatus: SyncStatus = {
  state: 'Live Synchronized',
  integrity: '99.9%',
  reliability: 'High',
};

export const mockHypotheses: Hypothesis[] = [
  {
    id: 'h1',
    title: 'Unipolar Drift',
    label: 'Possible relevance',
    labelVariant: 'secondary',
    stats: 45,
    ai: 20,
    user: 10,
    total: 75,
    weight: 'Medium',
  },
  {
    id: 'h2',
    title: 'Resource Hegemony',
    label: 'Evidence strength: low',
    labelVariant: 'outline',
    stats: 20,
    ai: 15,
    user: 0,
    total: 35,
    weight: 'Inconclusive',
  },
];

export const mockMapNodes: MapNode[] = [
  { id: 'n1', top: '60%', left: '62%', name: 'Riyadh', status: 'completed' },
  { id: 'n2', top: '35%', left: '22%', name: 'DC', status: 'partial' },
  { id: 'n3', top: '48%', left: '82%', name: 'Unknown', status: 'pending' },
];

export const mockMapEdges: MapEdge[] = [
  { id: 'e1', path: 'M220,165 Q400,120 490,240', status: 'completed' },
];

export const mockRecentSignals: RecentSignal[] = [
  {
    id: 's1',
    title: 'ECB Pivot Forecast',
    subtitle: 'Sync Complete • 4m ago',
    icon: Landmark,
    status: 'completed',
  },
  {
    id: 's2',
    title: 'Bonds Market Depth',
    subtitle: 'Connectivity issues detected',
    icon: RefreshCcw,
    status: 'retry_waiting',
  },
  {
    id: 's3',
    title: 'Pipeline: SEA Index',
    subtitle: 'Auth Error',
    icon: AlertTriangle,
    status: 'failed',
  },
  {
    id: 's4',
    title: 'Archived Signal: Brent',
    subtitle: 'Unroutable Source',
    icon: Archive,
    status: 'dead_letter',
  },
  {
    id: 's5',
    title: 'Regional Liquidity Pulse',
    subtitle: 'Partial ingest',
    icon: Activity,
    status: 'partial',
  },
];

export const mockSystemHealth: SystemHealth = {
  circuitBreaker: 'open' as CircuitBreakerState,
  latency: '14ms',
  lastSnapshot: '12 min ago',
  lastSync: '0.4s ago',
  affected: ['LME_METALS', 'SGX_COMM', 'CME_GRAINS'],
};

export const mockLiquidityMetrics: LiquidityMetric[] = [
  { id: 'lm1', label: 'Global M2 Velocity', value: '1.31x', change: '+0.04' },
  { id: 'lm2', label: 'Funding Stress Index', value: '23.7', change: '-1.2' },
  { id: 'lm3', label: 'Cross-Currency Basis', value: '-14bp', change: '+3bp' },
];

export const mockRiskAssetFlows: RiskAssetFlow[] = [
  { id: 'rf1', region: 'US', asset: 'NASDAQ 100', flow: '+$2.1B' },
  { id: 'rf2', region: 'EU', asset: 'STOXX 600', flow: '+$0.8B' },
  { id: 'rf3', region: 'APAC', asset: 'HSI', flow: '-$0.6B' },
];

export const mockInflationPressures: InflationPressure[] = [
  {
    id: 'ip1',
    indicator: 'US Core CPI Nowcast',
    reading: '3.1% YoY',
    change: '+0.2pp',
    pressureLevel: 'high',
    interpretation: 'Services inflation persistence is re-accelerating short-term pricing pressure.',
  },
  {
    id: 'ip2',
    indicator: 'EU 5Y5Y Inflation Swap',
    reading: '2.24%',
    change: '+0.05pp',
    pressureLevel: 'medium',
    interpretation: 'Inflation expectations remain anchored but show mild upside drift.',
  },
  {
    id: 'ip3',
    indicator: 'Global PPI Composite',
    reading: '49.8',
    change: '-0.6',
    pressureLevel: 'low',
    interpretation: 'Factory-gate pressures are easing, partially offsetting consumer inflation risk.',
  },
];

export const mockRegionalReactions: RegionalReaction[] = [
  { id: 'rr1', region: 'North America', reaction: 'Risk-on rotation', status: 'up' },
  { id: 'rr2', region: 'Europe', reaction: 'Selective repricing', status: 'flat' },
  { id: 'rr3', region: 'Asia', reaction: 'Defensive hedging', status: 'down' },
];

export const mockHegemonyScore: HegemonyScore = {
  actor: 'US-led bloc',
  score: 67,
  trend: 'Stable with mild downside pressure',
};
