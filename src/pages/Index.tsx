import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import TradingChart from "@/components/TradingChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Binarium</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#advantages"
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#stats"
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              Статистика
            </a>
            <a
              href="#faq"
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              FAQ
            </a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <a href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68">
              Войти
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Icon name="Shield" size={16} />
              <span className="text-sm font-medium">
                Лицензированный брокер с 2012 года
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Торгуйте бинарными опционами с максимальной выгодой
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Надежная платформа для трейдинга с доходностью до 90%. Быстрый
              вывод средств и круглосуточная поддержка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white h-12 px-8"
              >
                <a href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68">
                  Начать торговать
                </a>
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon
                  name="CheckCircle2"
                  size={20}
                  className="text-secondary"
                />
                <span>Минимальный депозит $10</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CheckCircle2"
                  size={20}
                  className="text-secondary"
                />
                <span>Вывод за 24 часа</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="CheckCircle2"
                  size={20}
                  className="text-secondary"
                />
                <span>Более 100 активов</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Торгуйте в реальном времени
            </h2>
            <p className="text-muted-foreground text-lg">
              Следите за движением цены и открывайте сделки прямо сейчас
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <TradingChart />
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему выбирают Binarium
            </h2>
            <p className="text-muted-foreground text-lg">
              Надежный брокер с более чем 10-летней историей на рынке бинарных
              опционов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Percent" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Высокая доходность</h3>
                <p className="text-muted-foreground">
                  До 90% прибыли с каждой успешной сделки. Фиксированный доход
                  без скрытых комиссий.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Zap" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Быстрый старт</h3>
                <p className="text-muted-foreground">
                  Регистрация за 30 секунд. Минимальный депозит всего $10 для
                  начала торговли.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon
                    name="CreditCard"
                    className="text-secondary"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold">Удобный вывод</h3>
                <p className="text-muted-foreground">
                  Вывод средств за 24 часа на банковские карты, электронные
                  кошельки и криптовалюты.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon name="Shield" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-bold">Безопасность</h3>
                <p className="text-muted-foreground">
                  Лицензированный брокер. SSL-шифрование данных и защита средств
                  клиентов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon
                    name="GraduationCap"
                    className="text-secondary"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold">Обучение</h3>
                <p className="text-muted-foreground">
                  Бесплатные обучающие материалы, вебинары и демо-счет для
                  практики.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Icon
                    name="Headphones"
                    className="text-secondary"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-bold">Поддержка 24/7</h3>
                <p className="text-muted-foreground">
                  Круглосуточная техническая поддержка на русском языке в чате и
                  по телефону.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">
                10+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Лет на рынке
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">
                500K+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Активных трейдеров
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">
                $50M+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Выплачено клиентам
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">
                100+
              </div>
              <div className="text-white/80 text-sm md:text-base">
                Торговых активов
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о торговле бинарными опционами
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Что такое бинарные опционы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Бинарные опционы — это финансовый инструмент, позволяющий
                  прогнозировать движение цены актива (валютные пары, акции,
                  товары) за определенный промежуток времени. Если прогноз
                  верный, трейдер получает фиксированную прибыль до 90%. Это
                  простой способ заработка на финансовых рынках, не требующий
                  глубоких знаний.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Как начать торговать на Binarium?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Для начала торговли необходимо: 1) Зарегистрироваться на
                  платформе (занимает 30 секунд); 2) Пополнить счет минимум на
                  $10; 3) Выбрать актив и направление движения цены; 4) Указать
                  сумму сделки и время экспирации; 5) Дождаться закрытия сделки
                  и получить прибыль. Также рекомендуем начать с демо-счета для
                  практики без риска.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Какой минимальный депозит и сумма сделки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Минимальный депозит на Binarium составляет всего $10, что
                  делает платформу доступной для новичков. Минимальная сумма
                  одной сделки — $1. Это позволяет начать торговлю с
                  минимальными рисками и постепенно наращивать капитал по мере
                  получения опыта.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Как быстро можно вывести деньги?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Вывод средств на Binarium обрабатывается в течение 24 часов с
                  момента подачи заявки. Деньги можно вывести на банковские
                  карты Visa/MasterCard, электронные кошельки (QIWI, WebMoney,
                  Яндекс.Деньги), а также на криптовалютные кошельки. Комиссия
                  за вывод не взимается. Для первого вывода потребуется
                  верификация личности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Безопасна ли торговля на Binarium?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Да, Binarium — это лицензированный брокер, работающий с 2012
                  года. Платформа использует SSL-шифрование для защиты
                  персональных данных и финансовых транзакций. Средства клиентов
                  хранятся на защищенных счетах отдельно от операционных средств
                  компании. Binarium регулярно проходит аудит и имеет все
                  необходимые сертификаты безопасности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Какие активы доступны для торговли?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  На Binarium доступно более 100 торговых активов: валютные пары
                  (EUR/USD, GBP/USD и др.), акции крупнейших компаний (Apple,
                  Google, Tesla), товарные активы (золото, нефть, серебро),
                  криптовалюты (Bitcoin, Ethereum, Litecoin), а также индексы
                  (S&P 500, NASDAQ). Все активы доступны 24/7 с актуальными
                  котировками в режиме реального времени.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Есть ли обучение для новичков?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Да, Binarium предоставляет полный пакет обучающих материалов
                  бесплатно: видеоуроки по основам торговли, вебинары с
                  профессиональными трейдерами, статьи и аналитические обзоры
                  рынка, демо-счет с виртуальными $1000 для практики, а также
                  персонального менеджера для консультаций. Рекомендуем начинать
                  с демо-счета, чтобы освоить все функции платформы без риска.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Какая доходность на платформе?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Доходность на Binarium достигает до 90% с каждой успешной
                  сделки. Конкретный процент прибыли зависит от выбранного
                  актива и времени экспирации. Например, при сделке на $100 с
                  доходностью 85%, в случае успеха вы получите $185 ($100 + $85
                  прибыли). Доходность фиксирована и известна до открытия
                  сделки, что позволяет точно рассчитывать потенциальную
                  прибыль.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-9"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Можно ли торговать с мобильного телефона?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Да, Binarium имеет мобильные приложения для iOS и Android, а
                  также полностью адаптивную веб-версию. Мобильное приложение
                  включает все функции десктопной версии: реальная торговля и
                  демо-счет, все активы и индикаторы технического анализа,
                  пополнение и вывод средств, история сделок и аналитика. Вы
                  можете торговать в любое время и в любом месте.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-10"
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  Есть ли скрытые комиссии?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  Нет, Binarium не взимает скрытых комиссий. Все условия
                  прозрачны: нет комиссии за регистрацию и обслуживание счета,
                  нет комиссии за пополнение депозита, нет комиссии за вывод
                  средств, фиксированная доходность известна до открытия сделки.
                  Единственные расходы — это потенциальный убыток при неверном
                  прогнозе, но его размер также известен заранее и ограничен
                  суммой вашей ставки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-lg text-white/90">
              Присоединяйтесь к 500 000+ трейдеров, которые уже торгуют на
              Binarium
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Input
                placeholder="Введите email"
                className="max-w-xs bg-white text-primary placeholder:text-muted-foreground h-12"
              />
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white h-12 px-8"
              >
                <a href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68">
                  Открыть счет бесплатно
                </a>
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <p className="text-sm text-white/70">
              Демо-счет с $1000 для практики • Без скрытых комиссий
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">Binarium</span>
              </div>
              <p className="text-white/70 text-sm">
                Надежный брокер бинарных опционов с 2012 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Торговля</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Валютные пары
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Акции
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Криптовалюты
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Товары
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Обучение</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Видеоуроки
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Вебинары
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Аналитика
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Стратегии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Связаться с нами
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Верификация
                  </a>
                </li>
                <li>
                  <a
                    href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                    className="hover:text-white transition-colors"
                  >
                    Условия
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2024 Binarium. Все права защищены.</p>
            <div className="flex gap-6">
              <a
                href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                className="hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="https://clck.biz/shared-reg?mode=iframe&partner_id=p37962p132354paf68"
                className="hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;