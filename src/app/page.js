import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Hero from '@/components/hero-section/hero'
import Herosection2 from '@/components/hero-section2/hero-section2'
import Herosecton3 from '@/components/hero-section3/hero-secton3'
import Imagecarousel from '@/components/image-carousel/image-carousel'
import Availabledays from '@/components/open-days/open-days'
import QuestionsOrConcerns from '@/components/questions-or-concerns/questions-concerns'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center lg:pt-0 pt-[15%]"> 
     <Hero />
     <Herosection2 />
     <Herosecton3 />
     <QuestionsOrConcerns />
     <Availabledays />

     <Footer />
     {/* <Imagecarousel images={[
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      ]}/> */}
    </main>
  )
}
