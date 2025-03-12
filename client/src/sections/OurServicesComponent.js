import React from "react";
import { useNavigate } from "react-router-dom";
import "./OurServicesComponent.css";

function OurServicesComponent() {
  const navigate = useNavigate();

  // 9 Services (Testosterone Replacement Therapy removed)
  const treatments = [
    {
      title: "New Patient Consultations",
      description: `During your initial pain clinic visit, you'll discuss your pain management needs with your doctor. Your doctor will suggest which new approach might work best for you and then help you implement that.

You could receive a new medication or schedule an injection or another type of treatment depending on your needs. Your doctor can also recommend sleep aids, physical therapy, chiropractor, or other supportive treatments.

Book your appointment at California Premier Pain Clinics online or by phone now.`,
      link: "/services/new-patient-consultations",
      image: "https://i.postimg.cc/nhGsKsR8/i-Stock-1358029042-1-1.webp",
    },
    {
      title: "Platelet Rich Plasma",
      description: `Platelet therapy, or platelet-rich plasma (PRP) therapy, is a revolutionary new treatment that relieves pain by promoting long-lasting healing of musculoskeletal conditions using the healing power of your own body. This rapidly emerging technique is showing exciting success with osteoarthritis of the knee, shoulder, hip and spine, rotator cuff tears, chronic plantar fasciitis, anterior cruciate ligament (ACL) injuries, pelvic pain and instability, back and neck injuries, tennis elbow, ankle sprains, tendonitis, and ligament sprains.`,
      link: "/services/platelet-rich-plasma",
      image: "https://i.postimg.cc/HstkJqv3/i-Stock-92267682-1-1.webp",
    },
    {
      title: "Facet Joint Injections",
      description: `The facet joints are found in the spine, where they connect the backbones to each other. They allow the spine to bend and twist. Like a knee or hip, facet joints have cartilage between the bones and a fluid-filled capsule to allow for smooth movement. When damaged, facet joints can cause debilitating pain in the neck or back. This condition is known as Facet Syndrome. It may occur due to an injury, overuse, or the onset of an inflammatory condition.`,
      link: "/services/facet-joint-injections",
      image: "https://i.postimg.cc/htkV0CdX/i-Stock-2155370002-1-1.webp",
    },
    {
      title: "Epidural Injections",
      description: `An Epidural Steroid Injection (ESI) is a treatment that decreases pain and inflammation in the neck and back. They are also known as “Epidural Nerve Blocks," which can block pain signals in people with disc herniations, nerve injuries, or degeneration of the spine. Spinal nerves are large nerves that leave the spine to reach the rest of the body, where they control body movements and a person’s ability to feel pain.`,
      link: "/services/epidural-injections",
      image: "https://i.postimg.cc/ZRzT5NyB/i-Stock-1809650842-1-1.webp",
    },
    {
      title: "Botox Injections",
      description: `Botox blocks chemical signals that cause muscles to contract, making them less stiff and less sensitive to pain. Treatments take place in a doctor’s office and typically take less than 20 minutes. For maximum migraine relief, your physician may recommend injections every three months.`,
      link: "/services/botox-injections",
      image: "https://i.postimg.cc/DZYdk7Nz/i-Stock-1158779077-3-1.webp",
    },
    {
      title: "Steroid Injections",
      description: `Steroid joint injections, also referred to as "cortisone shots" or “intra-articular steroid injections", are a standard treatment for joint pain. Steroid joint injections can speed up the recovery from sport injuries, ligament strains/tears, cartilage damage, inflammatory disorders, and arthritis flare-ups, often helping people avoid more invasive treatments such as surgery.`,
      link: "/services/steroid-injections",
      image: "https://i.postimg.cc/CLfd1gc9/i-Stock-2159480865-1-1.webp",
    },
    {
      title: "SI Joint Injections",
      description: `The sacroiliac (SI) joints are located at the base of the spine and connect it to the pelvis. Inflammation in the SI joint can be a common source of lower back pain. SI joint injections can be used to both diagnose and treat SI joint dysfunction, helping confirm if the SI joint is the source of pain and providing targeted relief.`,
      link: "/services/si-joint-injections",
      image: "https://i.postimg.cc/gJjDfjGx/i-Stock-1192654908-1-1.webp",
    },
    {
      title: "Trigger Point Injections",
      description: `Trigger point injections involve injecting medication directly into a trigger point (a tight band of muscle) to help relax the muscle, relieve pain, and improve overall function. These injections can complement physical therapy and other treatments, often speeding up recovery times and improving performance.`,
      link: "/services/trigger-point-injections",
      image: "https://i.postimg.cc/G3X2Ljv8/i-Stock-1397841645-1-1.webp",
    },
    {
      title: "Electromyography (EMG) Testing",
      description: `Pain, weakness, tingling, and numbness can all be caused by problems with nerves or muscles. Electrodiagnostic tests like EMG reveal how well your nerves and muscles are working, determining the existence, type, and extent of any damage.`,
      link: "/services/emg-testing",
      image: "https://i.postimg.cc/k44pC9xp/i-Stock-624979568-1-1.webp",
    },
  ];

  return (
    <section className="our-services-section">
      {/* Header and Slogan */}
      <div className="hero-content-title">
        <div
          style={{ backgroundColor: "rgb(37, 54, 53)", width: "40px", height: "2px" }}
          className="line"
        ></div>
        <h1
          style={{ color: "rgb(37, 54, 53)", fontSize: "0.9rem", fontWeight: "bolder" }}
          className="company-name"
        >
          OUR SERVICES
        </h1>
        <div
          style={{ backgroundColor: "rgb(37, 54, 53)", width: "40px", height: "2px" }}
          className="line"
        ></div>
      </div>

      <p className="our-services-slogan">Find Relief, Reclaim Your Best Life.</p>

      {/* Cards */}
      {treatments.map((treatment, index) => (
        <div
          key={index}
          className="service-card"
          onClick={() => navigate(treatment.link)}
        >
          {/* FRONT (Desktop Default) */}
          <div className="service-front">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="service-image"
            />
            <h2 className="service-title">{treatment.title}</h2>
            <p className="service-link">Learn More About {treatment.title}</p>
          </div>

          {/* BACK (Desktop Hover, Mobile Default) */}
          <div className="service-back">
            {/* On mobile, show the image along with the text */}
            <img
              src={treatment.image}
              alt={treatment.title}
              className="service-image-back"
            />
            <p className="service-description">{treatment.description}</p>
            <p className="service-link">Learn More About {treatment.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default OurServicesComponent;