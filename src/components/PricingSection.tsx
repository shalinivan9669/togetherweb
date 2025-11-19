export function PricingSection() {
  const coupleFeatures = [
    { vector: "Быт", description: "ежемесячная пересборка обязанностей + недельные чек-листы" },
    { vector: "Сексуальность", description: "1 структурный разговор и 1–2 челленджа на близость" },
    { vector: "Личные интересы", description: "упражнения на баланс «вместе / по отдельности»" },
    { vector: "Коммуникация", description: "еженедельный сценарий ключевого разговора" },
    { vector: "Финансы", description: "простая схема общих и личных денег" },
    { vector: "Психика", description: "упражнения на поддержку без спасательства" },
  ];

  const singleFeatures = [
    { vector: "Быт", description: "навык планирования личного пространства и ответственности" },
    { vector: "Сексуальность", description: "работа с границами и желаниями до отношений" },
    { vector: "Личные интересы", description: "понимание баланса автономности и близости" },
    { vector: "Коммуникация", description: "тренировка прямых разговоров о важном" },
    { vector: "Финансы", description: "подготовка к обсуждению денег в паре" },
    { vector: "Психика", description: "самопознание и готовность к эмоциональной близости" },
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#2D2F36]" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 space-y-6 text-center">
          <h2>Сколько стоит не разнести свои отношения</h2>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-[600px] mx-auto">
            Цена как один день обычных трат — результат на месяцы и годы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Тариф "Пара" */}
          <div className="bg-[#23232A] border-2 border-[#DF9AA6] rounded-xl overflow-hidden">
            <div className="bg-gradient-to-br from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] text-white p-8">
              <h3 className="text-white mb-3">Тариф "Пара"</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none">14 $</span>
                <span className="text-lg opacity-90">/ месяц</span>
              </div>
              <p className="text-sm opacity-90 mt-2">(7 $ с человека)</p>
            </div>

            <div className="p-8 space-y-6">
              {coupleFeatures.map((feature, index) => (
                <div key={index} className="pb-6 border-b border-[#2F3037] last:border-0">
                  <p className="font-semibold text-[#F9FAFB] mb-2">{feature.vector}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{feature.description}</p>
                </div>
              ))}

              <button className="w-full bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] hover:from-[#DF9AA6] hover:to-[#C46E85] text-white h-12 rounded-full transition-all font-medium mt-8">
                Начать как пара
              </button>
            </div>
          </div>

          {/* Тариф "Одиночка" */}
          <div className="bg-[#23232A] border border-[#2F3037] rounded-xl overflow-hidden">
            <div className="bg-[#2D2F36] p-8 border-b border-[#2F3037]">
              <h3 className="text-[#F9FAFB] mb-3">Тариф "Одиночка"</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-[42px] font-bold leading-none text-[#F9FAFB]">4.5 $</span>
                <span className="text-lg text-[#9CA3AF]">/ месяц</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {singleFeatures.map((feature, index) => (
                <div key={index} className="pb-6 border-b border-[#2F3037] last:border-0">
                  <p className="font-semibold text-[#F9FAFB] mb-2">{feature.vector}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{feature.description}</p>
                </div>
              ))}

              <button className="w-full border border-[#DF9AA6] text-[#DF9AA6] hover:bg-[#DF9AA6] hover:text-white h-12 rounded-full transition-all font-medium mt-8">
                Начать как одиночка
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
