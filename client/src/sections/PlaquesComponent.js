import React, { useState, useEffect, useRef } from "react";
import "./PlaquesComponent.css";

function PlaquesComponent() {
  const plaques = [
    {
      title: "Why Choose Us",
      description:
        "Our mission is to work with you in reducing your level of pain and suffering, getting you back to your highest level of independence and functioning, and improving the quality of your life. Your lawyer may suggest that you visit the CPPC for an assessment, for one or more particular procedures, or for continuous care.",
      icon: "https://i.postimg.cc/d0TXq3Ff/i-Stock-2151690936-1.webp",
    },
    {
      title: "How We Can Help You",
      description:
        "California Premier Pain Clinic experts will create a treatment plan that is individually tailored to your condition and degree of discomfort. Your treatment plan can involve a single strategy or a mix of medical therapies, such as prescription medications, surgical procedures, and rehabilitation therapies.",
      icon: "https://i.postimg.cc/NMWrYD13/i-Stock-2151690936-2.webp",
    },
    {
      title: "See the Difference",
      description:
        "There is no question that putting the right treatment on the right structure will create the best outcome. All of our injections are done under either ultrasound or fluoroscopic guidance. Certain structures are best imaged under fluoroscopy and others are best imaged with the ultrasound unit. The best outcomes happen when the treatment is carefully targeted.",
      icon: "https://i.postimg.cc/FzVcZcLw/i-Stock-2151690936-3.webp",
    },
  ];

  const [visiblePlaques, setVisiblePlaques] = useState({});
  const plaqueRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          // Apply hysteresis: show if >0.6, hide if <0.4
          if (entry.intersectionRatio > 0.6) {
            setVisiblePlaques((prev) => ({
              ...prev,
              [index]: true,
            }));
          } else if (entry.intersectionRatio < 0.4) {
            setVisiblePlaques((prev) => ({
              ...prev,
              [index]: false,
            }));
          }
        });
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );

    plaqueRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      plaqueRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="plaques-section">
      {plaques.map((plaque, index) => (
        <div
          key={index}
          className="plaque-card"
          ref={(el) => (plaqueRefs.current[index] = el)}
          data-index={index}
        >
          <img
            src={plaque.icon}
            alt={plaque.title}
            className="plaque-icon"
            loading="lazy"
          />
          <h3 className="plaque-title">{plaque.title}</h3>
          <p
            className={`plaque-description ${
              visiblePlaques[index] ? "visible" : ""
            }`}
          >
            {plaque.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default PlaquesComponent;
