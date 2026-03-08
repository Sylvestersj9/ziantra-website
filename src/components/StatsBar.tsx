const stats = [
  { value: "80%", label: "Cost Reduction" },
  { value: "24/7", label: "AI Operations" },
  { value: "10x", label: "Faster Processes" },
  { value: "100%", label: "Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="section-padding py-12 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
