import HeroSection from '../components/HeroSection'
import CategoryGrid from '../components/CategoryGrid'
import ProductDetailPage from '@/components/ProductDetailPage'
import USPSection from '@/components/USPSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import FeaturedProducts from '@/components/FeaturedProducts'
import CheckoutPage from '@/components/CheckoutPage'
import LoginPage from '@/components/LoginPage'
import AboutAndFAQ from '@/components/AboutAndFAQ'
import ContactSupport from '@/components/ContactSupport'

export default function Home() {
  return (
    <main >
      <HeroSection />
      <CategoryGrid />
      <ProductDetailPage />
      <USPSection />
      <TestimonialsCarousel />
      <FeaturedProducts />
      <CheckoutPage />
      <LoginPage />
      <AboutAndFAQ />
      <ContactSupport />
\    </main>
  )
}
