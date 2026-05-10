import { SyncStatus } from '../../types/timecube';

export default function PipelineSyncCard({ data }: { data: SyncStatus }) {
  return (
    <div className='bg-white border border-tc-line p-6 rounded-xl'>
      <h3 className='text-lg font-semibold'>Live Sync Status</h3>
      <p className='mt-2'>{data.state}</p>
      <p className='text-sm text-slate-600'>
        Integrity {data.integrity} · Reliability {data.reliability}
      </p>
    </div>
  );
}
