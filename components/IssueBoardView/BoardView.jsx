// components/IssueBoardView/BoardView.jsx
'use client';

import React, { useMemo } from 'react';
import IssueBoardGroup from './IssueBoardGroup/IssueBoardGroup';
import issuesData from '@/lib/issues.json';

/**
 * BoardView
 */
export default function BoardView({ issues = issuesData, groupBy = 'status' }) {
  const statusOrder = [
    'pending',
    'assigned',
    'in_progress',
    'needs_review',
    'resolved',
    'cancelled',
  ];
  const priorityOrder = ['urgent', 'medium', 'low', 'not_set'];

  const groups = useMemo(() => {
    const map = new Map();
    const keyFor = (issue) => {
      const bs = issue.badgeSet || {};
      const v = bs[groupBy];
      if (v == null || v === '') {
        return groupBy === 'status' ? 'pending' : 'unassigned';
      }
      return v;
    };

    for (const issue of issues) {
      const key = keyFor(issue);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(issue);
    }

    let orderedKeys = Array.from(map.keys());

    if (groupBy === 'status') {
      orderedKeys = [
        ...statusOrder.filter((k) => map.has(k)),
        ...orderedKeys.filter((k) => !statusOrder.includes(k)),
      ];
    } else if (groupBy === 'priority') {
      orderedKeys = [
        ...priorityOrder.filter((k) => map.has(k)),
        ...orderedKeys.filter((k) => !priorityOrder.includes(k)),
      ];
    } else {
      orderedKeys = orderedKeys.sort();
    }

    return orderedKeys.map((k) => ({ key: k, items: map.get(k) }));
  }, [issues, groupBy]);

  return (
    // hide-scrollbar here
    <div className='h-full w-full overflow-x-auto overflow-y-hidden'>
      {/* flex container with full height to pass down to children */}
      <div className='inline-flex h-full min-w-max'>
        {groups.map((g) => (
          <div key={g.key} className='h-full flex-shrink-0'>
            <IssueBoardGroup groupKey={g.key} issues={g.items} groupBy={groupBy} title={g.key} />
          </div>
        ))}
      </div>
    </div>
  );
}
