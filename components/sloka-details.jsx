"use client";

export default function SlokaDetails({ sloka, language, isMobile = false }) {
  const containerClass = isMobile
    ? "space-y-4"
    : "space-y-6 h-full flex flex-col";

  const sectionClass = isMobile
    ? "space-y-2 bg-white/30 dark:bg-white/5 p-4 rounded-lg backdrop-blur-md shadow-sm border-gray-100 rounded-md"
    : "space-y-4 bg-white/30 dark:bg-white/5 p-6 rounded-lg backdrop-blur-md shadow-sm border-gray-100 rounded-md flex-1";

  const headingClass = isMobile
    ? "text-md tracking-wide font-semibold text-primary"
    : "text-md tracking-wide font-semibold text-primary border-b border-primary/10 pb-2";

  const getTextClass = (size) => {
    const baseClass = isMobile
      ? "text-muted-foreground leading-relaxed"
      : "text-muted-foreground leading-relaxed";
    return language === "telugu"
      ? `text-telugu ${size} ${baseClass}`
      : `${size} ${baseClass}`;
  };

  return (
    <div className={containerClass}>
      <div className={sectionClass}>
        <h4 className={headingClass}>Meaning</h4>
        <p className={`${getTextClass("text-base")} whitespace-pre-line`}>
          {sloka.meaning[language]}
        </p>
      </div>

      {sloka.context && (
        <div className={sectionClass}>
          <h4 className={headingClass}>When to Recite</h4>
          <p className={getTextClass("text-base")}>{sloka.context[language]}</p>
        </div>
      )}
    </div>
  );
}
