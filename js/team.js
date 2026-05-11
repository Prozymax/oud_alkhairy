// Team member data
const teamData = {
    zikrullah: {
        name: "Zikrullah O. Atobajeun",
        role: "Chief Executive Officer",
        image: "img/lanre.jpg",
        specializations: ["Operations", "Strategy", "Business Development", "International Trade"],
        bio: "Highly motivated and results-driven, Zikrullah Atobajeun is the Chief Executive Officer at Oud Alkhairy Ltd. In this role, he helps the firm establish and attain its performance goals. These goals relate primarily to growth, profits, client services, value creation, and people development. Zikrullah has extensive experience serving large multinational clients in a variety of industries, principally focusing on technology and international trade. He plays an integral role in Oud Alkhairy LTD global integration efforts and oversees major Oud Alkhairy LTD operations globally. In addition to his management duties, He maintains a personal commitment to client service, acting as a senior advisory partner to major clients and technical partners.",
        linkedin: "#",
        experience: [
            {
                title: "Strategic Leadership",
                description: "Leading Oud Alkhairy Ltd's strategic direction and global operations with focus on sustainable growth and value creation."
            },
            {
                title: "International Business Development",
                description: "Extensive experience in developing and maintaining relationships with multinational clients across diverse industries."
            },
            {
                title: "Technology & Innovation",
                description: "Driving technological advancement and innovation initiatives to maintain competitive advantage in the industry."
            }
        ]
    },
    ayodeji: {
        name: "Ayodeji Fatai-Oso",
        role: "Director",
        image: "img/ayo.jpeg",
        specializations: ["Engineering", "Operations", "Business Development"],
        bio: "Ayodeji Fatai-Oso is a versatile professional with expertise in Engineering, Operations, and Business Development. As an engineer, he excels in technical problem-solving and project execution. His focus on operational excellence ensures resource management and workflow optimization for enhanced productivity. In Business Development, Ayodeji identifies growth opportunities, forges partnerships, and navigates market dynamics to expand business horizons. His integrated approach combines engineering skills with business acumen, driving sustainable growth and delivering stakeholder value. Ayodeji's diverse skill set and passion for innovation position him as a leader capable of tackling complex challenges and propelling organizational success.",
        linkedin: "#",
        experience: [
            {
                title: "Engineering Excellence",
                description: "Leading complex engineering projects with focus on technical innovation and efficient execution."
            },
            {
                title: "Operational Management",
                description: "Optimizing workflows and resource management to enhance productivity and operational efficiency."
            },
            {
                title: "Strategic Partnerships",
                description: "Identifying and developing strategic partnerships to drive business growth and market expansion."
            }
        ]
    },
    abdulrazaq: {
        name: "Abdulrazaq Modibbo Abubakar",
        role: "Director",
        image: "img/Abdul.jpeg",
        specializations: ["Marketing", "International Communication", "Public Relations", "Business Development"],
        bio: "Abdulrazaq Modibbo Abubakar, with a decade of experience, excels in energy transition and sustainability. As Head of International Communications at the Centre For Energy Investment And Innovation, he promotes dialogue and shapes narratives for a sustainable energy future. A dedicated climate change activist, Abdulrazaq previously worked as a Digital Marketing Specialist at eMarketing Agency, a Communication Specialist at Black Board Associates Ltd, and a Public Relations Officer at Salkam Consulting Company. He is also an avid traveler and passionate networker, enriching his perspectives through diverse cultural experiences.",
        linkedin: "#",
        experience: [
            {
                title: "International Communications",
                description: "Leading communication strategies for energy transition and sustainability initiatives at the Centre For Energy Investment And Innovation."
            },
            {
                title: "Digital Marketing & PR",
                description: "Extensive experience in digital marketing, public relations, and brand communication across multiple organizations."
            },
            {
                title: "Climate Change Advocacy",
                description: "Active climate change activist promoting sustainable practices and environmental awareness."
            }
        ]
    }
};

// Handle team card clicks
document.addEventListener('DOMContentLoaded', function() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member');
            window.location.href = `profile.html?member=${memberId}`;
        });
    });
});
