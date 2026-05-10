import { Loader } from 'lucide-react';
import { RecentSignal } from '../../types/timecube';
import { signalStyles } from './statusStyles';

export default function RecentSignals({ signals }: { signals: RecentSignal[] }) {
  return (
    <section className='bg-white border border-tc-line p-8 rounded-xl'>
      <h3 className='text-lg font-semibold mb-4'>Detected Signals</h3>
      <div className='space-y-3'>
        {signals.map((signal) => {
          const Icon = signal.icon;
          const statusStyle = signalStyles[signal.status];

          return (
            <div
              key={signal.id}
              className={`flex items-center justify-between p-4 border rounded-xl ${statusStyle.wrapper}`}
            >
              <div className='flex items-center gap-3'>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${statusStyle.iconBg} ${statusStyle.iconColor}`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className='font-medium'>{signal.title}</p>
                  <p className='text-sm text-slate-600'>{signal.subtitle}</p>
                </div>
              </div>
              {signal.status === 'retry_waiting' && (
                <Loader className='animate-spin text-slate-500' size={18} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
