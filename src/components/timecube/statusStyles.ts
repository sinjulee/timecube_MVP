import { SignalStatus } from '../../types/timecube';

export const signalStyles: Record<SignalStatus, { wrapper: string; iconBg: string; iconColor: string }> = {
  completed: { wrapper: 'border-transparent hover:border-tc-line', iconBg: 'bg-tc-primary/10', iconColor: 'text-tc-primary' },
  partial: { wrapper: 'border-amber-300/40 bg-amber-50/40', iconBg: 'bg-amber-100', iconColor: 'text-amber-700' },
  pending: { wrapper: 'border-dashed border-slate-300 opacity-80', iconBg: 'bg-slate-100', iconColor: 'text-slate-500' },
  retry_waiting: { wrapper: 'border-transparent', iconBg: 'bg-indigo-100', iconColor: 'text-slate-600' },
  failed: { wrapper: 'border-rose-400/20 bg-rose-50/50', iconBg: 'bg-rose-400/10', iconColor: 'text-rose-500' },
  dead_letter: { wrapper: 'opacity-40', iconBg: 'bg-slate-200', iconColor: 'text-slate-500' }
};
