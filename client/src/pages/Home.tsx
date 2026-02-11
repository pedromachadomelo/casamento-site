import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Hotel, Gift, Mail, Heart } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";

/**
 * Design Philosophy: Tropicalismo Orgânico Contemporâneo
 * - Scroll narrativo assimétrico com ritmo visual variado
 * - Formas orgânicas e transições fluidas
 * - Paleta do pôr do sol na Praia do Patacho
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Header com Monograma */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F2ED]/80 backdrop-blur-sm border-b border-[#D4A574]/20 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/ohBhciOAFRCXmegN.png" 
            alt="I&P" 
            className="h-12 opacity-90 hover:opacity-100 transition-opacity"
          />
          <nav className="hidden md:flex gap-6 font-sans text-sm uppercase tracking-wider">
            <button onClick={() => scrollToSection("home")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Início</button>
            <button onClick={() => scrollToSection("historia")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Nossa História</button>
            <button onClick={() => scrollToSection("evento")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Evento</button>
            <button onClick={() => scrollToSection("hospedagem")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Hospedagem</button>
            <button onClick={() => scrollToSection("presentes")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Presentes</button>
            <button onClick={() => scrollToSection("confirmacao")} className="text-[#6B4423] hover:text-[#D4A574] transition-colors duration-300">Confirmar</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/uUxmcZAnNJPSvBlN.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div 
          className="absolute inset-0 bg-[#F5F2ED]/40"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        <div className="w-full container mx-auto max-w-4xl relative z-10 px-6">
          <div className="text-center space-y-4 animate-[fadeInUp_1s_ease-out_forwards] max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/XHDFijGREtHpKFBE.png" 
                alt="Isadora & Pedro" 
                className="w-full max-w-2xl drop-shadow-lg"
              />
            </div>
            <div className="space-y-2 font-serif text-xl md:text-2xl text-[#6B4423]">
              <p className="flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6 text-[#D4A574]" />
                16 e 17 de Outubro de 2026
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-6 h-6 text-[#D4A574]" />
                Praia do Patacho, Porto de Pedras - AL
              </p>
            </div>
            <p className="font-sans text-lg text-[#6B4423]/80 max-w-md mx-auto">
              Celebre conosco este momento especial na Rota Ecológica dos Milagres
            </p>
            <Button 
              onClick={() => scrollToSection("confirmacao")}
              className="bg-[#D4A574] hover:bg-[#6B4423] text-white font-sans uppercase tracking-wider px-8 py-6 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Confirmar Presença
            </Button>
          </div>
        </div>

        <WaveDivider color="#F5F2ED" />
      </section>

      {/* Nossa História */}
      <section 
        id="historia" 
        data-animate
        className="py-16 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['historia'] ? 1 : 0,
          transform: isVisible['historia'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-4xl px-6">
          <div className="flex justify-center -mb-4 -mt-4">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/zGupwfkMLqkUhyvx.png" 
              alt="Isadora e Pedro" 
              className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-[#6B4423] text-center mb-8 font-semibold">
            Nossa história e onde nossas raízes se encontram
          </h2>
          
          <Card className="bg-white/60 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-8 md:p-12 space-y-6 font-sans text-lg text-[#6B4423]/90 leading-relaxed">
              <p>
                Muito antes de qualquer promessa, nossas raízes já nos conduziam para o mesmo caminho.
              </p>
              <p>
                Foi em Maceió, em 2019, que nossos olhares se cruzaram. Em 2021, nossa história começou a ser escrita com mais coragem e intenção. Uma carioca de coração alagoano encontrou um pernambucano, e foi em São Paulo que aprenderam a crescer juntos, transformando saudade em abrigo, sonhos em planos, e amor em lar.
              </p>
              <p>
                Longe do lugar onde nascemos, nossas raízes se entrelaçaram ainda mais fortes. Aos domingos, a cozinha virou encontro, com sabores das nossas famílias marcando presença nos pratos. A trilha sonora da nossa vida juntos passou a ser marcada pelo forró, pelo piseiro e por tantos ritmos cheios de nostalgia. Em momentos de intimidade e histórias compartilhadas, nossas semelhanças nos conectaram de forma genuína.
              </p>
              <p>
                Anos depois, quando amadurecemos nosso amor e começamos a sonhar com o nosso casamento, concluímos que ele precisava acontecer entre <strong className="text-[#D4A574]">Recife e Maceió</strong>, onde nossas histórias tiveram ponto de partida e onde nosso amor sempre encontra sentido. Queríamos celebrar perto do que nos formou, do que nos trouxe até aqui, e o que vai nos levar ainda mais longe.
              </p>
              <p>
                E foi assim, quase como um presente do destino, que encontramos um lugar que, mesmo antes de nos conhecermos, já habitava nossos sonhos: a <strong className="text-[#D4A574]">Rota Ecológica dos Milagres</strong>.
              </p>
              <p>
                Na <strong className="text-[#D4A574]">Praia do Patacho</strong>, em Porto de Pedras, a 15 km de São Miguel dos Milagres, decidimos celebrar nossa história, nossas raízes e nosso futuro, ao lado de quem mais amamos.
              </p>
              <div className="flex justify-center pt-6">
                <Heart className="w-12 h-12 text-[#D4A574] animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Informações do Evento */}
      <section 
        id="evento" 
        data-animate
        className="py-20 relative transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/uUxmcZAnNJPSvBlN.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: isVisible['evento'] ? 1 : 0,
          transform: isVisible['evento'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="absolute inset-0 bg-[#6B4423]/60" />
        
        <div className="container relative z-10 max-w-5xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-white text-center mb-16 font-semibold drop-shadow-lg">
            Sobre o Grande Dia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-[#6B4423] font-semibold mb-2">Data</h3>
                    <p className="font-sans text-lg text-[#6B4423]/80">17 de Outubro</p>
                    <p className="font-sans text-base text-[#6B4423]/60">Sábado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-[#D4A574] flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl text-[#6B4423] font-semibold mb-2">Horário</h3>
                    <p className="font-sans text-lg text-[#6B4423]/80">Cerimônia: 15h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 md:col-span-2">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-[#D4A574] flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-[#6B4423] font-semibold mb-2">Local</h3>
                    <p className="font-sans text-lg text-[#6B4423]/80 mb-4">
                      <strong>Espaço Koral</strong><br />
                      Praia do Patacho, Porto de Pedras - AL
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.google.com/maps/search/Espa%C3%A7o+Koral+Praia+do+Patacho+Porto+de+Pedras+AL/@-9.1583,-35.2833,15z', '_blank')}
                      variant="outline"
                      className="border-[#D4A574] text-[#6B4423] hover:bg-[#D4A574] hover:text-white transition-all duration-300"
                    >
                      Ver no Mapa
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 md:col-span-2">
              <CardContent className="p-8 space-y-8">
                <h3 className="font-serif text-2xl text-[#6B4423] font-semibold mb-6 text-center">Dress Code</h3>
                
                <p className="font-sans text-base text-[#6B4423]/80 text-center leading-relaxed">
                  Nosso casamento será à beira-mar, então pensamos em um traje que una elegancia, conforto e leveza. A ideia é que todos estejam bem-vestidos, mas à vontade para curtir esse momento especial com a gente. 💫
                </p>
                
                <div className="space-y-8">
                  {/* Para Mulheres */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl text-[#D4A574] font-semibold">Para Mulheres</h4>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      Indicamos vestido longo em estilo esporte fino, com tecidos leves e fluídos. Não precisa ser um look excessivamente formal ou sofisticado - o mais importante é manter a elegância com frescor e conforto.
                    </p>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      Ah, e um aviso importante: não é obrigatório usar salto. Como a cerimônia será na areia, sandálias baixas, rasteiras elegantes ou plataformas confortáveis são ótimas opções.
                    </p>
                  </div>
                  
                  {/* Para Homens */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-xl text-[#D4A574] font-semibold">Para Homens</h4>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      Esporte fino. Sugerimos calça social ou chino, combinada com camisa social ou camisa de tecido leve. Não é necessário terno nem gravata.
                    </p>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      Nos pés, fiquem tranquilos: tênis ou sapatos mais casuais são super bem-vindos. Priorizem o conforto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <WaveDivider color="#F5F2ED" />
      </section>

      {/* Recepção de Boas Vindas */}
      <section 
        id="recepcao-boas-vindas" 
        data-animate
        className="py-20 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['recepcao-boas-vindas'] ? 1 : 0,
          transform: isVisible['recepcao-boas-vindas'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-4xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-12 font-semibold">
            Recepção de Boas Vindas
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-8 md:p-12 space-y-8">
              <p className="font-sans text-xl text-[#6B4423]/80 text-center leading-relaxed">
                Venha nos encontrar na sexta-feira, dia 16 de outubro, para começarmos a celebração e aproveitarmos a noite juntos!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-[#6B4423] font-semibold mb-2">Local</h3>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      A confirmar, porém será na Praia do Patacho.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-[#6B4423] font-semibold mb-2">Horário</h3>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      17h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-[#6B4423] font-semibold mb-2">Dress Code</h3>
                    <p className="font-sans text-base text-[#6B4423]/80">
                      Roupas casuais.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <WaveDivider color="#F5F2ED" />
      </section>

      {/* Hospedagem */}
      <section 
        id="hospedagem" 
        data-animate
        className="py-20 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['hospedagem'] ? 1 : 0,
          transform: isVisible['hospedagem'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-6xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-6 font-semibold">
            Onde se Hospedar
          </h2>
          <p className="font-sans text-lg text-[#6B4423]/70 text-center mb-16 max-w-3xl mx-auto">
            Para sua hospedagem no dia, recomendamos que fique pela região de Porto de Pedras. Também deixamos algumas opções de pousadas próximas.
          </p>

          <div className="space-y-12">
            {/* Luxo */}
            <div>
              <h3 className="font-serif text-3xl text-[#D4A574] mb-6 flex items-center gap-3">
                <Hotel className="w-8 h-8" />
                $$$ Luxo e Conforto
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Pousada Samba Pa Ti</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Uma das melhores da Rota ecológica. A 5 minutos de carro do local da cerimônia. 
                      <strong className="text-[#D4A574]"> Não permite crianças.</strong>
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?ss=Pousada%20Samba%20Pa%20Ti%2C%20Porto%20de%20Pedras%2C%20Alagoas%2C%20Brasil&group_adults=2&group_children=0&no_rooms=1&ssne=Porto%20de%20Pedras&ssne_untouched=Porto%20de%20Pedras&sb_changed_dest=1&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQKYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AqX6oswGwAIB0gIkMDBlOGM0NzYtYjg4Ny00OWI5LWIwZDMtOWQxZDMyYjkwNTMx2AIB4AIB&sid=58b9cbb21659ee3e30d0e35fe2b5dae8&aid=304142&lang=pt-br&sb=1&src_elem=sb&src=searchresults&dest_id=1656807&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=dc5775f798b4009d&ac_meta=GhBkYzU3NzVmNzk4YjQwMDlkIAAoATICeGI6DnBvdXNhZGEgc2FtYmEg&checkin=2026-10-16&checkout=2026-10-18', '_blank')}
                      className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Pousada do Patacho</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Máximo de comodidade ao lado do local da cerimônia. Hospedagens de alta qualidade.
                      <strong className="text-[#D4A574]"> Nós ficaremos lá!</strong>
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?ss=Pousada%20Patacho%2C%20Porto%20de%20Pedras%2C%20Alagoas%2C%20Brasil&group_adults=2&group_children=0&no_rooms=1&ssne=Porto%20de%20Pedras&ssne_untouched=Porto%20de%20Pedras&sb_changed_dest=1&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQKYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AqX6oswGwAIB0gIkMDBlOGM0NzYtYjg4Ny00OWI5LWIwZDMtOWQxZDMyYjkwNTMx2AIB4AIB&sid=58b9cbb21659ee3e30d0e35fe2b5dae8&aid=304142&lang=pt-br&sb=1&src_elem=sb&src=searchresults&dest_id=4869094&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=d59675bf167d08fa&ac_meta=GhBkNTk2NzViZjE2N2QwOGZhIAAoATICeGI6D3BvdXNhZGEgcGF0YWNobw%3D%3D&checkin=2026-10-16&checkout=2026-10-18', '_blank')}
                      className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Pedras do Patacho</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Também ao lado da cerimônia. Bonita e chique. Diferente da Pousada do Patacho, essa não permite crianças.
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?ss=Pedras%20Do%20Patacho%20Hotel%20Boutique%20Experience%2C%20Porto%20de%20Pedras%2C%20Alagoas%20(Nordeste%20do%20Brasil)%2C%20Brasil&group_adults=2&group_children=0&no_rooms=1&ssne=Porto%20de%20Pedras&ssne_untouched=Porto%20de%20Pedras&sb_changed_dest=1&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQKYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AqX6oswGwAIB0gIkMDBlOGM0NzYtYjg4Ny00OWI5LWIwZDMtOWQxZDMyYjkwNTMx2AIB4AIB&sid=58b9cbb21659ee3e30d0e35fe2b5dae8&aid=304142&lang=pt-br&sb=1&src_elem=sb&src=searchresults&dest_id=2745893&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=4a3475ed29521e01&ac_meta=GhA0YTM0NzVlZDI5NTIxZTAxIAAoATICeGI6EGhvdGVsIHBlZHJhcyBkbyA%3D&checkin=2026-10-16&checkout=2026-10-18', '_blank')}
                      className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Intermediário */}
            <div>
              <h3 className="font-serif text-3xl text-[#5A8A5A] mb-6 flex items-center gap-3">
                <Hotel className="w-8 h-8" />
                $$ Conforto e Charme
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/80 border-[#5A8A5A]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Villa Canziani & Donato</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Pousada novinha e cheia de charme. Não fica ao lado da cerimônia, mas dá pra ir a pé.
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?aid=360920&label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS217921514283%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D4V155PhMhqHgqo7OhZGhXlzIDn4QxZIV0tsI9-T6clrhNsFujmCr0aAk8lEALw_wcB&highlighted_hotels=6790234&checkin=2026-10-16&redirected=1&city=-663627&hlrd=with_av&source=hotel&checkout=2026-10-18&keep_landing=1&sid=11daefe954731eb7f7671bba4924b2be', '_blank')}
                      className="w-full bg-[#5A8A5A] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#5A8A5A]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Pousada Vila do Patacho</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Pé na areia! Quartos fofos e bem na temática dos fofos da festa (nós).
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?ss=Pousada%20Vila%20do%20Patacho%2C%20Porto%20de%20Pedras%2C%20Alagoas%2C%20Brasil&group_adults=2&group_children=0&no_rooms=1&ssne=Porto%20de%20Pedras&ssne_untouched=Porto%20de%20Pedras&sb_changed_dest=1&label=gen173nr-10CAEoggI46AdIM1gEaCCIAQKYATO4AQfIAQ3YAQPoAQH4AQGIAgGoAgG4AqX6oswGwAIB0gIkMDBlOGM0NzYtYjg4Ny00OWI5LWIwZDMtOWQxZDMyYjkwNTMx2AIB4AIB&sid=58b9cbb21659ee3e30d0e35fe2b5dae8&aid=304142&lang=pt-br&sb=1&src_elem=sb&src=searchresults&dest_id=2591107&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=xb&ac_suggestion_list_length=3&search_selected=true&search_pageview_id=947b759a4b4106a4&ac_meta=GhA5NDdiNzU5YTRiNDEwNmE0IAAoATICeGI6FFBvdXNhZGEgdmlsYSBwYXRhY2hv&checkin=2026-10-16&checkout=2026-10-18', '_blank')}
                      className="w-full bg-[#5A8A5A] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#5A8A5A]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Alameda Lounge Pousada</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Já ouvimos bem dela. Fica a 12 minutos da praia e uns 15 da cerimônia. Preços acessíveis.
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.booking.com/searchresults.pt-br.html?aid=1726433&label=alameda-lounge-porto-de-pedras-r3vvwQ1u6B6r3gsHzRwleQSM704510274701%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2170916890542%3Alp9101424%3Ali%3Adem%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D7MzDD3Tr9zFI8aoNxL0AfwZxrY8lnjEP2ZE5nLVPnUXosAaHcU_3AaArGqEALw_wcB&highlighted_hotels=9991979&checkin=2026-10-16&redirected=1&city=-663627&hlrd=with_dates&source=hotel&checkout=2026-10-18&keep_landing=1&sid=58b9cbb21659ee3e30d0e35fe2b5dae8', '_blank')}
                      className="w-full bg-[#5A8A5A] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver Pousada
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Grupos */}
            <div>
              <h3 className="font-serif text-3xl text-[#4A9CB8] mb-6 flex items-center gap-3">
                <Hotel className="w-8 h-8" />
                $$ Viagem em Grupo
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/80 border-[#4A9CB8]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">4 Suítes - Até 10 Hóspedes</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Em frente à praia, perfeita para grupos que querem ficar juntos!
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.airbnb.com.br/rooms/1071042474375564812?check_in=2026-10-16&check_out=2026-10-18&guests=1&adults=6&s=67&unique_share_id=76ba5007-1646-4de8-8f80-1581953d3dbd', '_blank')}
                      className="w-full bg-[#4A9CB8] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver no Airbnb
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#4A9CB8]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">4 Quartos - Até 10 Hóspedes</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Espaçoso e confortável para grupos maiores.
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.airbnb.com/rooms/1034210318639088552?check_in=2026-10-16&check_out=2026-10-18&guests=1&adults=6&s=67&unique_share_id=60d8c1cf-71b7-4655-b52d-11c43831211e', '_blank')}
                      className="w-full bg-[#4A9CB8] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver no Airbnb
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 border-[#4A9CB8]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h4 className="font-serif text-xl text-[#6B4423] font-semibold">3 Quartos - Até 10 Hóspedes</h4>
                    <p className="font-sans text-sm text-[#6B4423]/70">
                      Opção acessível para grupos menores.
                    </p>
                    <Button 
                      onClick={() => window.open('https://www.airbnb.com.br/rooms/1050878633269370379?check_in=2026-10-16&check_out=2026-10-18&guests=1&adults=6&s=67&unique_share_id=a69818b0-ed75-4a78-8e85-2b31201f1215', '_blank')}
                      className="w-full bg-[#4A9CB8] hover:bg-[#6B4423] text-white transition-all duration-300"
                    >
                      Ver no Airbnb
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-[#D4A574]/10 border-[#D4A574]/30">
              <CardContent className="p-6 text-center">
                <p className="font-sans text-base text-[#6B4423]/80">
                  <strong>Dica:</strong> Para mais opções, pesquise por "Porto de Pedras, AL" no Airbnb ou Booking.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como aproveitar os dias no Patacho */}
      <section 
        id="aproveitar-patacho" 
        data-animate
        className="py-20 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['aproveitar-patacho'] ? 1 : 0,
          transform: isVisible['aproveitar-patacho'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-4xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-12 font-semibold">
            Como Aproveitar os Dias no Patacho
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-12 text-center space-y-8">
              <div className="text-6xl">🏗️</div>
              <p className="font-sans text-xl text-[#6B4423]/80 leading-relaxed">
                Esta seção está em construção. Em breve, compartilharemos dicas incríveis sobre como aproveitar ao máximo os dias na Praia do Patacho e na Rota Ecológica dos Milagres!
              </p>
            </CardContent>
          </Card>
        </div>

        <WaveDivider color="#F5F2ED" />
      </section>

      {/* Lista de Presentes */}
      <section 
        id="presentes" 
        data-animate
        className="py-20 relative transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663316636568/uUxmcZAnNJPSvBlN.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: isVisible['presentes'] ? 1 : 0,
          transform: isVisible['presentes'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="absolute inset-0 bg-[#F5F2ED]/80" />
        
        <div className="container relative z-10 max-w-4xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-12 font-semibold">
            Lista de Presentes
          </h2>
          
          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-12 text-center space-y-6">
                <Gift className="w-20 h-20 text-[#D4A574] mx-auto" />
                <p className="font-sans text-xl text-[#6B4423]/80 leading-relaxed">
                  Iremos fazer um tour pela América Latina para celebrar a extensão das nossas raízes. Convidamos você a contribuir com experiências que queremos viver!
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Opção 1: R$100 - Drinks */}
              <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/YVsvywaFThXXoNsF.jpeg" 
                    alt="Drinks para brindarmos" 
                    className="w-full h-48 object-contain rounded-lg"
                  />
                  <h4 className="font-serif text-xl text-[#6B4423] font-semibold">R$ 100</h4>
                  <p className="font-sans text-sm text-[#6B4423]/80">
                    Drinks para brindarmos a nossa vida de casados
                  </p>
                  <Button 
                    onClick={() => window.open('https://nubank.com.br/cobrar/177chu/6988ae68-8659-41c1-89b8-490c348046bc', '_blank')}
                    className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                  >
                    Contribuir
                  </Button>
                </CardContent>
              </Card>
              
              {/* Opção 2: R$300 - Pratos */}
              <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/vLZnseWgppEroqIb.jpeg" 
                    alt="Pratos para conhecermos a culinária local" 
                    className="w-full h-48 object-contain rounded-lg"
                  />
                  <h4 className="font-serif text-xl text-[#6B4423] font-semibold">R$ 300</h4>
                  <p className="font-sans text-sm text-[#6B4423]/80">
                    Pratos para conhecermos a culinária local
                  </p>
                  <Button 
                    onClick={() => window.open('https://nubank.com.br/cobrar/177chu/6988ae94-af0c-41ca-8393-40790f993830', '_blank')}
                    className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                  >
                    Contribuir
                  </Button>
                </CardContent>
              </Card>
              
              {/* Opção 3: R$500 - Experiências Turísticas */}
              <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/BrHcfBlCkcDuAwbz.jpeg" 
                    alt="Experiências turísticas completas" 
                    className="w-full h-48 object-contain rounded-lg"
                  />
                  <h4 className="font-serif text-xl text-[#6B4423] font-semibold">R$ 500</h4>
                  <p className="font-sans text-sm text-[#6B4423]/80">
                    Experiências turísticas completas
                  </p>
                  <Button 
                    onClick={() => window.open('https://nubank.com.br/cobrar/177chu/6988aeac-35b3-45fd-abeb-f0efeb962484', '_blank')}
                    className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                  >
                    Contribuir
                  </Button>
                </CardContent>
              </Card>
              
              {/* Opção 4: Escolha seu valor */}
              <Card className="bg-white/80 border-[#D4A574]/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/nrlZneyZFxkWxFCE.jpeg" 
                    alt="Escolha seu valor" 
                    className="w-full h-48 object-contain rounded-lg"
                  />
                  <h4 className="font-serif text-xl text-[#6B4423] font-semibold">Escolha seu valor</h4>
                  <p className="font-sans text-sm text-[#6B4423]/80">
                    Qualquer contribuição é bem-vinda!
                  </p>
                  <Button 
                    onClick={() => window.open('https://nubank.com.br/cobrar/177chu/6988aee0-e5f2-4d6b-98ad-84c9bdf88f32', '_blank')}
                    className="w-full bg-[#D4A574] hover:bg-[#6B4423] text-white transition-all duration-300"
                  >
                    Contribuir
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Como Chegar */}
      <section 
        id="como-chegar" 
        data-animate
        className="py-20 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['como-chegar'] ? 1 : 0,
          transform: isVisible['como-chegar'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-6xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-6 font-semibold">
            Como Chegar
          </h2>
          <p className="font-sans text-lg text-[#6B4423]/70 text-center mb-16 max-w-3xl mx-auto">
            Praia do Patacho fica em um local especial, acessível por duas principais rotas. Escolha a que melhor se adequa ao seu ponto de partida.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Via Recife */}
            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-[#D4A574]" />
                  <h3 className="font-serif text-2xl text-[#6B4423] font-semibold">Via Recife</h3>
                </div>
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/ZrDjicPVXzWuckYc.png" 
                  alt="Mapa via Recife" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <p className="font-sans text-base text-[#6B4423]/80">
                    <strong>Distância:</strong> Aproximadamente 3 horas de carro
                  </p>
                  <p className="font-sans text-base text-[#6B4423]/80">
                    <strong>Recomendação:</strong> Aluguel de carro ou transfer
                  </p>
                  <p className="font-sans text-base text-[#6B4423]/70 italic">
                    Dúvidas sobre a região? Converse com o Pedroca! Ele conhece Recife como ninguém.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Via Maceió */}
            <Card className="bg-white/95 backdrop-blur-sm border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-8 h-8 text-[#D4A574]" />
                  <h3 className="font-serif text-2xl text-[#6B4423] font-semibold">Via Maceió</h3>
                </div>
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/WhvTpKLpwfGswYzJ.png" 
                  alt="Mapa via Maceió" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <p className="font-sans text-base text-[#6B4423]/80">
                    <strong>Distância:</strong> Aproximadamente 2 horas de carro
                  </p>
                  <p className="font-sans text-base text-[#6B4423]/80">
                    <strong>Recomendação:</strong> Aluguel de carro ou transfer
                  </p>
                  <p className="font-sans text-base text-[#6B4423]/70 italic">
                    Dúvidas sobre a região? Converse com a Isadorita! Ela conhece Maceió como ninguém.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <WaveDivider color="#F5F2ED" />
      </section>

      {/* Confirmação de Presença */}
      <section 
        id="confirmacao" 
        data-animate
        className="py-20 bg-[#F5F2ED] transition-all duration-1000 ease-out"
        style={{
          opacity: isVisible['confirmacao'] ? 1 : 0,
          transform: isVisible['confirmacao'] ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="container max-w-2xl px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-[#6B4423] text-center mb-12 font-semibold">
            Confirme sua Presença
          </h2>
          
          <Card className="bg-white/80 border-[#D4A574]/30 shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-12 text-center space-y-8">
              <Mail className="w-20 h-20 text-[#D4A574] mx-auto" />
              <p className="font-sans text-xl text-[#6B4423]/80 leading-relaxed">
                Por favor, confirme sua presença até <strong className="text-[#D4A574]">31 de agosto de 2026</strong>
              </p>
              <div className="space-y-4">
                <p className="font-sans text-lg text-[#6B4423]/70">
                  Preencha o formulário abaixo para confirmar sua presença:
                </p>
                <Button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeTz7SqZj0KiZHW7o9YTaJdLJZcbU0sBdwhU3JPaGm7k2bLGQ/viewform?usp=sharing&ouid=117603762171872638737', '_blank')}
                  className="bg-[#D4A574] hover:bg-[#6B4423] text-white font-sans uppercase tracking-wider px-8 py-6 text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Confirmar Presença
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#6B4423] text-white">
        <div className="container text-center space-y-4 px-6">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663341133733/KOaHVoZBiNpjdqhz.png" 
            alt="I&P" 
            className="h-16 mx-auto"
          />
          <p className="font-sans text-sm opacity-80">16 e 17 de Outubro de 2026 • Praia do Patacho, Porto de Pedras - AL</p>
          <div className="flex justify-center gap-2 items-center pt-4">
            <Heart className="w-5 h-5 text-[#D4A574]" />
            <p className="font-sans text-xs opacity-60">Feito com amor para celebrar nosso amor</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
