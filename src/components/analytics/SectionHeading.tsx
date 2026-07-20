"use client";

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold tracking-tight text-stone-900">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm leading-6 text-stone-500">
          {description}
        </p>
      )}
    </div>
  );
}