import { Info } from 'lucide-react';import { MacroScore } from '../../types/timecube';
export default function MacroPressureCard({data}:{data:MacroScore}){return <div className='bg-white border border-tc-line p-6 rounded-xl'><div className='flex justify-between'><h3>Macro Pressure Score</h3><Info aria-label='Macro score info' size={14}/></div><div>{data.score} / {data.max}</div></div>}
