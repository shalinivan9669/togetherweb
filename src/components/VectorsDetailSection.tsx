import { Home, Heart, User, MessageCircle, DollarSign, Brain } from "lucide-react";

export function VectorsDetailSection() {
  const vectors = [
    {
      icon: Home,
      title: "Быт",
      description: "кто что делает и несёт ответственность, а не только моет посуду",
    },
    {
      icon: Heart,
      title: "Сексуальность",
      description: "желания, границы и безопасность, а не просто «есть / нет секса»",
    },
    {
      icon: User,
      title: "Личные интересы",
      description: "баланс между «мы вместе» и «у каждого своя жизнь»",
    },
    {
      icon: MessageCircle,
      title: "Коммуникация",
      description: "как вы говорите о сложном: честно или через молчание и срывы",
    },
    {
      icon: DollarSign,
      title: "Финансы",
      description: "как вы обращаетесь с общими и личными деньгами",
    },
    {
      icon: Brain,
      title: "Психика",
      description: "в каком вы состоянии и как поддерживаете друг друга",
    },
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#181820]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Левая колонка */}
          <div className="space-y-6 max-w-[600px]">
            <h2>6 векторов отношений: модель вместо хаоса</h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Мы не говорим "работайте над отношениями" в общем. Мы раскладываем вашу жизнь по 6 сферам и показываем, что именно менять.
            </p>
          </div>

          {/* Правая колонка */}
          <div className="space-y-6">
            {vectors.map((vector, index) => {
              const Icon = vector.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-[#F9FAFB] mb-2">{vector.title}</h3>
                    <p className="label text-[#9CA3AF] leading-relaxed">{vector.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
