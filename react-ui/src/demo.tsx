import { motion, useReducedMotion } from "motion/react";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "Texto ilustrativo para conferir como uma avaliação de algumas frases ocupa o cartão e se comporta durante a animação.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 01",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Este é um segundo exemplo de texto. Substitua por uma avaliação real e obtenha autorização antes de publicar qualquer depoimento.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 02",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "O componente aceita frases de tamanhos diferentes, para ajudar a avaliar o ritmo das colunas e a leitura em telas menores.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 03",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Use este cartão apenas como conteúdo de teste. Nenhuma frase nesta prévia representa a opinião real de uma pessoa cliente.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 04",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "O texto do cartão deve permanecer legível em desktop e celular. A coluna também respeita a configuração de movimento reduzido.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 05",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Personalize o texto, o retrato e a identificação com materiais autorizados antes de usar este componente numa página pública.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 06",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Mais um texto de exemplo para mostrar a repetição do conteúdo em uma coluna animada, sem incluir uma avaliação inventada como real.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 07",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Este exemplo ajuda a verificar o recorte circular das imagens, o alinhamento dos nomes e o espaço entre os cartões.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 08",
    role: "Conteúdo demonstrativo",
  },
  {
    text: "Conteúdo fictício de layout. Para a versão final, use apenas depoimentos genuínos com permissão para divulgação.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&h=100&q=80",
    name: "Pessoa de exemplo 09",
    role: "Conteúdo demonstrativo",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsDemo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative min-h-svh overflow-hidden bg-background py-14 text-foreground sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-muted/70 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-2xl flex-col items-center justify-center"
        >
          <span className="rounded-lg border bg-card px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Prévia do componente
          </span>

          <h1 className="mt-5 text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Colunas de depoimentos
          </h1>
          <p className="mt-4 max-w-xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
            Demonstração responsiva do componente React com cartões em movimento.
          </p>
          <p className="mt-5 max-w-2xl rounded-xl border border-clay/40 bg-card px-4 py-3 text-center text-sm leading-6">
            <strong>Atenção:</strong> todos os textos e nomes abaixo são ilustrativos, e os retratos são imagens de banco.
            Substitua-os por depoimentos reais e autorizados antes de publicar.
          </p>
        </motion.div>

        <div className="mt-10 flex max-h-[740px] justify-center gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)] sm:mt-14 sm:gap-6">
          <TestimonialsColumn testimonials={firstColumn} className="max-w-xs" duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden max-w-xs md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden max-w-xs lg:block" duration={17} />
        </div>
      </div>
    </main>
  );
}
