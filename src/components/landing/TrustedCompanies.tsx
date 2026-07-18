export default function TrustedCompanies() {
  const companies = [
    "Microsoft",
    "Amazon",
    "Spotify",
    "Slack",
  ];

  return (
    <div className="mt-14">

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
        Trusted by teams worldwide
      </p>

      <div className="flex flex-wrap items-center gap-8 text-lg font-semibold text-slate-400">

        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}

      </div>

    </div>
  );
}