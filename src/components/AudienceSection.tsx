import { Check, X } from "lucide-react";

export function AudienceSection() {
  const forWho = [
    "Пары 18–30, живущие вместе или планирующие это.",
    "Одиночки, которые готовятся к отношениям осознанно.",
    "Люди, для которых 14 $/пара или 4.5 $/мес — нормальная цена за спокойную жизнь.",
    "Те, кто понимает, что отношения — зона ответственности двоих.",
  ];

  const notForWho = [
    "Ищущие только флирт и быстрый секс.",
    "Люди, которые сами не понимают, чего хотят.",
    "Те, кто перекладывает всё на партнёра или психолога.",
  ];

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#2D2F36]">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <h2>Кому "Вместе" зайдёт, а кому лучше не тратить время</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Для кого */}
          <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-8">
            <h3 className="text-[#F9FAFB] mb-8">Для кого</h3>
            <ul className="space-y-6">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#22C55E]" strokeWidth={2} />
                  </div>
                  <span className="text-[#F9FAFB] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Не для кого */}
          <div className="bg-[#23232A] border border-[#2F3037] rounded-xl p-8">
            <h3 className="text-[#F9FAFB] mb-8">Не для кого</h3>
            <ul className="space-y-6">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-[#EF4444]" strokeWidth={2} />
                  </div>
                  <span className="text-[#F9FAFB] text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
