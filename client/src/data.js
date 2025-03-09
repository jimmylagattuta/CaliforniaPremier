// src/data.js

export const servicesData = {
    "new-patient-consultations": {
      title: "New Patient Consultations",
      shortDescription:
        "Begin your journey to lasting relief. Our new patient consultations tailor a treatment plan—medication, injections, or therapy—to your unique needs. Book now at California Premier Pain Clinics",
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
        overlay1: "https://i.postimg.cc/FKmZDJV9/i-Stock-140451432-1-1.webp",
        overlay2: "https://i.postimg.cc/Y0vrZRwY/i-Stock-1665704188-1-1.webp",
      },
  
      /* 
        Extra fields for "Why Choose Us" style section
        We replicate the second screenshot's layout but with your text.
      */
      whyChooseTitle: "Why Choose Us",
      whyChooseContent: `
  Our mission is to work with you in reducing your level of pain and suffering, getting you back to your highest level of independence and functioning, and improving the quality of your life.
      `,
      helpTitle: "How We Can Help You",
      helpList: [
        "Individually tailored treatment plans",
        "Precise imaging guidance (fluoroscopy or ultrasound)",
        "Regenerative medicine for true healing",
      ],
      providerTitle: "Meet Our Provider",
      providerContent: `
  Stephen Sudekum, DO is a fellowship-trained physician specializing in sports, spine, and regenerative medicine.
      `,
      whyChooseBg: "https://i.postimg.cc/nr2YzqRd/i-Stock-2067515384-1-1.webp",
    },
  

    "platelet-rich-plasma": {
    title: "Platelet Rich Plasma",
    shortDescription: `
Platelet therapy, or platelet-rich plasma (PRP) therapy, is a revolutionary new treatment that relieves pain by promoting long-lasting healing of musculoskeletal conditions using the healing power of your own body.
    `,
    mainContent: `
This rapidly emerging technique is showing exciting success with osteoarthritis of the knee, shoulder, hip and spine, rotator cuff tears, chronic plantar fascitis, anterior cruciate ligament (ACL) injuries, pelvic pain and instability, back and neck injuries, tennis elbow, ankle sprains, tendonitis, and ligament sprains.
    `,
    images: {
      // Reusing the same images for now; swap with new ones later
      hero: "https://i.postimg.cc/mrwY3NZ4/i-Stock-1499286438-1-4.webp",
      section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
      overlay1: "https://i.postimg.cc/hjbMZzL8/i-Stock-806982196-1-1.webp",
      overlay2: "https://i.postimg.cc/Y9mb6D9P/i-Stock-1341904555-1-1.webp",
    },
    // Reuse the same "Why Choose Us" data as the first service
    whyChooseTitle: "Why Choose Us",
    whyChooseContent: `
Our mission is to work with you in reducing your level of pain and suffering, getting you back to your highest level of independence and functioning, and improving the quality of your life.
    `,
    helpTitle: "How We Can Help You",
    helpList: [
      "Individually tailored treatment plans",
      "Precise imaging guidance (fluoroscopy or ultrasound)",
      "Regenerative medicine for true healing",
    ],
    providerTitle: "Meet Our Provider",
    providerContent: `
Stephen Sudekum, DO is a fellowship-trained physician specializing in sports, spine, and regenerative medicine.
    `,
    whyChooseBg: "https://i.postimg.cc/4yH0LN3X/i-Stock-1065586248-1.webp",
  },
    // Future services can be added here
    // "testosterone-replacement-therapy": {...}
    "facet-joint-injections": {
        title: "Facet Joint Injections",
        shortDescription: `
    Facet joint injections target the spine where pain originates. They can relieve debilitating neck and back pain by addressing the underlying cause.
        `,
        mainContent: `
    The facet joints are found in the spine, where they connect the backbones to each other. They allow the spine to bend and twist. Like a knee or hip, facet joints have cartilage between the bones and a fluid-filled capsule to allow for smooth movement.
    
    When damaged, facet joints can cause debilitating pain in the neck or back. This condition is known as Facet Syndrome. It may occur due to an injury, overuse, or the onset of an inflammatory condition.
        `,
        images: {
          // For now, reuse the same images; update with new ones as needed.
          hero: "https://i.postimg.cc/YSd7W9V9/i-Stock-1462826523-1-1.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/SsNM6Drh/i-Stock-2005411359-1-1.webp",
          overlay2: "https://i.postimg.cc/LsV9VSCq/i-Stock-1266849905-2-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your level of pain and suffering, getting you back to your highest level of independence and functioning, and improving the quality of your life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Individually tailored treatment plans",
          "Precise imaging guidance (fluoroscopy or ultrasound)",
          "Regenerative medicine for true healing",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Stephen Sudekum, DO is a fellowship-trained physician specializing in sports, spine, and regenerative medicine.
        `,
        whyChooseBg: "https://i.postimg.cc/W1gWC1P4/i-Stock-1149902262-1.webp",
      },
    "epidural-injections": {
        title: "Epidural Injections",
        shortDescription: `
    Epidural steroid injections reduce pain and inflammation in the neck and back.
        `,
        mainContent: `
    An Epidural Steroid Injection (ESI) is a treatment that decreases pain and inflammation in the neck and back.
    
    Epidural Steroid Injections, also known as “Epidural Nerve Blocks,” block pain signals in the neck/back in people with disc herniations, nerve injuries, or degeneration (aging) of the spine.
    
    Spine problems that start in the neck or back may cause symptoms in an arm or leg, such as electric shocks, numbness, or weakness when a spinal nerve is irritated.
        `,
        images: {
          // For now, reusing the same images; you can update these later.
          hero: "https://i.postimg.cc/ZnDkF17p/i-Stock-1208226579-1.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/8kxTqvPG/i-Stock-2164643313-1-1.webp",
          overlay2: "https://i.postimg.cc/g208Q3Bs/i-Stock-2151843861-1-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, helping you regain your independence and improving your quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Personalized pain management strategies",
          "Guidance using advanced imaging techniques",
          "Minimally invasive, targeted treatments",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Stephen Sudekum, DO is a fellowship-trained physician specializing in sports, spine, and regenerative medicine.
        `,
        whyChooseBg: "https://i.postimg.cc/855wNq5F/i-Stock-2024073564-1.webp",
      },

      "botox-injections": {
        title: "Botox Injections",
        shortDescription: `
    Experience relief from migraines with Botox injections in a comfortable, patient-friendly setting.
        `,
        mainContent: `
    Botox blocks chemical signals that cause muscles to contract, making them less stiff and less sensitive to pain. Treatments typically take less than 20 minutes and are performed in a doctor's office.
    
    For maximum migraine relief, your physician may recommend injections every three months.
        `,
        images: {
          // Reusing images for now; update with new ones later if desired.
          hero: "https://i.postimg.cc/bY0Pdwxc/i-Stock-2170566773-2.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/FHtZYhNc/i-Stock-973708812-1-1.webp",
          overlay2: "https://i.postimg.cc/W4nk8vrd/i-Stock-1126649089-1-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, restoring comfort, and improving your quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Patient-friendly migraine treatment",
          "Quick, minimally invasive procedures",
          "Long-lasting relief with periodic treatments",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Our experienced provider specializes in advanced headache and migraine treatments using Botox.
        `,
        whyChooseBg: "https://i.postimg.cc/Gm8fnKrQ/i-Stock-860143394-1.webp",
      },

      "steroid-injections": {
        title: "Steroid Injections",
        shortDescription: `
    Steroid joint injections (cortisone shots) can speed up recovery from sports injuries, ligament strains, cartilage damage, and arthritis flare-ups.
        `,
        mainContent: `
    Steroid joint injections, also referred to as "cortisone shots" or “intra-articular steroid injections", are a standard treatment for joint pain. They can speed up recovery from sports injuries, ligament strains/tears, cartilage damage, inflammatory disorders, and arthritis flare-ups.
    
    The treatment can reduce joint stiffness and help people return to the activities they love, before needing more invasive options such as surgery.
        `,
        images: {
          // For now, reusing your common images. Replace these URLs later if needed.
          hero: "https://i.postimg.cc/FzvJv3zz/i-Stock-1498966288-1.jpg",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/SxZ89gNp/i-Stock-2157383789-1-1.webp",
          overlay2: "https://i.postimg.cc/Y0vrZRwY/i-Stock-1665704188-1-1.webp",
        },
        // Reuse the "Why Choose Us" info or update as needed:
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, restoring comfort, and improving your overall quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Personalized pain management strategies",
          "Minimally invasive, targeted injections",
          "Quick recovery and reduced joint stiffness",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Our experienced specialists use state-of-the-art techniques to administer steroid injections, ensuring you receive safe and effective treatment.
        `,
        whyChooseBg: "https://i.postimg.cc/htkJVv7K/i-Stock-2167062787-1-1.webp",
      },

      "si-joint-injections": {
        title: "SI Joint Injections",
        shortDescription: `
    SI joint injections help diagnose and treat sacroiliac joint dysfunction to relieve lower back pain.
        `,
        mainContent: `
    The sacroiliac (SI) joints are located at the base of the spine and connect it to the pelvis. Inflammation in the SI joint is a common source of lower back pain. It can also cause pain in the buttocks, groin, and legs. Unfortunately, these symptoms are very common and can be caused by other things.
    
    SI joint dysfunction does not respond well to generalized pain treatments, so it is crucial that your doctor confirms this as the source of your pain in order to start an appropriate treatment plan.
    
    SI joint injections can be used to both diagnose and treat SI joint dysfunction. If you are experiencing lower back pain, you should consider this as a possible treatment.
        `,
        images: {
          // For now, reusing the same images; update as needed.
          hero: "https://i.postimg.cc/q77bS2cx/i-Stock-1816848945-1.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/kgrNmKQd/i-Stock-1772831186-1-1.webp",
          overlay2: "https://i.postimg.cc/SsX74rvk/i-Stock-1175074579-2-1-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, getting you back to your highest level of independence, and improving your quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Customized diagnostic and treatment plans",
          "Advanced imaging for precise injections",
          "Effective pain relief with minimally invasive techniques",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Stephen Sudekum, DO is a fellowship-trained physician specializing in sports, spine, and regenerative medicine.
        `,
        whyChooseBg: "https://i.postimg.cc/kG7SGPJN/i-Stock-2153084743-1.webp",
      },
      "trigger-point-injections": {
        title: "Trigger Point Injections",
        shortDescription: `
    Targeted injections to relieve muscle knots and enhance physical therapy outcomes.
        `,
        mainContent: `
    First, a doctor will need to find the trigger point. This is done through a physical exam wherein the doctor examines the muscles for knotted areas. Imaging is not needed to diagnose a trigger point as they do not show up on X-rays or MRIs. However, if an underlying condition is the cause of the trigger point, then these tests can be helpful.
    
    Receiving a trigger point injection typically only takes 15 minutes. You may receive several injections over the next couple of weeks, but after that, they are usually limited to one session every two months.
    
    Trigger point injections are very safe and there should not be any side effects. If you are taking physical therapy, trigger point injections have been shown to improve overall performance and efficiency in these programs.
        `,
        images: {
          // For now, reusing common images; update with specific images later.
          hero: "https://i.postimg.cc/XqrXvzn2/i-Stock-1010681402-1.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/5yN54KMR/i-Stock-1768925642-1-1.webp",
          overlay2: "https://i.postimg.cc/ZKLg7MTv/i-Stock-1318834027-1-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, restoring your comfort, and improving your overall quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Precise identification and targeting of muscle trigger points",
          "Quick, minimally invasive treatment sessions",
          "Enhanced outcomes when combined with physical therapy",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Our skilled specialists are experienced in using trigger point injections to relieve chronic muscle pain and improve function.
        `,
        whyChooseBg: "https://i.postimg.cc/0QKmrj5R/i-Stock-687491806-1.webp",
      },

      "emg-testing": {
        title: "Electromyography (EMG) Testing",
        shortDescription: `
    EMG tests assess nerve and muscle function to pinpoint causes of pain and weakness.
        `,
        mainContent: `
    Pain, weakness, tingling, and numbness — all of these symptoms can be caused by problems with nerves or muscles, and they can be physically disabling.
    
    Electrodiagnostic tests, such as Electromyography (EMG), reveal how well your nerves and muscles are working and determine the existence, type, and extent of any damage. This information is crucial for diagnosing conditions and planning effective treatment.
        `,
        images: {
          // For now, reusing your common images; update these URLs later if needed.
          hero: "https://i.postimg.cc/bvyKt6J8/i-Stock-1443498538-2-1.webp",
          section: "https://i.postimg.cc/Vkb1mHbH/i-Stock-1338579925-1-2.webp",
          overlay1: "https://i.postimg.cc/ZYs6Njbm/i-Stock-1479313987-1-1.webp",
          overlay2: "https://i.postimg.cc/T3TXG2nt/i-Stock-1171963818-1-1.webp",
        },
        whyChooseTitle: "Why Choose Us",
        whyChooseContent: `
    Our mission is to work with you in reducing your pain and suffering, ensuring an accurate diagnosis, and developing an effective treatment plan that improves your overall quality of life.
        `,
        helpTitle: "How We Can Help You",
        helpList: [
          "Accurate assessment of nerve and muscle function",
          "Identification of underlying neuromuscular disorders",
          "Guidance for tailored treatment strategies",
        ],
        providerTitle: "Meet Our Provider",
        providerContent: `
    Our expert team uses state-of-the-art electrodiagnostic techniques to provide comprehensive evaluations that inform your treatment plan.
        `,
        whyChooseBg: "https://i.postimg.cc/TYnZktk8/i-Stock-2172948003-1-1.webp",
      },
  };
  
// src/data.js

export const locationsData = {
  "santa-rosa": {
    name: "Santa Rosa Clinic",
    address: "864 2nd Street Suite B, Santa Rosa, CA 95404",
    heroImage: "https://i.postimg.cc/8cBRDRnQ/i-Stock-1878629507-2-1-1.webp",
    description:
      "Our Santa Rosa clinic offers personalized pain management and comprehensive care to help you achieve lasting relief.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "sacramento": {
    name: "Sacramento Clinic",
    address: "7275 E. Southgate Drive Suite 306, Sacramento, CA 95823",
    heroImage: "https://i.postimg.cc/K8NmLRCG/i-Stock-2159424867-1.webp",
    description:
      "Our Sacramento location offers expert consultations and advanced treatments to restore your quality of life.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "stockton": {
    name: "Stockton Clinic",
    address: "420 Acacia Street Suite 19, Stockton, CA 95203",
    heroImage: "https://i.postimg.cc/KjyWJ5gd/i-Stock-1357814327-1.webp",
    description:
      "Experience personalized care and effective pain management at our Stockton clinic.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "modesto": {
    name: "Modesto Clinic",
    address: "1130 Coffee Road BLDG 2B, Modesto, CA 95355",
    heroImage: "https://i.postimg.cc/QdpHz8Pw/i-Stock-1343463188-1.webp",
    description:
      "Our Modesto office is dedicated to restoring your quality of life with advanced treatments tailored to your needs.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "hayward": {
    name: "Hayward Clinic",
    address: "24700 Calaroga Ave Suite 103, Hayward, CA 94545",
    heroImage: "https://i.postimg.cc/Hnwkh3v5/i-Stock-1135194294-1.webp",
    description:
      "Visit our Hayward clinic for expert pain management and compassionate care in a welcoming environment.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "salinas": {
    name: "Salinas Clinic",
    address: "945 N. Blanco Suite A, Salinas, CA 93901",
    heroImage: "https://i.postimg.cc/MTzPBG2S/i-Stock-1176374269-1.webp",
    description:
      "Our Salinas location offers state-of-the-art treatments in a comfortable, patient-friendly setting.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "san-jose": {
    name: "San Jose Clinic",
    address: "2375 Montpelier Drive Suite 10, San Jose, CA 95116",
    heroImage: "https://i.postimg.cc/13PWgKkd/i-Stock-465837688-1.webp",
    description:
      "At our San Jose clinic, you'll receive personalized care and advanced pain management treatments tailored to your needs.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "fresno": {
    name: "Fresno Clinic",
    address: "349 E. Bullard Ave Suite 105, Fresno, CA 93710",
    heroImage: "https://i.postimg.cc/cH87kgqY/i-Stock-588965234-1.webp",
    description:
      "Our Fresno clinic provides comprehensive pain management and a range of treatment options in a modern, comfortable setting.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "hanford": {
    name: "Hanford Clinic",
    address: "1004 N. Douty Street, Hanford, CA 93230",
    heroImage: "https://i.postimg.cc/50qytbLT/i-Stock-2198440524-1.webp",
    description:
      "Visit our Hanford clinic for effective treatments and expert care in a friendly atmosphere.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  },
  "bakersfield": {
    name: "Bakersfield Clinic",
    address: "3550 Q. Street Suite 105, Bakersfield, CA 93301",
    heroImage: "https://i.postimg.cc/ZnCGMLbH/i-Stock-2178001181-1.webp",
    description:
      "Our Bakersfield clinic offers personalized treatment plans and advanced care to help you manage pain and improve your quality of life.",
    phone: "(877) 271-0203",
    fax: "(800) 887-1723",
    email: "referrals@californiapremierpainclinics.com",
    hours: "Mon - Fri: 08:00 AM - 05:00 PM, Sat - Sun: Closed",
  }
};