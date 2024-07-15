import NetflixFooter from './NetflixFooter'
import NetflixHeader from './NetflixHeader'
import NetflixMain from './NetflixMain'
import { NetflixRegisterComponent } from './NetflixRegister'
export default function NetflixIndex() {
  return (
    <div className="bg-custom-image bg-cover bg-center h-[100vmax] w-full">
      <div className= " relative bg-[rgba(0,0,0,0.5)]  h-[100vmax] w-full">
        <header>
          <NetflixHeader />
        </header>
        <section className='flex justify-center items-center h-[400px]'>
          <main>
            <NetflixMain />
            <NetflixRegisterComponent/>
          </main>
        </section>

        <footer className=' absolute bottom-0'>
          <NetflixFooter/>
        </footer>
      </div>
    </div>
  )
}