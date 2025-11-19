import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "о сервисе", href: "#about" },
    { label: "6 векторов", href: "#vectors" },
    { label: "как это работает", href: "#how" },
    { label: "тарифы", href: "#pricing" },
    { label: "roadmap", href: "#roadmap" },
    { label: "контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#181820]/95 backdrop-blur-sm z-50 border-b border-[#2F3037]">
      <div className="max-w-[1440px] mx-auto px-[120px] h-20 flex items-center justify-between lg:px-8 md:px-6 sm:px-4">
        {/* Логотип с градиентом */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2]"></div>
          <span className="font-semibold text-lg text-[#F9FAFB]">Вместе</span>
        </div>

        {/* Desktop меню */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors lowercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA кнопка */}
        <button className="hidden lg:block bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] hover:from-[#DF9AA6] hover:to-[#C46E85] text-white px-6 h-11 rounded-full transition-all font-medium text-sm">
          Зайти в Discord
        </button>

        {/* Mobile: бургер + CTA */}
        <div className="flex lg:hidden items-center gap-3">
          <button className="bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] text-white px-4 h-10 rounded-full transition-all text-sm font-medium">
            Discord
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#9CA3AF]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile меню */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181820] border-t border-[#2F3037]">
          <nav className="flex flex-col px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors lowercase border-b border-[#2F3037] last:border-0 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
