import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
  <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
    <div className="block rounded-t overflow-hidden  text-center ">
      <div className="bg-blue-500 text-white py-1">
        March
      </div>
      <div className="pt-1 border-l border-r border-white bg-white">
        <span className="text-5xl font-bold leading-tight">
                17
              </span>
      </div>
      <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
        <span className="text-sm">
                Sunday
              </span>
      </div>
      <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
        <span className="text-xs leading-normal">
                8:00 am to 5:00 pm
              </span>
      </div>
    </div>
  </div>
</div>
  )
}
