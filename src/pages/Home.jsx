import React from 'react';
export default function Home(props) {
  return <div className='p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700'>{props.children || 'Home'}</div>;
}
