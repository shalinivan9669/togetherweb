export function ProblemsSection() {
  const vectors = [
    {
      title: "Быт",
      now: "Кто-то тянет всё на себе, копит обиды и молча устаёт.",
      with: "Распределили задачи, видно кто за что отвечает — меньше претензий.",
    },
    {
      title: "Сексуальность",
      now: "Неловкость, умолчания или «само как-то наладится» — не налаживается.",
      with: "Честный разговор о желаниях, границах, безопасности — без стыда.",
    },
    {
      title: "Личные интересы",
      now: "Либо растворяетесь друг в друге, либо живёте параллельно.",
      with: "Понятный баланс: есть «мы», есть «я» — и это нормально.",
    },
    {
      title: "Коммуникация",
      now: "Молчание, срывы, манипуляции — всё что угодно, кроме прямого разговора.",
      with: "Сценарии, как говорить о сложном без скандалов и ухода в себя.",
    },
    {
      title: "Финансы",
      now: "Хаос, скрытые обиды, «он(а) не умеет обращаться с деньгами».",
      with: "Простая система: что общее, что личное — без игры в угадайку.",
    },
    {
      title: "Психика",
      now: "Один спасает, другой тонет — или оба выгорают по отдельности.",
      with: "Понимание своего состояния и границ поддержки без слияния.",
    },
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#181820]" id="vectors">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 space-y-4">
          <h2>Где обычно ломаются отношения — и как 6 векторов это чинят</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vectors.map((vector, index) => (
            <div
              key={index}
              className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6 space-y-6 hover:border-[#DF9AA6] transition-colors"
            >
              <h3 className="text-[#F9FAFB]">{vector.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="label text-[#9CA3AF] mb-2">Сейчас:</p>
                  <p className="text-sm text-[#F9FAFB] leading-relaxed">{vector.now}</p>
                </div>
                
                <div>
                  <p className="label text-[#9CA3AF] mb-2">С нами:</p>
                  <p className="text-sm text-[#F9FAFB] leading-relaxed">{vector.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
