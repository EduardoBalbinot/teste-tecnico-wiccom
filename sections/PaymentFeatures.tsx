interface Feature {
  icon: string;
  iconAlt?: string;
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

export default function PaymentFeatures({ features }: Props) {
  return <section className="py-[17px] bg-[#F1F1F1] flex gap-6 flex-wrap justify-center">
    {features.map((feature, index) => (
      <div className="flex gap-4 group w-[283px]" key={index}>
        <img src={feature.icon} alt={feature.iconAlt || "feature icon"} />
        <div>
          <h3 className=" rounded-full font-semibold text-[#BE202E] bg-[#FEC4D299]/0 group-hover:bg-[#FEC4D299] text-sm leading-1 group-hover:px-2 py-1 min-h-6 flex items-center transition-all duration-300">
            {feature.title}
          </h3>
          <p className="mt-1.5 tracking-[0.24px] text-[#404042] text-xs">
            {feature.description}
          </p>
        </div>
      </div>
    ))}
  </section>
}