import { Clock } from "lucide-react";

export function TimelineSection() {
  const weeks = [
    { week: 1, title: "Диагностика" },
    { week: 2, title: "Коммуникация и быт" },
    { week: 3, title: "Психика и интимность" },
    { week: 4, title: "Деньги и итоги" },
  ];

  const vectors = ["Быт", "Секс", "Интересы", "Коммуникация", "Финансы", "Психика"];
  
  const matrix = [
    ["диагностика", "диагностика", "диагностика", "фокус", "диагностика", "диагностика"],
    ["фокус", "обсуждение", "обсуждение", "фокус", "обсуждение", "обсуждение"],
    ["обсуждение", "фокус", "обсуждение", "обсуждение", "обсуждение", "фокус"],
    ["обсуждение", "обсуждение", "итоги", "итоги", "фокус", "итоги"],
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#2D2F36]" id="how">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 space-y-6">
          <h2>Понятная программа на 4 недели, а не "работайте над отношениями вообще"</h2>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-[700px]">
            Один цикл — один месяц. Каждую неделю вы опираетесь на те же 6 векторов, но с разным фокусом.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-4 gap-4">
            {weeks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-[#23232A] border-2 border-[#DF9AA6] rounded-xl p-6 text-center">
                  <div className="label text-[#DF9AA6] mb-2">Неделя {item.week}</div>
                  <div className="text-sm text-[#F9FAFB] font-medium">{item.title}</div>
                </div>
                {index < weeks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[#DF9AA6]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix */}
        <div className="overflow-x-auto mb-8">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-7 gap-px bg-[#2F3037] border border-[#2F3037] rounded-xl overflow-hidden">
              {/* Header row */}
              <div className="bg-[#23232A] p-4"></div>
              {vectors.map((vector, index) => (
                <div key={index} className="bg-[#23232A] p-4 text-center label text-[#F9FAFB]">
                  {vector}
                </div>
              ))}
              
              {/* Data rows */}
              {matrix.map((row, weekIndex) => (
                <>
                  <div 
                    key={`week-${weekIndex}`} 
                    className={`${weekIndex % 2 === 0 ? 'bg-[#23232A]' : 'bg-[#2D2F36]'} p-4 label text-[#9CA3AF]`}
                  >
                    Неделя {weekIndex + 1}
                  </div>
                  {row.map((cell, cellIndex) => (
                    <div
                      key={`cell-${weekIndex}-${cellIndex}`}
                      className={`${weekIndex % 2 === 0 ? 'bg-[#23232A]' : 'bg-[#2D2F36]'} p-4 text-center text-xs ${
                        cell === "фокус" ? "text-[#DF9AA6] font-semibold" : "text-[#9CA3AF]"
                      }`}
                    >
                      {cell}
                    </div>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Time indicator */}
        <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6 flex items-center gap-4 max-w-xl">
          <Clock className="w-5 h-5 text-[#DF9AA6] flex-shrink-0" />
          <p className="label text-[#F9FAFB]">
            Нагрузка: 15–30 минут в неделю, задания подстраиваются под ваш ресурс.
          </p>
        </div>
      </div>
    </section>
  );
}
