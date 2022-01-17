export default function ListItem({ details }) {
  return (
    <li className="py-4 flex first:pt-0 last:pb-0">
    <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
    <div className="ml-3 overflow-hidden">
      {/* <div className='flex gap-1'>
        <div className='badge badge-primary'>Moving</div>
        <div className='badge badge-secondary'>Walking</div>
        <div className='badge badge-accent'>Lifting</div>
      </div> */}
      <p className="text-sm text-slate-500 truncate">{details}</p>
    </div>
  </li>
  );
}