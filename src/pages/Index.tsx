import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import UrgencyBar from "@/components/UrgencyBar";
import CountdownTimer from "@/components/CountdownTimer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/alex-nasser-hero.png";
import bonusImage from "@/assets/bonus-ebook.png";
const Index = () => {
  // Event date: January 22, 2026 at 20:00 (8:00 PM)
  const [targetDate] = useState(() => {
    return new Date(2026, 0, 22, 20, 0, 0); // Month is 0-indexed (0 = January)
  });
  const handleCTAClick = () => {
    window.location.href = "https://sun.eduzz.com/Z0B54773WA?utm_source=pv&utm_id=01";
  };
  return <div className="min-h-screen bg-background">
      {/* Urgency Bar */}
      <UrgencyBar targetDate={targetDate} percentageFilled={47} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left Side - Image/Video Section */}
          <div className="space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img src={heroImage} alt="Alex Nasser - Workshop Riq presenter" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex flex-col gap-2 md:gap-3">
              <Button onClick={handleCTAClick} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base py-2.5 sm:py-3 md:py-4 lg:py-5 px-2 sm:px-3 md:px-4 rounded-full shadow-lg transition-all duration-300 leading-tight whitespace-normal sm:whitespace-nowrap text-center">
                  AULA MASTER + EBOOK + VÍDEOS R$67
                </Button>
              </div>
            </div>

            {/* Alert Box with Countdown */}
            <div className="bg-card border border-accent rounded-xl p-4">
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent font-bold text-base uppercase tracking-wide">
                    AINDA HÁ TEMPO
                  </p>
                  <p className="text-foreground text-xs uppercase tracking-wider">
                    EVENTO INICIA EM:
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <CountdownTimer targetDate={targetDate} variant="detailed" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-bold text-sm uppercase tracking-wide">
                WORKSHOP LIVE
              </span>
              <span className="text-foreground font-bold text-sm">| QUI 22/01 às 20h00 e DOM 25/01 às 10h00</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
              Workshop de Ritmos e Musicalidade Árabe - Estudo & Análise da música TAMIL de Mario Kirlis
            </h1>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <Button onClick={handleCTAClick} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs sm:text-sm md:text-base lg:text-lg py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 lg:px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/50">
                <span className="hidden sm:inline">AULA MASTER + EBOOK + VÍDEOS R$67</span>
                <span className="sm:hidden">MASTER + EXTRAS R$67</span>
              </Button>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground">✓</span>
                </div>
                <span className="text-sm">Acesso completo ao workshop ao vivo</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground">✓</span>
                </div>
                <span className="text-sm">Bônus exclusivos para participantes VIP</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-primary-foreground">✓</span>
                </div>
                <span className="text-sm">Suporte e acompanhamento personalizado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 md:mt-24">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              "Garantia 100%" Ou Seu Dinheiro de Volta
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Garantia de 100% de Satisfação – ✅ Risco ZERO Para Você
            </p>
            
            <p className="text-muted-foreground text-base mb-4">Se depois de assistir o workshop e receber todas as dicas de Alex Nasser,</p>
            
            <p className="text-muted-foreground text-base mb-4">você não achar HONESTAMENTE que vale pelo menos 100 vezes os R$67 que pagou...</p>
            
            <p className="text-muted-foreground text-base mb-8">
              Nós devolvemos todo seu dinheiro na mesma hora. Sem perguntas. Sem burocracia. Sem risco.
            </p>
            
            <Button onClick={handleCTAClick} className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 mb-4">
              <span className="hidden sm:inline">GARANTIR ACESSO VIP → R$67</span>
              <span className="sm:hidden">ACESSO VIP → R$67</span>
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Pagamento único. Acesso imediato. Garantia de 7 dias.
            </p>
          </div>
        </div>

        {/* Why VIP Section */}
        <div className="mt-16 md:mt-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Por Que Você Deve Fazer o Workshop
              </h2>
              
              <p className="text-2xl md:text-3xl text-accent font-bold">(Sim... São apenas R$ 67,00)</p>
              
            <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  Você vai ganhar como BÔNUS o <span className="font-bold text-accent">"EBOOK Ritmos Orientais Árabes - vol.1"</span> de R$47,00 (ACESSO POR 2 ANOS) 
                </p>
                
                <div className="bg-card border-2 border-border rounded-2xl p-6 space-y-3">
                  <p className="text-lg text-foreground font-semibold">
                    Ou seja:
                  </p>
                  <div className="flex items-center gap-3 text-xl md:text-2xl font-bold">
                    <span className="text-foreground">R$67</span>
                    <span className="text-muted-foreground">-</span>
                    <span className="text-primary">R$47</span>
                    <span className="text-foreground">=</span>
                    <span className="text-accent text-3xl">R$20,00</span>
                  </div>
                  <p className="text-base text-foreground font-medium">
                    Resultado: Você faz o workshop com Alex Nasser por apenas <span className="text-accent font-bold text-xl">R$20,00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Bonus Card */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                  <span className="text-accent-foreground text-xs font-bold">🎁</span>
                </div>
                <span className="text-accent font-bold text-sm uppercase tracking-wide">BÔNUS</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Ebook + Vídeos:
