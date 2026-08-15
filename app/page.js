import HeroSection from '@/components/HeroSection'
import IntensityScale from '@/components/IntensityScale'
import CategoryGrid from '@/components/CategoryGrid'
import FeaturedProducts from '@/components/FeaturedProducts'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

/* Landing page hanya memuat bagian milik landing page. ProductDetail,
   Checkout, dan Login yang dulu ikut dirender di sini kini punya rute sendiri. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <IntensityScale />
      <CategoryGrid />
      <FeaturedProducts />
      <USPSection />
      <TestimonialsCarousel />
      <AboutAndFAQ />
      <ContactSupport />
    </>
  )
}
