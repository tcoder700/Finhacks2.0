import image from '../assets/Saly-21.png'
import profile from "../assets/Profile Elements.png"
import money from '../assets/Todays Money.png'
import sales from '../assets/Total Sales.png'
import profinfo from '../assets/Profile Information.png'
import clients from '../assets/New Clients.png'
import analytics from '../assets/Analytics Cards.png'
import convo from '../assets/Conversations.png'
import Landing from './landing'

export default function Investors() {

    return (
        <div>
            <div className='bg-gradient-to-r from-violet-500 h-screen w-screen flex flex-cols-2 place-content-end  '> 
                <img src={image} className="items-start"/>
                <h1 className='z-0 font-serif text-4xl py-36 tracking-wide'>Manage your investments and portfolio easily !</h1>
               
            </div>
            
            <div className='bg-gradient-to-r from-violet-500 h-screen w-screen '>
                  <h1 className='text-xl px-12 text-black py-5 bg-white rounded-full w-72 mx-9'>YOUR DASHBOARD</h1>  
                  <img src={profile} className='px-7 py-5'/>
            
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 px-5 py-7'>
                  <img src={money} />
                  <img src={sales} />
                  <img src={clients} />
                </div>
            <div className='py-7' >
                <img src={analytics} className="" />
                     <div className='grid md:grid-cols-2 grid-cols-1 gap-5 px-5 py-7'>
                           <img src={profinfo} />
                           <img src={convo} />
                     </div>
            </div>
             </div>
        </div>
    ); 
}