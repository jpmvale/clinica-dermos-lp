import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica Dermos | Dermatologia em São Luís, MA',
  description:
    'Clínica Dermos — Referência em dermatologia clínica, cirúrgica e estética em São Luís, Maranhão. Equipe com 9 dermatologistas especialistas. Tecnologia de ponta. Agende sua consulta.',
  keywords:
    'dermatologia, dermatologista, são luís, maranhão, pele, estética, botox, laser, acne, clínica dermos, tratamento pele, dermatologia ma',
  authors: [{ name: 'Clínica Dermos' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Clínica Dermos | Dermatologia em São Luís, MA',
    description:
      'Dermatologia clínica, cirúrgica e estética. Equipe com 9 especialistas em São Luís, MA.',
    siteName: 'Clínica Dermos',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Clínica Dermos',
              description: 'Dermatologia clínica, cirúrgica e estética em São Luís, MA',
              medicalSpecialty: 'Dermatology',
              telephone: '+559831906700',
              url: 'https://www.clinicadermos.com.br',
              openingHours: ['Mo-Fr 08:00-20:00', 'Sa 08:00-12:00'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Colares Moreira, 555, 6º andar',
                addressLocality: 'São Luís',
                addressRegion: 'MA',
                postalCode: '65075-441',
                addressCountry: 'BR',
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
