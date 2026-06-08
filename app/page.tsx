import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Estrutura from '@/components/Estrutura'
import Equipe from '@/components/Equipe'
import Tratamentos from '@/components/Tratamentos'
import Diferenciais from '@/components/Diferenciais'
import ComoFunciona from '@/components/ComoFunciona'
import Localizacao from '@/components/Localizacao'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Estrutura />
        <Equipe />
        <Tratamentos />
        <Diferenciais />
        <ComoFunciona />
        <Localizacao />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
