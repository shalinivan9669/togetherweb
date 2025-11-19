import { MessageSquare, ListChecks, TrendingUp } from "lucide-react";

export function FormatSection() {
  const features = [
    "Еженедельные сценарии разговоров по 6 векторам.",
    "Личные и парные задания, привязанные к вашему ресурсу.",
    "Напоминания и фиксация прогресса без лишнего шума.",
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#181820]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 space-y-6">
          <h2>Формат: Discord и веб вместо бесконечных курсов</h2>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-[700px]">
            Вы работаете с отношениями в привычной среде: сценарии сессий, напоминания, задания — внутри Discord и веб-интерфейса.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#DF9AA6] mt-2 flex-shrink-0"></div>
                <p className="text-[#F9FAFB] text-base leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          {/* Правая колонка - мокапы UI */}
          <div className="space-y-6">
            {/* Мокап Discord канала */}
            <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
                <span className="label text-[#F9FAFB]"># неделя-1-диагностика</span>
              </div>
              <div className="space-y-3">
                <div className="bg-[#2D2F36] rounded-lg p-4 text-sm">
                  <p className="text-[#9CA3AF]">Сценарий разговора готов</p>
                </div>
                <div className="bg-[#2D2F36] rounded-lg p-4 text-sm">
                  <p className="text-[#9CA3AF]">Ваше первое задание: оценить быт</p>
                </div>
              </div>
            </div>

            {/* Мокап списка заданий */}
            <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <ListChecks className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
                <span className="label text-[#F9FAFB]">Задания недели</span>
              </div>
              <div className="space-y-3">
                {["Разговор по сценарию (20 мин)", "Упражнение «Кто что делает»", "Фиксация договорённостей"].map((task, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded border-2 border-[#3A3B44]"></div>
                    <span className="text-[#9CA3AF]">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Мокап прогресса */}
            <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
                <span className="label text-[#F9FAFB]">Прогресс цикла</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((week) => (
                  <div
                    key={week}
                    className={`flex-1 h-2 rounded ${week === 1 ? "bg-gradient-to-r from-[#F5C2BA] to-[#DF9AA6]" : "bg-[#3A3B44]"}`}
                  ></div>
                ))}
              </div>
              <p className="caption text-[#6B7280] mt-3">Неделя 1 из 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
