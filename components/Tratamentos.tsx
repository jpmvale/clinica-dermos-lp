'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL =
  'https://wa.me/5598988393399?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20Clínica%20Dermos.'

const categorias = [
  {
    id: 'dermatologia',
    label: 'Dermatologia',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.096.038a2.25 2.25 0 001.482.066L21 12m-6.75-8.896c.251.023.501.05.75.082M21 12l-2.25 6.75A2.25 2.25 0 0116.607 21H7.393a2.25 2.25 0 01-2.143-1.55L3 12m18 0h-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h.008v.008H6.75V12zm10.5 0h.008v.008h-.008V12z" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Doenças de Pele', desc: 'Diagnóstico e tratamento de patologias dermatológicas com abordagem clínica especializada.' },
      { nome: 'Melasma', desc: 'Tratamento personalizado para hiperpigmentação facial com protocolos avançados.' },
      { nome: 'Acne', desc: 'Protocolo completo para controle da acne ativa e minimização de cicatrizes.' },
      { nome: 'Doença do Couro Cabeludo', desc: 'Avaliação e tratamento de afecções do couro cabeludo com diagnóstico preciso.' },
      { nome: 'Doença das Unhas', desc: 'Diagnóstico e manejo clínico de onicomicoses e outras afecções ungueais.' },
    ],
  },
  {
    id: 'facial',
    label: 'Tratamento Facial',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Bioestimulador de Colágeno', desc: 'Estimulação natural do colágeno para rejuvenescimento progressivo e duradouro.' },
      { nome: 'Fios PDO', desc: 'Lifting não cirúrgico com fios absorvíveis para sustentação e rejuvenescimento facial.' },
      { nome: 'Fios Aptos', desc: 'Fios de poliamida para reposicionamento de tecidos e definição do contorno facial.' },
      { nome: 'Preenchimento com Ácido Hialurônico', desc: 'Restauração de volume e hidratação profunda com ácido hialurônico de alta qualidade.' },
      { nome: 'Toxina Botulínica', desc: 'Suavização de rugas dinâmicas com técnica precisa e resultado natural.' },
      { nome: 'MMP', desc: 'Protocolo Multi-Micro Perfuração para biostimulação e rejuvenescimento facial intenso.' },
    ],
  },
  {
    id: 'capilar',
    label: 'Centro Capilar',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 3-4 4.5-4 7.5a4 4 0 008 0C16 7.5 13.5 6 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5c-.5 1.5-.5 3 .5 4.5M15 13.5c.5 1.5.5 3-.5 4.5M12 18v3" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Terapia Capilar', desc: 'Tratamentos específicos para fortalecimento e saúde dos fios e couro cabeludo.' },
      { nome: 'Fotona Capilar', desc: 'Laser Fotona para estimulação do crescimento capilar e tratamento da alopecia.' },
      { nome: 'Lavieen Capilar', desc: 'Tecnologia Lavieen para rejuvenescimento capilar e controle da queda de cabelo.' },
      { nome: 'Led Capilar', desc: 'Fototerapia LED para estimulação dos folículos e recuperação capilar.' },
      { nome: 'Mesoterapia Capilar', desc: 'Microinjeções nutritivas no couro cabeludo para revitalização e crescimento capilar.' },
      { nome: 'Microagulhamento Capilar', desc: 'Estimulação folicular com microagulhamento para tratamento da queda de cabelo.' },
      { nome: 'MMP', desc: 'Protocolo Multi-Micro Perfuração aplicado ao couro cabeludo para biostimulação capilar.' },
      { nome: 'Pitiríase', desc: 'Tratamento da caspa e descamação do couro cabeludo com protocolos dermatológicos.' },
      { nome: 'Foliculite', desc: 'Manejo da inflamação dos folículos pilosos com abordagem clínica especializada.' },
      { nome: 'Psoríase', desc: 'Controle da psoríase capilar com tratamentos tópicos e sistêmicos personalizados.' },
      { nome: 'Dermatite Seborreica', desc: 'Tratamento da dermatite seborreica para redução de inflamação e oleosidade.' },
      { nome: 'Alopecia', desc: 'Diagnóstico e tratamento da queda de cabelo com protocolos multimodais avançados.' },
      { nome: 'Transplante Capilar', desc: 'Procedimento cirúrgico avançado para restauração capilar natural e definitiva.' },
    ],
  },
  {
    id: 'corporal',
    label: 'Corporal',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Criolipólise', desc: 'Eliminação de gordura localizada por resfriamento controlado sem cirurgia.' },
      { nome: 'CMSlim', desc: 'Tonificação muscular e redução de gordura com tecnologia eletromagnética de alta intensidade.' },
      { nome: 'Exion', desc: 'Radiofrequência fracionada para rejuvenescimento corporal e melhora da flacidez.' },
      { nome: 'EMTONE', desc: 'Estimulação neuromuscular para fortalecimento e definição corporal.' },
      { nome: 'Vanquish', desc: 'Redução circunferencial sem contato com radiofrequência seletiva para gordura.' },
      { nome: 'Lightsheer', desc: 'Depilação a laser definitiva com tecnologia de diodo para todos os fototipos.' },
    ],
  },
  {
    id: 'intimo',
    label: 'Íntimo',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c1.5 1.5 4 3 4 6a4 4 0 01-8 0c0-3 2.5-4.5 4-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5C7 11 6 13 6 15a6 6 0 0012 0c0-2-1-4-2.5-5.5" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Fotona Íntimo', desc: 'Laser Fotona para rejuvenescimento íntimo, firmeza tissular e bem-estar feminino.' },
      { nome: 'Preenchimento Íntimo', desc: 'Preenchimento com ácido hialurônico para correção estética e funcional íntima.' },
      { nome: 'Peelings', desc: 'Peeling químico íntimo para uniformização do tom e renovação celular da região.' },
      { nome: 'Bioestimulador Íntimo', desc: 'Estimulação de colágeno na região íntima para rejuvenescimento e firmeza.' },
    ],
  },
  {
    id: 'tecnologias',
    label: 'Tecnologias',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 3l-.813 2.846a4.5 4.5 0 01-3.09 3.09L12.75 9.75l2.846.813a4.5 4.5 0 013.09 3.09L19.5 16.5l.813-2.846a4.5 4.5 0 013.09-3.09L26.25 9.75l-2.846-.813" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Fotona', desc: 'Plataforma laser dual-wavelength Nd:YAG e Er:YAG para tratamentos faciais, capilares e íntimos.' },
      { nome: 'Ultraformer MPT', desc: 'HIFU de microfocagem para lifting e rejuvenescimento facial e corporal sem cirurgia.' },
      { nome: 'Lavieen', desc: 'Laser de diodo fracionado 1927nm para renovação cutânea e uniformização do tom.' },
      { nome: 'Chrome', desc: 'Tecnologia avançada para tratamento de manchas, melasma e renovação da pele.' },
      { nome: 'Laser CO2', desc: 'Laser CO2 fracionado para resurfacing intensivo, cicatrizes e rejuvenescimento profundo.' },
      { nome: 'Coolfase', desc: 'Radiofrequência com resfriamento simultâneo para remodelação facial e redução da flacidez.' },
      { nome: 'Lipolift', desc: 'Ultrassom microfocado para lipólise não invasiva e remodelação do contorno corporal.' },
    ],
  },
  {
    id: 'limpeza',
    label: 'Limpeza de Pele',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1 2.5-4 5-4 8.5a4 4 0 008 0C16 8 13 5.5 12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 11.5a2.5 2.5 0 005 0" />
      </svg>
    ),
    tratamentos: [
      { nome: 'Limpeza de Pele', desc: 'Procedimento profissional para limpeza profunda dos poros, remoção de impurezas e renovação da pele.' },
    ],
  },
]

