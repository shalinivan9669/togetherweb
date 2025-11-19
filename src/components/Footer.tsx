import { MessageSquare, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2F3037] py-16 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#181820]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Логотип */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2]"></div>
            <span className="font-semibold text-lg text-[#F9FAFB]">Вместе</span>
          </div>

          {/* Социальные ссылки */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-[#23232A] border border-[#2F3037] flex items-center justify-center hover:border-[#DF9AA6] transition-colors"
              aria-label="Discord"
            >
              <MessageSquare className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-[#23232A] border border-[#2F3037] flex items-center justify-center hover:border-[#DF9AA6] transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5 text-[#9CA3AF]" strokeWidth={1.5} />
            </a>
          </div>

          {/* Ссылки на документы */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end caption">
            <a href="#" className="text-[#6B7280] hover:text-[#DF9AA6] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-[#6B7280] hover:text-[#DF9AA6] transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
