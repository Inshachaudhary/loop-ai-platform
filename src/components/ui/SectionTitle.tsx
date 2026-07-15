type SectionTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  badge,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-stone-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
          {description}
        </p>
      )}
    </div>
  );
}