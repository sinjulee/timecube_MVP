import { LucideIcon } from 'lucide-react';

export type TimeCubeSection =
  | 'INTELLIGENCE'
  | 'LIQUIDITY'
  | 'HEGEMONY'
  | 'SIGNALS';

export type SignalStatus =
  | 'completed'
  | 'partial'
  | 'pending'
  | 'retry_waiting'
  | 'failed'
  | 'dead_letter';

export type CircuitBreakerState = 'closed' | 'open' | 'half_open';

export interface Hypothesis {
  id: string;
  title: string;
  label: string;
  labelVariant: 'secondary' | 'outline';
  stats: number;
  ai: number;
  user: number;
  total: number;
  weight: string;
}

export interface MapNode {
  id: string;
  top: string;
  left: string;
  name: string;
  status: SignalStatus;
}

export interface MapEdge {
  id: string;
  path: string;
  status: SignalStatus;
}

export interface RecentSignal {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  status: SignalStatus;
}

export interface SystemHealth {
  circuitBreaker: CircuitBreakerState;
  latency: string;
  lastSnapshot: string;
  lastSync: string;
  affected: string[];
}

export interface PipelineStatus {
  completePercent: number;
  counts: {
    completed: string;
    partial: string;
    pending: string;
  };
}

export interface MacroScore {
  score: number;
  max: number;
  message: string;
}

export interface SyncStatus {
  state: string;
  integrity: string;
  reliability: string;
}

export interface LiquidityMetric {
  id: string;
  label: string;
  value: string;
  change: string;
}

export interface RiskAssetFlow {
  id: string;
  region: string;
  asset: string;
  flow: string;
}

export interface InflationPressure {
  id: string;
  indicator: string;
  reading: string;
  change: string;
  pressureLevel: 'low' | 'medium' | 'high';
  interpretation: string;
}

export interface RegionalReaction {
  id: string;
  region: string;
  reaction: string;
  status: 'up' | 'flat' | 'down';
}

export interface HegemonyScore {
  actor: string;
  score: number;
  trend: string;
}
