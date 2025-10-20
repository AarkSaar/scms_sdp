// app/page.jsx
import { redirect } from 'next/navigation';

export default function Page() {
  // Redirect root to issues/all
  redirect('auth');
}
