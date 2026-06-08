'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Com que frequência devo consultar um dermatologista?',
    a: 'Recomendamos pelo menos uma consulta anual para avaliação preventiva da pele, mesmo sem queixas específicas. Pacientes com histórico familiar de câncer de pele, acne ativa ou outras condições podem precisar de acompanhamento mais frequente.',
  },
  {
    q: 'A clínica atende por convênio médico?',
    a: 'Sim, a Clínica Dermos aceita convênios médicos. Entre em contato pelo WhatsApp ou telefone para verificar se seu plano está entre os convênios credenciados.',
  },
  {
    q: 'Como funciona o agendamento?',
    a: 'O agendamento pode ser feito pelo WhatsApp (98) 98839-3399 ou por telefone (98) 3190-6700. Nossa equipe ajudará a encontrar o horário mais conveniente e indicará o especialista mais adequado para o seu caso.',
  },
  {
    q: 'Os procedimentos estéticos precisam de avaliação médica prévia?',
    a: 'Sim. Na Clínica Dermos, todos os procedimentos estéticos são precedidos por uma consulta médica com nossos dermatologistas. Isso garante que o tratamento indicado é o mais seguro e eficaz para o seu tipo de pele.',
  },
  {
    q: 'Qual a diferença entre dermatologia clínica e estética?',
    a: 'A dermatologia clínica trata doenças de pele como acne, psoríase, dermatites, manchas e infecções. A estética foca no aprimoramento visual, com procedimentos como botox, preenchimento, laser e peeling. Na Dermos, as duas áreas trabalham de forma integrada para cuidar da saúde e da beleza da sua pele.',
  },
  {
    q: 'O que é o mapeamento com FotoFinder?',
    a: 'O FotoFinder é uma câmera dermatoscópica digital que realiza o mapeamento corporal de nevos (pintas) e lesões pigmentadas. Permite acompanhar mudanças ao longo do tempo e detectar precocemente sinais suspeitos de câncer de pele.',
  },
]

function FAQItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-cream">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display font-light text-xs tracking-[0.12em] text-dark pr-8 group-hover:text-teal transition-colors duration-200">
          {q}
        </span>
        <motion.span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-teal"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-sans font-light text-muted text-sm leading-relaxed pr-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-cream py-24 lg:py-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Dúvidas
          </p>
          <div className="mt-4 w-10 h-px bg-gold" />
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark">
            Perguntas frequentes
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
