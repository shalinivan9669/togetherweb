import { Rocket, Zap, Sparkles } from "lucide-react";

export function RoadmapSection() {
  const stages = [
    {
      title: "Сейчас",
      icon: Rocket,
      items: [
        "Discord / веб-версия и месячный цикл по 6 векторам.",
        "Отдельные сценарии для пар и одиночек.",
      ],
    },
    {
      title: "3–6 месяцев",
      icon: Zap,
      items: [
        "Telegram-версия.",
        "Дополнительные месячные циклы по деньгам, сексуальности, коммуникации.",
      ],
    },
    {
      title: "12+ месяцев",
      icon: Sparkles,
      items: [
        "Мобильное приложение с аналитикой по 6 векторам.",
        "Сезоны на 3–6 месяцев.",
        "Матчинг подготовленных синглов по данным 6 векторов.",
      ],
    },
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#181820]" id="roadmap">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2>Куда "Вместе" будет развиваться дальше</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[#F9FAFB]">{stage.title}</h3>
                  </div>

                  <ul className="space-y-4">
                    {stage.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DF9AA6] mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-[#F9FAFB] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector line */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-[#2F3037]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
