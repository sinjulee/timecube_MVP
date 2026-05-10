import { Info } from 'lucide-react';
import { MacroScore } from '../../types/timecube';

export default function MacroPressureCard({ data }: { data: MacroScore }) {
  return (
    <div className='bg-white border border-tc-line p-6 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Macro Pressure Snapshot</h3>
        <Info aria-label='Macro score info' size={14} />
      </div>
      <p className='text-3xl font-bold mt-3'>
        {data.score} / {data.max}
      </p>
      <p className='text-sm text-slate-600 mt-2'>{data.message}</p>
    </div>
  );
}
