import { Hypothesis } from '../../types/timecube';
export default function HegemonyHypotheses({data}:{data:Hypothesis[]}){return <section className='bg-white border border-tc-line p-8 rounded-xl'><h2>Hegemony Hypotheses</h2>{data.map(i=><div key={i.id}>{i.title} {i.total}%</div>)}</section>}
