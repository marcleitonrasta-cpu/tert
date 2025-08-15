import React, { useState, useEffect } from 'react';
import { Star, Clock, CreditCard, Phone, MapPin, Truck, Shield, Zap, Ruler, RotateCcw, MessageCircle, CheckCircle, ArrowRight, Wrench, Home, Building, Camera, Users, Apple as WhatsApp } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hour = now.getHours();
      const minute = now.getMinutes();
      const currentTime = hour + minute / 60;
      
      // Monday to Saturday: 7:30-18:30
      if (day >= 1 && day <= 6) {
        setIsOpen(currentTime >= 7.5 && currentTime < 18.5);
      }
      // Sunday: 8:00-12:00
      else if (day === 0) {
        setIsOpen(currentTime >= 8 && currentTime < 12);
      }
    };
    
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = "Olá, quero alugar uma caçamba";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b-2 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/9Hz2PvbW/imgi-1-retec-1-Y4-Lvx9jk0v-Fyg15-Y.png" 
                alt="Disk Caçambas Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Disk Caçambas</h1>
              </div>
            </div>
            
            {/* Info Chips - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-full">
                <Star className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">4,9</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-full">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">Entrega até 2h</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-full">
                <CreditCard className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">PIX | Cartão | Boleto</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 px-3 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-semibold text-gray-800">São Paulo e Região</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center space-x-2 text-sm lg:text-base"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <button 
                onClick={() => scrollToSection('orcamento')}
                className="border-2 border-white bg-transparent hover:bg-white hover:text-gray-900 text-white px-6 py-2 rounded-full font-semibold transition-colors text-sm lg:text-base hidden sm:block"
              >
                Orçamento
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://i.ibb.co/4Zd31sW0/imgi-31-whatsapp-image-2025-07-08-at-17-35-53-2-mx-BXMK0x0wtje-Nq8.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Aluguel de Caçambas e<br />
            <span className="text-orange-500">Retirada de Entulho</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Entrega rápida, preço justo e destinação correta
          </p>
          
          {/* Status */}
          <div className="mb-8">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}>
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-200' : 'bg-red-200'} animate-pulse`} />
              <span className="font-semibold">{isOpen ? 'ABERTO AGORA' : 'FECHADO'}</span>
            </div>
            <p className="text-sm mt-2 opacity-90">
              Seg a Sáb: 07:30–18:30 | Dom: 08:00–12:00
            </p>
          </div>
          
          {/* Promotional Banner */}
          <div className="bg-orange-500 text-white py-3 px-6 rounded-lg mb-8 text-lg font-semibold">
            🔥 PROMOÇÕES VÁLIDAS APENAS PELO SITE. CHAME NO WHATSAPP!
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Pedir Caçamba no WhatsApp</span>
            </a>
            <button 
              onClick={() => scrollToSection('orcamento')}
              className="border-2 border-white bg-transparent hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors transform hover:scale-105"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Por que escolher a <span className="text-orange-500">Disk Caçambas?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-orange-500" />,
                title: "Entrega Rápida",
                description: "Entregamos no mesmo dia com agilidade total"
              },
              {
                icon: <Shield className="w-8 h-8 text-orange-500" />,
                title: "Empresa Regularizada",
                description: "Licenças ambientais e documentação em dia"
              },
              {
                icon: <CreditCard className="w-8 h-8 text-orange-500" />,
                title: "Pagamento Fácil",
                description: "PIX, Cartão ou Boleto - você escolhe"
              },
              {
                icon: <Ruler className="w-8 h-8 text-orange-500" />,
                title: "Várias Medidas",
                description: "3m³, 4m³ e 5m³ para qualquer necessidade"
              },
              {
                icon: <RotateCcw className="w-8 h-8 text-orange-500" />,
                title: "Retirada Programada",
                description: "Agendamos a retirada conforme sua conveniência"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
                title: "Atendimento WhatsApp",
                description: "Suporte imediato pelo WhatsApp"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models and Prices */}
      <section id="modelos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Nossos <span className="text-orange-500">Modelos</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">Escolha o tamanho ideal para sua obra</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                size: "3m³",
                image: "https://i.ibb.co/399yncMW/imgi-13-whatsapp-image-2025-07-08-at-17-35-53-1-YD0w-BXaj-OEszaw-OE.jpg",
                use: "Reformas pequenas, poda, entulho leve",
                price: "160",
                popular: false
              },
              {
                size: "4m³",
                image: "https://i.ibb.co/4n1R7Vfz/imgi-21-whatsapp-image-2025-07-08-at-17-39-59-mx-BXMKzorb-Fq-Lb-Zz.jpg",
                use: "Reformas médias, demolições leves",
                price: "220",
                popular: true
              },
              {
                size: "5m³",
                image: "https://i.ibb.co/wFYdYd1g/Imagem-do-Whats-App-de-2025-07-31-s-12-56-03-2a15a2c3.jpg",
                use: "Obras grandes/condomínios",
                price: "300",
                popular: false
              },
              {
                size: "7m³",
                image: "https://i.ibb.co/4Zd31sW0/imgi-31-whatsapp-image-2025-07-08-at-17-35-53-2-mx-BXMK0x0wtje-Nq8.jpg",
                use: "Obras muito grandes, demolições",
                price: "400",
                popular: false
              }
            ].map((model, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden ${model.popular ? 'ring-4 ring-orange-500' : ''}`}>
                {model.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Mais Pedida
                  </div>
                )}
                
                <div className="aspect-video relative">
                  <img 
                    src={model.image} 
                    alt={`Caçamba ${model.size}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Caçamba {model.size}</h3>
                  <p className="text-gray-600 mb-4">{model.use}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-orange-500">R$ {model.price}</span>
                    <span className="text-gray-600 ml-2">a partir de</span>
                  </div>
                  <a 
                    href={`${whatsappUrl} - Caçamba ${model.size}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Alugar pelo WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Como <span className="text-orange-500">Funciona</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                icon: <MessageCircle className="w-12 h-12 text-orange-500" />,
                title: "Chame no WhatsApp",
                description: "Entre em contato e informe suas necessidades"
              },
              {
                step: "2",
                icon: <Truck className="w-12 h-12 text-orange-500" />,
                title: "Entregamos a Caçamba",
                description: "Levamos até você no prazo combinado"
              },
              {
                step: "3",
                icon: <Wrench className="w-12 h-12 text-orange-500" />,
                title: "Você Enche",
                description: "Deposite apenas material permitido"
              },
              {
                step: "4",
                icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
                title: "Retiramos",
                description: "Coletamos e destinamos corretamente"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4 hover:shadow-xl transition-shadow">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Nossa <span className="text-orange-500">Frota</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://i.ibb.co/4Zd31sW0/imgi-31-whatsapp-image-2025-07-08-at-17-35-53-2-mx-BXMK0x0wtje-Nq8.jpg",
              "https://i.ibb.co/399yncMW/imgi-13-whatsapp-image-2025-07-08-at-17-35-53-1-YD0w-BXaj-OEszaw-OE.jpg",
              "https://i.ibb.co/zTLf4zdM/imgi-25-photo-1697993131332-dea7c4771d4a.jpg",
              "https://i.ibb.co/wFYdYd1g/Imagem-do-Whats-App-de-2025-07-31-s-12-56-03-2a15a2c3.jpg"
            ].map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Frota ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Quote Form */}
      <section id="orcamento" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Solicite seu <span className="text-orange-500">Orçamento</span>
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Resposta rápida e preço personalizado
            </p>
            
            <form className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">WhatsApp *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Endereço *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Endereço completo para entrega"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tamanho da Caçamba</label>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Selecione o tamanho</option>
                    <option value="3m3">3m³ - Reformas pequenas</option>
                    <option value="4m3">4m³ - Reformas médias</option>
                    <option value="5m3">5m³ - Obras grandes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tipo de Resíduo</label>
                  <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Selecione o tipo</option>
                    <option value="entulho">Entulho de construção</option>
                    <option value="poda">Galhos e folhas</option>
                    <option value="moveis">Móveis velhos</option>
                    <option value="misto">Material misto</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Observações</label>
                  <textarea 
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Informações adicionais sobre sua necessidade..."
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-full text-lg font-semibold transition-colors mt-8 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quero Orçamento Agora</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://i.ibb.co/9Hz2PvbW/imgi-1-retec-1-Y4-Lvx9jk0v-Fyg15-Y.png" 
                  alt="Disk Caçambas Logo" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold">Disk Caçambas</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Atendimento rápido e descarte responsável
              </p>
              <div className="space-y-2 text-gray-400">
                <p>📍 São Paulo e Região Metropolitana</p>
                <p>⏰ Seg a Sáb: 07:30–18:30 | Dom: 08:00–12:00</p>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contato</h4>
              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>
                <a 
                  href="https://instagram.com/diskcacambas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  <Camera className="w-5 h-5" />
                  <span>@diskcacambas</span>
                </a>
              </div>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="text-xl font-bold mb-6">Informações</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-400 hover:text-orange-500 transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Disk Caçambas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors z-40 animate-pulse"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;