import HeroSection from '@/components/HeroSection'
import IntensityScale from '@/components/IntensityScale'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'
import CatatanTeaser from '@/components/CatatanTeaser'

/* Landing page hanya memuat bagian milik landing page. ProductDetail,
   Checkout, dan Login yang dulu ikut dirender di sini kini punya rute sendiri. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <IntensityScale />
      <FeaturedProducts />
      <USPSection />
      <CatatanTeaser />
      <TestimonialsCarousel />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
