import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
  variant?: "gold" | "green";
}

const CtaBanner = ({
  title,
  subtitle,
  buttonText,
  buttonHref,
  variant = "gold",
}: CtaBannerProps) => {
  const isGold = variant === "gold";

  return (
    <section className={isGold ? "bg-gold-500" : "bg-brand-900"}>
      <div className="container flex flex-col items-center justify-between gap-5 py-8 text-center sm:flex-row sm:text-left">
        <div>
          <h3
            className={`text-xl font-bold sm:text-2xl ${
              isGold ? "text-brand-900" : "text-white"
            }`}
          >
            {title}
          </h3>
          {subtitle && (
            <p className={`mt-1 text-sm ${isGold ? "text-brand-900/70" : "text-white/70"}`}>
              {subtitle}
            </p>
          )}
        </div>
        <Link
          href={buttonHref}
          className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${
            isGold
              ? "bg-brand-900 text-white hover:bg-brand-800"
              : "bg-gold-500 text-brand-900 hover:bg-gold-400"
          }`}
        >
          {buttonText}
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
