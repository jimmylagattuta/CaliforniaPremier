// src/data.js

export const servicesData = {
    // A key that matches the route param (e.g., "new-patient-consultations")
    "new-patient-consultations": {
      title: "New Patient Consultations",
      shortDescription: "During your initial pain clinic visit...",
      mainContent: `
        During your initial pain clinic visit, you'll discuss your pain 
        management needs with your doctor. Your doctor will suggest which 
        new approach might work best for you and then help you implement that.
  
        You could receive a new medication or schedule an injection or another 
        type of treatment depending on your needs. Your doctor can also 
        recommend sleep aids, physical therapy, chiropractor, or other 
        supportive treatments.
  
        Book your appointment at California Premier Pain Clinics online or by phone now.
      `,
      // The images for your layout (hero, sections, etc.)
      images: {
        hero: "https://i.postimg.cc/xTGxVvsV/i-Stock-1262682182-1.webp", 
        section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
      },
      // Any other properties you need
    },
  
    // If you add more services in the future:
    // "testosterone-replacement-therapy": {
    //   title: "Testosterone Replacement Therapy",
    //   ...
    // },
  };
  