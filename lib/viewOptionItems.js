import Columns from '@/assets/iconComponents/Columns';
import Filter from '@/assets/iconComponents/Filter';
import Filter2 from '@/assets/iconComponents/Filter2';

export default [
  { id: 'group', label: 'Grouping', dropdown: true, Icon: Columns },
  { id: 'sort', label: 'Ordering', dropdown: true, Icon: Filter2 },
  { id: 'filter', label: 'Filter', dropdown: false, Icon: Filter },
];
