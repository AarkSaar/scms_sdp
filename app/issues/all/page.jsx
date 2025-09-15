// app/issues/all/page.jsx
import Header from '@/components/header';
import BoardView from '@/components/IssueBoardView/BoardView';

export default function IssuesAllPage() {
  return (
    <div className='flex flex-col w-full min-w-0 h-full min-h-0'>
      <Header />

      <div className='flex-1 p-3 overflow-hidden'>
        <BoardView />
      </div>
    </div>
  );
}
