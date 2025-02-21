import React from "react";
import "./HowItWorksComponent.css";

function HowItWorksComponent() {
  return (
    <section 
      className="how-it-works-section" 
      aria-labelledby="how-it-works-title"
    >
      <h2 id="how-it-works-title" className="hiw-title">
        How Do I Become a Patient at California Premier Pain Clinics?
      </h2>
      <p className="hiw-subtitle">
        Ready to start your journey toward effective pain management? Follow our simple, 
        three-step process below to get the personalized care you deserve.
      </p>

      <div className="hiw-steps-container">
        {/* Step 1 */}
        <div className="hiw-step">
          <div className="hiw-step-icon">
            <img
              src="https://i.postimg.cc/T1zSsXbW/i-Stock-2151690936-4-1-1.webp"
              alt="Icon representing the first step: starting your journey"
              width="55"
              height="auto"
              loading="lazy"
            />
          </div>
          <div className="hiw-step-number-container">
            <div className="hiw-step-number">1</div>
            <h3 className="hiw-step-title">Start Your Journey</h3>
          </div>
          <p className="hiw-step-description">
            Complete the new patient intake form and confirm your service selection. 
            Get started today to begin your path to a pain-free life.
          </p>
        </div>

        {/* Step 2 */}
        <div className="hiw-step">
          <div className="hiw-step-icon">
            <img
              src="https://i.postimg.cc/FKRsVjVk/i-Stock-2151690936-5-1-1.webp"
              alt="Icon representing the second step: consultation"
              width="55"
              height="auto"
              loading="lazy"
            />
          </div>
          <div className="hiw-step-number-container">
            <div className="hiw-step-number">2</div>
            <h3 className="hiw-step-title">Consultation</h3>
          </div>
          <p className="hiw-step-description">
            Our specialist team reviews your information and discusses the best 
            pain management approach to help restore your mobility and comfort.
          </p>
        </div>

        {/* Step 3 */}
        <div className="hiw-step">
          <div className="hiw-step-icon">
            <img
              src="https://i.postimg.cc/q7Q2DXKs/i-Stock-2151690936-7-1.webp"
              alt="Icon representing the third step: beginning treatment"
              width="55"
              height="auto"
              loading="lazy"
            />
          </div>
          <div className="hiw-step-number-container">
            <div className="hiw-step-number">3</div>
            <h3 className="hiw-step-title">Begin Treatment</h3>
          </div>
          <p className="hiw-step-description">
            Start your personalized treatment plan, utilizing advanced therapies 
            designed to reduce pain and enhance your quality of life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksComponent;
