import { useState } from "react";

export function FinalCTA() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <section className="py-24 px-[120px] lg:px-8 md:px-6 sm:px-4 bg-[#1F2024]" id="contacts">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="mb-6">Если вы готовы работать над отношениями — давайте начнём</h2>
        <p className="text-[#9CA3AF] text-base leading-relaxed mb-12">
          Присоединяйтесь к Discord-версии сейчас или оставьте контакт для доступа к расширенной бете.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] hover:from-[#DF9AA6] hover:to-[#C46E85] text-white px-8 h-12 rounded-full transition-all font-medium">
            Зайти в Discord и начать первый цикл
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className="border border-[#DF9AA6] text-[#DF9AA6] hover:bg-[#DF9AA6] hover:text-white px-8 h-12 rounded-full transition-all font-medium"
          >
            Получить доступ в бету позже
          </button>
        </div>

        {showForm && (
          <div className="max-w-md mx-auto bg-[#23232A] border border-[#2F3037] rounded-xl p-8">
            {submitted ? (
              <p className="text-[#22C55E] font-medium">Спасибо! Мы свяжемся с вами.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
                  <label htmlFor="contact" className="label text-[#9CA3AF] mb-3 block">
                    E-mail или Telegram-ник
                  </label>
                  <input
                    type="text"
                    id="contact"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com или @username"
                    className="w-full h-12 px-4 rounded-xl border border-[#2F3037] bg-[#2D2F36] text-[#F9FAFB] placeholder:text-[#6B7280] focus:border-[#DF9AA6] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F5C2BA] via-[#DF9AA6] to-[#C78FB2] hover:from-[#DF9AA6] hover:to-[#C46E85] text-white h-12 rounded-full transition-all font-medium"
                >
                  Отправить
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