Ritmos Orientais Àrabes - vol.1</h3>
              
              <div className="rounded-xl overflow-hidden border border-border mb-6">
                <img src={bonusImage} alt="Curso Bônus - Toque seu primeiro Samba em 7 dias" className="w-full h-auto" />
              </div>
              
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
              <span>💳</span> Formas de Pagamento
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Credit Card */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💳</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> Cartão de Crédito
              </h3>
              <p className="text-primary font-semibold">Parcele em até 12x</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-muted-foreground">⊕</span>
                Acesso liberado imediatamente após aprovação
              </p>
            </div>

            {/* Pix */}
            <div className="bg-card border border-border rounded-2xl p-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📱</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground flex items-center justify-center gap-2">
                <span className="text-primary">✓</span> Pix
              </h3>
              <p className="text-primary font-semibold">Pagamento à vista</p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span className="text-muted-foreground">⊕</span>
                Liberação rápida em poucos minutos
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button onClick={handleCTAClick} className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base sm:text-lg md:text-xl py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-12 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="hidden sm:inline">Garanta Seu VIP por Apenas R$67</span>
              <span className="sm:hidden">VIP por R$67</span>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
              <span>❓</span> FAQ: E-Book RITMOS ORIENTAIS ÁRABES - Vol. 1
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Aqui estão as perguntas frequentes sobre o seu guia de estudo dos ritmos árabes, focado na música "Tamil".
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  O que é o E-book "Ritmos Orientais Árabes - Vol. 1"?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É um guia de estudo rítmico focado nos iqa'at (ritmos) presentes na música "Tamil" de Mario Kirlis. O material é escrito pelo músico e professor Alex Nasser.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Para quem este e-book é indicado?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É fundamental para músicos e, principalmente, para as bailarinas das danças orientais árabes que desejam conhecer e aprender a reconhecer o "ritmo puro".
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  O que é o "ritmo puro" na música árabe?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O ritmo puro é composto pelos toques principais de um ritmo árabe. Esses toques, inseridos em uma estrutura de tempos, são o que basicamente define e identifica o ritmo em execução.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Quais são os toques principais usados na notação?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os toques principais são chamados de DUM (para o som grave) e TAK (para o som agudo). A pausa ou silêncio é representada pelo fonema ESSS (ou o símbolo +).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Quantos ritmos são abordados no e-book?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O volume 1 aborda 9 iqa'at (ritmos) distintos, listados no índice, como Malfouf, Fallahi, Masmoudi Saghir, Saidi, Wahda, Beddawi, Rumba Masri, Conga Masri, e Jerk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  O que define o Iqa' Malfouf?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É um ritmo binário (2/4) fundamental, caracterizado pelo toque Dum (grave) posicionado precisamente no início do ciclo (cabeça do primeiro tempo).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Qual é a diferença entre Iqa' Fallahi e Maqsoum?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O Fallahi compartilha a figura rítmica básica com o Maqsoum, mas o Fallahi é binário (2 tempos), enquanto o Maqsoum é quaternário (4 tempos). Isso implica que as batidas do Fallahi têm o dobro da velocidade das batidas do Maqsoum no mesmo andamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Por que o Iqa' Masmoudi Saghir é chamado de Baladi?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Masmoudi Saghir é popularmente conhecido como Baladi. O termo Baladi significa "da vila" ou "do campo". Ele se destaca por seu peso e densidade sonora, conferida pelos dois toques graves (Dum) que iniciam o compasso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Qual a função do Iqa' Wahda?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  É o principal iqa' vocal no gênero Tarab (música de êxtase). Sua figura rítmica espaçada oferece ao cantor amplo espaço para realizar melismas e extensões de vogais.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline">
                  Quais ritmos são exemplos de fusão cultural no e-book?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O Iqa' Rumba Masri e o Iqa' Conga Masri. O Rumba Masri é adaptado de influências latinas, enquanto o Conga Masri resulta da intersecção cultural entre o sabor rítmico africano da Conga e a tradição percussiva egípcia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            A Comunidade Alex Nasser não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui nenhuma relação comercial ou comprometimento para usar.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com a nossa Termos de Uso e Política de Privacidade.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="text-foreground font-medium">workshop Alex Nasser  </span>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
            <span className="text-muted-foreground">|</span>
            <a href="https://politica-de-privacidade.rota50ia.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Todos os direitos reservados – Edilson Morais 2025
          </p>
          
          <p className="text-sm text-muted-foreground">Contato: edilsomdil@gmail.com edilsomdil@gmail.com<a href="mailto:edilsonafi@gmail.com" className="text-foreground hover:text-primary transition-colors">edilsonafi@gmail.com</a>
          </p>
          
          <p className="text-xs text-muted-foreground">
            Desenvolvido por Edilson Morais
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;