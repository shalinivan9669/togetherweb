export function ResultsSection() {
  const results = [
    {
      vector: "Быт",
      was: "хаос и обиды за несправедливость",
      became: "понятные роли и меньше претензий",
    },
    {
      vector: "Сексуальность",
      was: "неловкость и умолчания",
      became: "честные разговоры о желаниях",
    },
    {
      vector: "Личные интересы",
      was: "или слияние, или изоляция",
      became: "баланс «мы» и «я» без вины",
    },
    {
      vector: "Коммуникация",
      was: "срывы или молчание",
      became: "прямые разговоры без драмы",
    },
    {
      vector: "Финансы",
      was: "хаос и скрытые обиды за деньги",
      became: "понятные правила и меньше конфликтов",
    },
    {
      vector: "Психика",
      was: "выгорание и спасательство",
      became: "поддержка без слияния и границы",
    },
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#2D2F36]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2>Что поменяется через 3 месяца, если вы не сольётесь</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6 space-y-6"
            >
              <h3 className="text-[#DF9AA6]">{result.vector}</h3>

              <div className="space-y-4">
                <div>
                  <p className="label text-[#9CA3AF] mb-2">Было:</p>
                  <p className="text-sm text-[#F9FAFB] leading-relaxed">{result.was}</p>
                </div>

                <div className="pt-4 border-t border-[#2F3037]">
                  <p className="label text-[#9CA3AF] mb-2">Стало:</p>
                  <p className="text-sm text-[#F9FAFB] font-medium leading-relaxed">{result.became}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
