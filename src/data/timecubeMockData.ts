import {
  Activity,
  AlertTriangle,
  Archive,
  Landmark,
  RefreshCcw,
} from 'lucide-react';
import {
  CircuitBreakerState,
  CorePressure,
  HegemonyScore,
  Hypothesis,
  MacroScore,
  MapEdge,
  MapNode,
  PipelineStatus,
  RecentSignal,
  RegionalReaction,
  HegemonyReaction,
  SettlementPressure,
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


export const mockCorePressures: CorePressure[] = [
  {
    id: 'cp1',
    title: 'Funding markets tightening ahead of roll-over window',
    pressureType: 'liquidity',
    targetSection: 'LIQUIDITY',
    severity: 'high',
    summary: 'Short-term funding conditions are tightening in major dollar corridors.',
  },
  {
    id: 'cp2',
    title: 'Sticky services inflation remains above policy comfort zone',
    pressureType: 'inflation',
    targetSection: 'LIQUIDITY',
    severity: 'medium',
    summary: 'Core services prices are cooling slowly, limiting near-term easing confidence.',
  },
  {
    id: 'cp3',
    title: 'Cross-bloc rhetoric increasing strategic policy uncertainty',
    pressureType: 'hegemony',
    targetSection: 'HEGEMONY',
    severity: 'medium',
    summary: 'Escalating policy signaling is raising volatility in geopolitical risk pricing.',
  },
  {
    id: 'cp4',
    title: 'Equity breadth divergence hints at fragile risk appetite',
    pressureType: 'market',
    targetSection: 'SIGNALS',
    severity: 'low',
    summary: 'Index strength is concentrated, while broad participation remains uneven.',
  },
];

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

export const mockHegemonyReactions: HegemonyReaction[] = [
  {
    id: 'hr1',
    actor: 'United States',
    region: 'Americas',
    stance: 'defensive',
    summary: 'Maintains sanctions architecture and treasury market depth to preserve dollar network effects.',
    relevanceScore: 82,
  },
  {
    id: 'hr2',
    actor: 'China',
    region: 'Asia',
    stance: 'expansive',
    summary: 'Expands bilateral settlement rails and commodity invoicing pilots outside dollar channels.',
    relevanceScore: 78,
  },
  {
    id: 'hr3',
    actor: 'Europe',
    region: 'Europe',
    stance: 'hedging',
    summary: 'Pursues strategic autonomy while retaining transatlantic liquidity coordination safeguards.',
    relevanceScore: 69,
  },
  {
    id: 'hr4',
    actor: 'Middle East',
    region: 'Middle East',
    stance: 'hedging',
    summary: 'Diversifies settlement partners while anchoring energy export optionality to multiple currencies.',
    relevanceScore: 74,
  },
];

export const mockSettlementPressures: SettlementPressure[] = [
  {
    id: 'sp1',
    title: 'Energy settlement diversification pressure',
    pressureType: 'energy',
    severity: 'high',
    summary: 'Oil and LNG contracts are increasingly negotiated with non-USD settlement flexibility clauses.',
  },
  {
    id: 'sp2',
    title: 'US Treasury demand concentration risk',
    pressureType: 'treasury',
    severity: 'medium',
    summary: 'Foreign official demand is uneven, increasing reliance on domestic and leveraged buyers.',
  },
  {
    id: 'sp3',
    title: 'Reserve mix rebalancing',
    pressureType: 'reserve',
    severity: 'medium',
    summary: 'Central banks continue gradual diversification toward gold amid geopolitical fragmentation.',
  },
  {
    id: 'sp4',
    title: 'Stablecoin corridor expansion',
    pressureType: 'stablecoin',
    severity: 'low',
    summary: 'Dollar-backed stablecoins deepen cross-border usage, competing with bank-led settlement rails.',
  },
  {
    id: 'sp5',
    title: 'Gold and Bitcoin neutral-asset hedge bids',
    pressureType: 'settlement',
    severity: 'medium',
    summary: 'Non-sovereign reserve assets are increasingly used as political-risk hedges in payment planning.',
  },
];
