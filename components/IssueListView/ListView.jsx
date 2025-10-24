// components/IssueListView/ListView.jsx
'use client';

import React, { useMemo } from 'react';
import ListGroup from './IssueListGroup/ListGroup';

export default function ListView({ issues = [], groupBy = 'status' }) {
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
    // vertical stack of groups, page scrolls vertically
    // hide-scrollbar here
    <div className='flex flex-col gap-4 w-full h-full overflow-y-auto min-h-0'>
      {groups.map((g) => (
        <div key={g.key} className='w-full'>
          <ListGroup groupKey={g.key} title={g.key} issues={g.items} groupBy={groupBy} />
        </div>
      ))}
    </div>
  );
}
