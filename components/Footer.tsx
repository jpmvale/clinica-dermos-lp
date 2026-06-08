export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <p className="font-display font-light tracking-[0.2em] uppercase text-sm text-white">
              Clínica Dermos
            </p>
            <p className="mt-2 font-display font-light text-[0.6rem] tracking-[0.18em] uppercase text-white/60">
              Dermatologia · São Luís, MA
            </p>
            <p className="mt-4 font-sans font-light text-[0.65rem] text-white/45 leading-relaxed">
              Av. Colares Moreira, 555, 6º andar<br />
              Ed. Renascença Medical Center<br />
              São Luís, MA · CEP 65075-441
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="font-display font-light text-[0.6rem] tracking-[0.25em] uppercase text-white/40 mb-1">
              Contato
            </p>
            <a
              href="tel:+559831906700"
              className="font-display font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/65 hover:text-white transition-colors duration-200"
            >
              (98) 3190-6700
            </a>
            <a
              href="tel:+5598988393399"
              className="font-display font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/65 hover:text-white transition-colors duration-200"
            >
              (98) 98839-3399 — WhatsApp
            </a>
            <a
              href="mailto:contato@clinicadermos.com.br"
              className="font-display font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/65 hover:text-white transition-colors duration-200"
            >
              contato@clinicadermos.com.br
            </a>
          </div>

          {/* Legal */}
          <div>
            <p className="font-sans font-light text-[0.65rem] text-white/40 leading-relaxed">
              Este site tem caráter exclusivamente informativo e educativo, em conformidade com a Resolução CFM nº 2.336/2023. As informações aqui veiculadas não substituem a consulta médica presencial.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center space-y-1">
          <p className="font-display font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/45">
            Centro Integrado de Dermatologia Ltda · CNPJ 23.420.357/0001-24
          </p>
          <p className="font-display font-light text-[0.65rem] tracking-[0.15em] uppercase text-white/45">
            © 2026 Clínica Dermos · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
