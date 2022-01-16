import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Header from  '../components/Header';
import NavBar from  '../components/NavBar';
import Map from '../components/Map';
import Container from '../components/ui/Container';

export default function Home() {
  return (
    <>
      <Container size='full'>
        <Map />
      </Container>
      <Container size='full'>
        <div className='flex justify-between m-2'>
          <p className='self-end font-medium'>List of ???</p>
          <div className="btn-group">
            <button className="btn btn-sm">Filter</button>
            <button className="btn btn-sm">Sort</button>
          </div>
        </div>
        <div className='flex w-full h-64 shadow overflow-y-scroll'>
          <ul className="p-4 pt-0 divide-y w-full">
            <li className="py-4 flex first:pt-0 last:pb-0">
              <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              <div className="ml-3 overflow-hidden">
                <div className='flex gap-1'>
                  <div className='badge badge-primary'>Moving</div>
                  <div className='badge badge-secondary'>Walking</div>
                  <div className='badge badge-accent'>Lifting</div>
                </div>
                <p className="text-sm text-slate-500 truncate">Need some help moving stuffs from point a to point b</p>
              </div>
            </li>
            <li className="py-4 flex first:pt-0 last:pb-0">
              <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              <div className="ml-3 overflow-hidden">
                <div className='flex gap-1'>
                  <div className='badge badge-primary'>Moving</div>
                  <div className='badge badge-accent'>Lifting</div>
                  <div className='badge badge-secondary'>Walking</div>
                </div>
                <p className="text-sm text-slate-500 truncate">Need some help moving stuffs from point a to point b</p>
              </div>
            </li>

            <li className="py-4 flex first:pt-0 last:pb-0">
              <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              <div className="ml-3 overflow-hidden">
                <div className='flex gap-1'>
                  <div className='badge badge-accent'>Lifting</div>
                  <div className='badge badge-primary'>Moving</div>
                  <div className='badge badge-secondary'>Walking</div>
                </div>
                <p className="text-sm text-slate-500 truncate">Need some help moving stuffs from point a to point b</p>
              </div>
            </li>

            <li className="py-4 flex first:pt-0 last:pb-0">
              <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              <div className="ml-3 overflow-hidden">
                <div className='flex gap-1'>
                  <div className='badge badge-secondary'>Walking</div>
                  <div className='badge badge-accent'>Lifting</div>
                </div>
                <p className="text-sm text-slate-500 truncate">Need some help moving stuffs from point a to point b</p>
              </div>
            </li>

            <li className="py-4 flex first:pt-0 last:pb-0">
              <img className="h-10 w-10 rounded" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt=""/>
              <div className="ml-3 overflow-hidden">
                <div className='flex gap-1'>
                  <div className='badge badge-accent'>Lifting</div>
                </div>
                <p className="text-sm text-slate-500 truncate">Need some help moving stuffs from point a to point b</p>
              </div>
            </li>


          </ul>
        {/* <div className='flex h-24 p-2 gap-2 shadow-md'>
          <img className="rounded" src="https://cdn.pixabay.com/photo/2019/03/23/08/21/lioness-4074897_1280.jpg" alt="asdfadf" />
          <div className='flex flex-col'>
            <div className='flex gap-2'>
              <div className="badge badge-primary">primary</div>
              <div className="badge badge-secondary">secondary</div>
              <div className="badge badge-accent">accent</div>
              <div className="badge badge-ghost">ghost</div>
            </div>
            <Link href="#" className='hover:text-blue-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mattis ullamcorper elementum...</Link>
          </div>
          </div> */}
      </div>
      </Container>
    </>

  )
}
