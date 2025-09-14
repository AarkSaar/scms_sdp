// app/issues/all/page.jsx
import Header from '@/components/header';
import IssueBoardCard from '@/components/IssueBoardCard/IssueBoardCard';

export default function IssuesAllPage() {
  const sampleAssignees = [
    { id: 'u1', name: 'Alice Johnson', avatarUrl: '/avatars/alice.jpg' },
    { id: 'u2', name: 'Bob Martin', avatarUrl: '/avatars/bob.jpg' },
    { id: 'u3', name: 'Cara Diaz', avatarUrl: '/avatars/cara.jpg' },
    { id: 'u4', name: 'Dan Wu', avatarUrl: '/avatars/dan.jpg' },
  ];

  return (
    // fill the parent "main" area (which is already a fixed-height scroll container)
    <div className='h-full min-h-0 flex flex-col'>
      {/* header sits at top */}
      <Header />

      {/* page content — this area scrolls inside the main container */}
      <div className='flex-1 min-h-0 overflow-auto p-6'>
        <div className='w-full h-full flex items-start justify-start'>
          <IssueBoardCard
            badgeSet={{ priority: 'low', department: 'capital_projects', status: 'in_progress' }}
            title='Insufficient Shuttle Buses During Peak Hours'
            description='Morning and evening peak hours (7:30–9:00 AM and 5–6 PM) have long queues at bus stops, with many students left stranded.'
            dateRange='00 Sept - 00 Sept'
            assignees={sampleAssignees}
            mediaUrl='/images/image.png'
          />
        </div>
      </div>
    </div>
  );
}
