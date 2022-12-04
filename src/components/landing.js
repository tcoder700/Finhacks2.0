
import ImageOne from '../assets/finhack_1.png'
import ImageTwo from '../assets/Saly-15.png'
import ImageThree from '../assets/Saly-31.png'
import ImageFour from '../assets/Saly-45.png'

export default function Landing() {
    return (
       <div>
        <div className='bg-gradient-to-r from-indigo-500 h-54 text-black h-56'>
    <h2 className="text-center text-xl font-serif  place-content-center py-20">We provide a way for a way for anyone 
to pitch their unqiue ideas to 
an angel investor</h2>

        </div>
        <div className="flex place-content-center py-10">
        <button className=" bg-gradient-to-r from-blue-400 rounded-full px-4 py-2 border border-x-black-400">Get Started</button>
        </div>
        <div className='grid md:grid-cols-3 mx-auto gap-5 px-5 grid-cols-1'>
        <img src={ImageOne} />
        <img src={ImageOne} />
        <img src={ImageOne} />
        </div>
       



        <div className='bg-gradient-to-r from-yellow-300 w-screen h-72 mt-20 flex place-content-end'>
        <h3 className='text-left py-24 text-2xl text-black mx-auto font-serif'>Pitch your ideas, step out there and get the funding for <br /> your 
product easily.</h3>
            <img src={ImageTwo} className="z-0 px-16"/>
         
        </div>

        <div className='bg-gradient-to-l from-purple-400 w-screen h-72 flex place-content-start'>
            <img src={ImageThree} className="z-0 px-16"/>
            <h3 className='text-left py-24 text-2xl text-black mx-auto font-serif '>Pitch your ideas, step out there and get the funding for <br /> your 
product easily.</h3>
        </div>

        <div className='bg-gradient-to-r from-green-400 w-screen h-72 flex place-content-end'>
        <h3 className='text-left py-24 text-2xl text-black mx-auto font-serif'>Pitch your ideas, step out there and get the funding for <br /> your 
product easily.</h3>
            <img src={ImageFour} className="z-0 px-16 shrink-1"/>
        </div>
        </div>
        
        
    )
}