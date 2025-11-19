import { VectorsDiagram } from "./VectorsDiagram";
import { Circle } from "lucide-react";

export function Hero() {
  const bullets = [
    "6 векторов вместо хаоса: видно, где реально болит.",
    "Еженедельные сессии и задания под ваш уровень усталости.",
    "Отдельные сценарии для пар и одиночек, один общий каркас.",
  ];

  return (
    <section className="pt-32 pb-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#1F2024]" id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка - текст */}
          <div className="space-y-8 max-w-[600px]">
            <div className="space-y-6">
              <h1 className="text-[#F9FAFB]">«Вместе» — сервис осознанных отношений по 6 ключевым сферам</h1>
              <p className="text-[#9CA3AF] text-base leading-relaxed">
                Для пар 18–30 и одиночек, которые готовятся к отношениям. Не дейтинг и не милые советы, а системная работа по быту, сексуальности, личным интересам, коммуникации, финансам и психике с еженедельными сессиями и челенджами.
              </p>
            </div>

            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Circle className="w-2 h-2 mt-2 fill-[#DF9AA6] text-[#DF9AA6] flex-shrink-0" />
                  <span className="text-[#F9FAFB] text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] hover:from-[#DF9AA6] hover:to-[#C46E85] text-white px-8 h-12 rounded-full transition-all font-medium">
                Зайти в Discord-версию
              </button>
              <button className="border border-[#DF9AA6] text-[#DF9AA6] hover:bg-[#DF9AA6] hover:text-white px-8 h-12 rounded-full transition-all font-medium">
                Оставить контакт для доступа в бету
              </button>
            </div>
          </div>

          {/* Правая колонка - визуал */}
          <div className="flex justify-center lg:justify-end">
            <VectorsDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
