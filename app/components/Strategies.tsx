export default function Strategies() {
  const strategies = [
    {
      title: "Customer-Centric Approach",
      description:
        "We prioritize understanding and addressing the needs of our customers, placing their satisfaction and success at the forefront of everything we do.",
    },
    {
      title: "Innovation and Technology",
      description:
        "We embrace innovation and leverage cutting-edge technologies to stay ahead of the curve and drive efficiency, productivity and competitiveness.",
    },
    {
      title: "Diversification and Expansion",
      description:
        "We pursue strategic diversification and expansion initiatives to capture new opportunities and mitigate risks.",
    },
    {
      title: "Operational Excellence",
      description:
        "We are committed to operational excellence in all aspects of our business, striving for efficiency, quality and reliability.",
    },
    {
      title: "Sustainability and Corporate Responsibility",
      description: "We recognize our responsibility to contribute positively to society and the environment.",
    },
    {
      title: "Talent Development and Empowerment",
      description:
        "We invest in our people, nurturing talent, fostering diversity and empowering employees to reach their full potential.",
    },
    {
      title: "Stakeholder Engagement and Collaboration",
      description: "We value collaboration and partnership, recognizing that collective efforts yield greater results.",
    },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-8">OWN Strategies</h2>
          <div className="w-16 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Our strategy is rooted in our commitment to delivering excellence, fostering innovation and creating
            sustainable values for all stakeholders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="group">
              <div className="bg-stone-50 p-8 rounded-lg h-full hover:bg-stone-100 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-light text-stone-400 mr-4">{String(index + 1).padStart(2, "0")}</span>
                  <div className="w-8 h-px bg-stone-300"></div>
                </div>
                <h3 className="text-xl font-medium text-stone-800 mb-4">{strategy.title}</h3>
                <p className="text-stone-600 leading-relaxed">{strategy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