export default function Tratamentos() {
  const [ativo, setAtivo] = useState('dermatologia')
  const categoriaAtiva = categorias.find((c) => c.id === ativo)!

  return (
    <section id="tratamentos" className="bg-cream py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display font-light text-[0.65rem] tracking-[0.3em] uppercase text-teal">
            Tratamentos
          </p>
          <div className="mt-4 w-10 h-px bg-gold" />
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-light text-dark max-w-lg">
            O que oferecemos
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setAtivo(cat.id)}
              className={`flex items-center gap-2 font-display font-light text-[0.65rem] tracking-[0.2em] uppercase px-6 py-3 rounded-full border transition-all duration-300 ${
                ativo === cat.id
                  ? 'bg-teal text-white border-teal shadow-sm'
                  : 'bg-bg text-muted border-cream hover:border-teal/40 hover:text-teal'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Treatment cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={ativo}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {categoriaAtiva.tratamentos.map((t, i) => (
              <div
                key={t.nome}
                className="bg-bg rounded-2xl p-8 hover:shadow-md transition-all duration-300 group border border-cream/50"
              >
                <div className="w-2 h-2 rounded-full bg-gold mb-6 group-hover:scale-150 transition-transform duration-300" />
                <h3 className="font-serif text-xl font-light text-dark mb-3">{t.nome}</h3>
                <p className="font-sans font-light text-muted text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-teal text-teal hover:bg-teal hover:text-white font-display font-light text-[0.65rem] tracking-[0.22em] uppercase px-8 py-4 rounded-full transition-all duration-300"
          >
            Tirar dúvidas pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
