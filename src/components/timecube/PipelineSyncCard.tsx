import { SyncStatus } from '../../types/timecube';
export default function PipelineSyncCard({data}:{data:SyncStatus}){return <div className='bg-white border border-tc-line p-6 rounded-xl'><h3>Pipeline Sync</h3><p>{data.state}</p><p>{data.integrity} / {data.reliability}</p></div>}
