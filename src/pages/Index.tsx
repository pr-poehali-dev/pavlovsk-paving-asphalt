import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: 'Layers3',
      title: 'Производство тротуарной плитки',
      description: 'Собственное производство качественной тротуарной плитки различных форм и цветов с использованием современных технологий'
    },
    {
      icon: 'Hammer',
      title: 'Укладка тротуарной плитки',
      description: 'Профессиональная укладка тротуарной плитки с соблюдением всех технологических требований и стандартов качества'
    },
    {
      icon: 'Route',
      title: 'Асфальтирование дорог',
      description: 'Асфальтирование дорог, дворов, парковок и проездов с использованием качественных материалов и современных технологий'
    },
    {
      icon: 'TreePine',
      title: 'Благоустройство территории',
      description: 'Комплексное облагораживание территории: озеленение, установка малых архитектурных форм, дренаж'
    }
  ];

  const portfolio = [
    {
      title: 'ЖК "Павловские Дворики"',
      description: 'Производство и укладка 2800 м² тротуарной плитки',
      image: '/img/1aa7fafd-728d-4f19-8d3e-bf12c328ab69.jpg'
    },
    {
      title: 'Двор на ул. Кирова', 
      description: 'Асфальтирование дворовой территории 850 м²',
      image: '/img/a6f85913-ce90-4581-aa5e-d04e3bc9235b.jpg'
    },
    {
      title: 'Городской сквер',
      description: 'Облагораживание территории с укладкой дорожек',
      image: '/img/d9c731a7-d126-4e18-92b0-5ca4b5c5d2bc.jpg'
    }
  ];

  const prices = [
    { service: 'Укладка тротуарной плитки', price: 'от 800 руб/м²' },
    { service: 'Производство плитки', price: 'от 450 руб/м²' },
    { service: 'Асфальтирование', price: 'от 1200 руб/м²' },
    { service: 'Благоустройство', price: 'от 600 руб/м²' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-montserrat font-bold text-2xl text-steel-blue">
              ПавлоСтрой
            </div>
            <div className="hidden md:flex space-x-8 font-open-sans">
              <a href="#home" className="text-steel-blue hover:text-bright-orange transition-colors">Главная</a>
              <a href="#services" className="text-steel-blue hover:text-bright-orange transition-colors">Услуги</a>
              <a href="#portfolio" className="text-steel-blue hover:text-bright-orange transition-colors">Портфолио</a>
              <a href="#about" className="text-steel-blue hover:text-bright-orange transition-colors">О компании</a>
              <a href="#price" className="text-steel-blue hover:text-bright-orange transition-colors">Прайс</a>
              <a href="#contacts" className="text-steel-blue hover:text-bright-orange transition-colors">Контакты</a>
            </div>
            <Button className="bg-bright-orange hover:bg-bright-orange/90 text-white font-open-sans font-semibold">
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-bright-orange to-steel-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 animate-fade-in">
            Качественные дорожные работы в Павловском Посаде
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in">
            Производство и укладка тротуарной плитки, асфальтирование дорог, благоустройство территории. 
            Гарантия качества и сроков выполнения работ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-steel-blue hover:bg-gray-100 font-open-sans font-semibold text-lg px-8">
              Получить расчет
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-blue font-open-sans font-semibold text-lg px-8">
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-steel-blue mb-4">
              Наши услуги
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по дорожному строительству и благоустройству территории
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-bright-orange rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-steel-blue">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-open-sans text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-steel-blue mb-4">
              Наши работы
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов в Павловском Посаде и области
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat font-semibold text-steel-blue">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-steel-blue mb-6">
                О компании
              </h2>
              <div className="font-open-sans text-lg text-gray-700 space-y-4">
                <p>
                  Компания "ПавлоСтрой" работает в сфере дорожного строительства и благоустройства 
                  территории в Павловском Посаде уже более 10 лет.
                </p>
                <p>
                  Мы специализируемся на производстве и укладке тротуарной плитки, асфальтировании 
                  дорог и комплексном благоустройстве территории.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <div className="font-montserrat font-bold text-3xl text-bright-orange">500+</div>
                    <div className="font-open-sans text-sm text-gray-600">Выполненных проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="font-montserrat font-bold text-3xl text-bright-orange">10+</div>
                    <div className="font-open-sans text-sm text-gray-600">Лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-montserrat font-semibold text-2xl text-steel-blue mb-6">
                Наши преимущества
              </h3>
              <div className="space-y-4">
                {[
                  'Собственное производство плитки',
                  'Современное оборудование',
                  'Опытная команда специалистов',
                  'Гарантия на все виды работ',
                  'Бесплатный выезд на объект'
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-bright-orange" />
                    <span className="font-open-sans">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-steel-blue mb-4">
              Прайс-лист
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Базовые цены на наши услуги. Итоговая стоимость рассчитывается индивидуально
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat font-semibold text-2xl text-steel-blue text-center">
                  Стоимость работ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prices.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                      <span className="font-open-sans font-medium text-steel-blue">{item.service}</span>
                      <span className="font-montserrat font-semibold text-bright-orange text-lg">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button className="bg-bright-orange hover:bg-bright-orange/90 text-white font-open-sans font-semibold px-8">
                    Получить точный расчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-steel-blue mb-4">
              Контакты
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для консультации и расчета стоимости работ
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bright-orange rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-steel-blue">Телефон</div>
                  <div className="font-open-sans text-lg">+7 (496) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bright-orange rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-steel-blue">Email</div>
                  <div className="font-open-sans text-lg">info@pavlostroy.ru</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bright-orange rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-steel-blue">Адрес</div>
                  <div className="font-open-sans text-lg">г. Павловский Посад, ул. Строительная, 15</div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-montserrat font-semibold text-steel-blue">
                  Оставить заявку
                </CardTitle>
                <CardDescription className="font-open-sans">
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="font-open-sans font-medium text-steel-blue block mb-2">Имя</label>
                  <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 font-open-sans" placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="font-open-sans font-medium text-steel-blue block mb-2">Телефон</label>
                  <input type="tel" className="w-full border border-gray-300 rounded-md px-3 py-2 font-open-sans" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="font-open-sans font-medium text-steel-blue block mb-2">Услуга</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 font-open-sans">
                    <option>Выберите услугу</option>
                    <option>Укладка тротуарной плитки</option>
                    <option>Асфальтирование</option>
                    <option>Благоустройство</option>
                  </select>
                </div>
                <Button className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-open-sans font-semibold">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-montserrat font-bold text-2xl mb-4">ПавлоСтрой</div>
              <p className="font-open-sans text-gray-300">
                Качественные дорожные работы и благоустройство территории в Павловском Посаде
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">Услуги</h3>
              <ul className="font-open-sans space-y-2 text-gray-300">
                <li>Производство тротуарной плитки</li>
                <li>Укладка тротуарной плитки</li>
                <li>Асфальтирование дорог</li>
                <li>Благоустройство территории</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
              <div className="font-open-sans space-y-2 text-gray-300">
                <div>+7 (496) 123-45-67</div>
                <div>info@pavlostroy.ru</div>
                <div>г. Павловский Посад, ул. Строительная, 15</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center font-open-sans text-gray-300">
            <p>&copy; 2024 ПавлоСтрой. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}