import React, { useEffect , useState} from 'react'
import {useLocation} from 'react-router-dom'
import DashSide from '../components/DashSide';
import DashItems from '../components/DashItems';
import DashInventory from '../components/DashInventory';
import DashMedication from '../components/DashMedication';
import DashOrders from '../components/DashOrders';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    if(tabFormUrl) {
      setTab(tabFormUrl)
    }
  },[location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSide/>
      </div>
      <div className=''>
        {tab === 'dashboard-items' && <DashItems/>}
        {tab === 'inventory' && <DashInventory/>}
        {tab === 'medication' && <DashMedication/>}
        {tab === 'orders' && <DashOrders/>}
      </div>
    </div>
  )
}