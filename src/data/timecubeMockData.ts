import { Activity, AlertTriangle, Archive, Landmark, RefreshCcw } from 'lucide-react';
import { CircuitBreakerState, Hypothesis, MacroScore, MapEdge, MapNode, PipelineStatus, RecentSignal, SystemHealth, SyncStatus } from '../types/timecube';

export const mockPipelineStatus: PipelineStatus = { completePercent: 78, counts: { completed: '85%', partial: '15%', pending: '0%' } };
export const mockMacroScore: MacroScore = { score: 42.8, max: 100, message: 'Nominal stability threshold maintained.' };
export const mockSyncStatus: SyncStatus = { state: 'Live Synchronized', integrity: '99.9%', reliability: 'High' };
export const mockHypotheses: Hypothesis[] = [{ id: 'h1', title: 'Unipolar Drift', label: 'Possible relevance', labelVariant: 'secondary', stats: 45, ai: 20, user: 10, total: 75, weight: 'Medium' }, { id: 'h2', title: 'Resource Hegemony', label: 'Evidence strength: low', labelVariant: 'outline', stats: 20, ai: 15, user: 0, total: 35, weight: 'Inconclusive' }];
export const mockMapNodes: MapNode[] = [{ id: 'n1', top: '60%', left: '62%', name: 'Riyadh', status: 'completed' }, { id: 'n2', top: '35%', left: '22%', name: 'DC', status: 'partial' }, { id: 'n3', top: '48%', left: '82%', name: 'Unknown', status: 'pending' }];
export const mockMapEdges: MapEdge[] = [{ id: 'e1', path: 'M220,165 Q400,120 490,240', status: 'completed' }];
export const mockRecentSignals: RecentSignal[] = [
  { id: 's1', title: 'ECB Pivot Forecast', subtitle: 'Sync Complete • 4m ago', icon: Landmark, status: 'completed' },
  { id: 's2', title: 'Bonds Market Depth', subtitle: 'Connectivity issues detected', icon: RefreshCcw, status: 'retry_waiting' },
  { id: 's3', title: 'Pipeline: SEA Index', subtitle: 'Auth Error', icon: AlertTriangle, status: 'failed' },
  { id: 's4', title: 'Archived Signal: Brent', subtitle: 'Unroutable Source', icon: Archive, status: 'dead_letter' },
  { id: 's5', title: 'Regional Liquidity Pulse', subtitle: 'Partial ingest', icon: Activity, status: 'partial' }
];
export const mockSystemHealth: SystemHealth = { circuitBreaker: 'open' as CircuitBreakerState, latency: '14ms', lastSnapshot: '12 min ago', lastSync: '0.4s ago', affected: ['LME_METALS', 'SGX_COMM', 'CME_GRAINS'] };
