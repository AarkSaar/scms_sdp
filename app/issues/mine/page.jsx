// app/issues/mine/page.jsx
import Header from '@/app/components/header';

export default function IssuesMinePage() {
  return (
    <div className=''>
      <Header />
      <h2 className='text-lg text-white mt-4'>My Issues</h2>
      <p className='text-sm text-[#9b9b9b] mt-2'>Your assigned or created issues.</p>
    </div>
  );
}
