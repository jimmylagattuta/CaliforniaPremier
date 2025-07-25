import React from "react";
import { Helmet } from "react-helmet";
import { servicesData } from "../data";
import FooterComponent from "../sections/FooterComponent";
import "./AboutUs.css";

const AboutUs = () => {
  // Convert servicesData object into an array for mapping.
  const servicesArray = Object.entries(servicesData).map(([key, service]) => ({
    ...service,
    id: key,
  }));

  // Build the rich snippet JSON‑LD object for the About Us page.
  const richSnippet = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "California Premier Pain Clinics",
    "url": "https://californiapremierpainclinics.com/about-us",
    "logo": "https://i.postimg.cc/xTGxVvsV/i-Stock-1262682182-1.webp",
    "description":
      "California Premier Pain Clinics specializes in delivering advanced, individualized pain management solutions designed to restore mobility, reduce pain, and enhance overall quality of life. Our expert team uses state-of-the-art treatments and personalized care to help you regain your quality of life.",
    "founder": {
      "@type": "Person",
      "name": "Stephen Sudekum, DO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(877) 271-0203",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "areaServed": "California",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pain Management Services",
      "itemListElement": servicesArray.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": service.title,
          "description": service.shortDescription,
          "url": `https://californiapremierpainclinics.com/services/${service.id}`
        }
      }))
    }
  };

  return (
    <div className="aboutus-container">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(richSnippet)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-hero-overlay">
          <h1 className="aboutus-hero-title">Finding Paths to Relief</h1>
          <p className="aboutus-hero-subtitle">Get started on recovering!</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="aboutus-section">
        <h2 className="aboutus-heading">About Us</h2>
        <div className="aboutus-content">
          <div className="aboutus-card">
            <h3>Why Choose Us</h3>
            <p>
              Our mission is to work with you in reducing your level of pain and
              suffering, getting you back to your highest level of independence
              and functioning, and improving the quality of your life.
            </p>
          </div>
          <div className="aboutus-card">
            <h3>How We Can Help You</h3>
            <p>
              California Premier Pain Clinics experts will create a treatment
              plan that is individually tailored to your condition and degree of
              discomfort. Your treatment plan may include a single strategy or a
              mix of medical therapies, such as prescription medications,
              surgical procedures, and rehabilitation therapies.
            </p>
          </div>
          <div className="aboutus-card">
            <h3>See the Difference</h3>
            <p>
              There is no question that putting the right procedure on the right
              structures will create the best outcome. All of our injections are
              done under either ultrasound or fluoroscopic guidance. Certain
              structures are best imaged under fluoroscopy and others are best
              imaged with ultrasound. The best outcomes happen when treatments
              are performed with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Provider Section */}
      <section className="aboutus-provider">
        <h2 className="aboutus-provider-title">Meet Our Providers</h2>
        <div className="aboutus-provider-grid">
          {/* Dr. Sudekum */}
          <div className="aboutus-provider-card">
            <img
              src="https://i.postimg.cc/J7KKyP4W/Screenshot-2025-03-08-132625.webp"
              alt="Stephen Sudekum, DO"
              className="aboutus-provider-photo"
            />
            <div className="aboutus-provider-info">
              <h3>Stephen Sudekum, DO</h3>
              <p>
                Stephen Sudekum, DO is a fellowship-trained physical medicine
                and rehabilitation physician specializing in sports, spine,
                and regenerative medicine. He is dedicated and passionate
                about improving the lives of his patients. He believes that
                regenerative medicine is a staple for true healing and
                restoration.
              </p>
              <p>
                Dr. Sudekum graduated from Eastern Michigan University magna
                cum laude with a degree in exercise science and a Biochemistry
                Minor. He earned his medical degree from Michigan State
                University College of Osteopathic Medicine and completed his
                Physical Medicine & Rehabilitation residency at Michigan State
                University in association with the Sparrow and McLaren health
                systems.
              </p>
              <p>
                He further specialized in Interventional Spine and
                Musculoskeletal Medicine by completing a fellowship at Bodor
                Clinic in Napa, California. Under the guidance of Dr. Marko
                Bodor, he gained hands-on experience in advanced ultrasound and
                fluoroscopic-guided spine procedures.
              </p>
            </div>
          </div>

          {/* Dr. Starley */}
          <div className="aboutus-provider-card">
            <img
              src="https://res.cloudinary.com/djtsuktwb/image/upload/v1752645603/unnamed_x692f1.jpg"
              alt="Dr. Denice Starley, D.O"
              className="aboutus-provider-photo"
            />
            <div className="aboutus-provider-info">
              <h3>Dr. Denice Starley, D.O</h3>
              <p className="provider-cert">
                Double Board‑Certified in Physical Medicine &amp; Rehabilitation and Pain Medicine
              </p>
              <p>
                Dr. Denice Starley is a highly experienced and compassionate
                physiatrist and interventional pain management specialist,
                board‑certified by both the American Board of Physical Medicine
                and Rehabilitation and the American Board of Pain Medicine. With
                over 18 years of clinical experience, she specializes in the
                diagnosis, rehabilitation, and minimally invasive treatment of
                acute and chronic pain conditions.
              </p>
              <p>
                She earned her Doctor of Osteopathy degree from Kansas City
                University and completed her residency at the Washington
                University/Barnes‑Jewish Hospital Consortium in St. Louis,
                Missouri. Her training includes advanced interventional pain
                techniques under nationally recognized leaders in the field.
              </p>
              <p>
                Throughout her career, Dr. Starley has held multiple leadership
                and medical director roles, contributed to pain management
                literature, and served as an Assistant Professor at Touro
                University Nevada College of Osteopathic Medicine. She is also
                a Qualified Medical Evaluator (QME) for California and actively
                treats workers’ compensation and personal injury patients.
              </p>
              <p>
                Her approach is rooted in restoring function and improving
                quality of life through evidence‑based, patient‑centered care.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services for SEO */}
      <section className="aboutus-services">
        <h2 className="aboutus-services-title">All Services</h2>
        <div className="aboutus-services-grid">
          {servicesArray.map((service) => (
            <a
              key={service.id}
              href={`/services/${service.id}`}
              className="aboutus-service-card"
            >
              <div
                className="aboutus-service-image"
                style={{ backgroundImage: `url(${service.images.hero})` }}
              ></div>
              <h3 className="aboutus-service-title">{service.title}</h3>
              <p className="aboutus-service-desc">{service.shortDescription}</p>
            </a>
          ))}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default AboutUs;
