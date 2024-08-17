import feature_1 from "../assets/feature_1.svg"
import feature_2 from "../assets/feature_2.svg"
import feature_3 from "../assets/feature_3.svg"
import feature_4 from "../assets/feature_4.svg"
import feature_5 from "../assets/feature_5.svg"
import feature_6 from "../assets/feature_6.svg"

import icon_1 from "../assets/individual_icon.svg"
import icon_2 from "../assets/team_icon.svg"
import icon_3 from "../assets/enterprise_icon.svg"

export const navbarItems = [
    {label: "Features", href: "#"},
    {label: "Pricing", href: "#"},
    {label: "FAQs", href: "#"},
    {label: "Support", href: "#"},
]

export const featuresItems = [
    {
        title: "Cross-Platform Accessibility",
        text:
            "Whether you're on your desktop, tablet, or smartphone, \n" +
            "SmartNotes is accessible across all devices. Work seamlessly on \n" +
            "the go and never miss a beat.",
        img: feature_1
    },
    {
        title: "Customizable Templates",
        text:
            "Create custom templates for your recurring tasks or projects to \n" +
            "save time and ensure consistency. Tailor SmartNotes to fit your \n" +
            "unique workflow and preferences.",
        img: feature_2
    },
    {
        title:
            "Secure Cloud \n" +
            "Storage",
        text:
            "Rest easy knowing that your \n" +
            "notes are securely stored in \n" +
            "the cloud. Access your \n" +
            "information from any \n" +
            "device, anytime, without \n" +
            "worrying about losing \n" +
            "important data.",
        img: feature_3
    },
    {
        title:
            "Real-Time \n" +
            "Collaboration",
        text:
            "Collaborate seamlessly \n" +
            "with your team members or \n" +
            "classmates in real-time on \n" +
            "shared notes and projects.",
        img: feature_4
    },
    {
        title:
            "AI-Powered \n" +
            "Organization",
        text:
            "Our AI-powered \n" +
            "organization feature \n" +
            "categorizes and prioritizes \n" +
            "your notes, making it easy \n" +
            "to find what you need when \n" +
            "you need it.",
        img: feature_5
    },
    {
        title: "Integrations",
        text:
            "Connect SmartNotes with \n" +
            "your favorite productivity \n" +
            "tools like Google Drive, \n" +
            "Trello, and Slack. Streamline \n" +
            "your workflow by syncing \n" +
            "data across platforms and \n" +
            "enhancing collaboration.",
        img: feature_6
    }
]

export const pricingItems = [
    {
        icon: icon_1 ,
        plan: "Individual Plan",
        price: "$9.99",
        features: [
            "Real-time collaboration",
            "AI-powered organization",
            "Customizable templates",
            "5GB cloud storage",
            "Basic integrations"
        ],
        btnContent: "Start Free Trial",
        note: "No credit card required"
    },
    {
        icon: icon_2 ,
        plan: "Team Plan",
        price: "$19.99",
        features: [
            "Everything in the Individual Plan",
            "Unlimited cloud storage",
            "Advanced integrations",
            "Team management and permissions",
            "Shared templates and note libraries"
        ],
        btnContent: "Start Free Trial",
        note: "No credit card required"
    },
    {
        icon: icon_3 ,
        plan: "Enterprise Plan",
        price: "Custom",
        features: [
            "Everything in the Team Plan",
            "Dedicated account manager",
            "Enterprise-grade security",
            "Customized onboarding",
            "Advanced analytics"
        ],
        btnContent: "Contact support"
    }
]

export const FAQItems = [
    {
        title: "What is SmartNotes?",
        description:
            "SmartNotes is an innovative, cloud-based note-taking application that helps you organize, " +
            "collaborate, and manage your tasks efficiently."
    },
    {
        title: "How do I get started with SmartNotes?",
        description: "Getting started with SmartNotes is easy! Simply visit our website, " +
            "sign up for a free trial, and start exploring the features. " +
            "Our intuitive interface and comprehensive onboarding materials will guide you through the process."
    },
    {
        title: "What are the key features of SmartNotes?",
        description:
            "SmartNotes offers a range of powerful features, including cross-platform accessibility, " +
            "customizable templates, secure cloud storage, real-time collaboration, AI-powered organization, " +
            "and integrations with popular tools like Google Drive and Trello."
    },
    {
        title: "How much does SmartNotes cost?",
        description:
            "SmartNotes offers flexible pricing plans tailored to your needs. " +
            "You can start with a free trial to explore the features, " +
            "and then upgrade to one of our premium plans based on your usage and team size. Visit our pricing page for more details."
    },
    {
        title: "Who is SmartNotes for?",
        description:
            "SmartNotes is perfect for individuals, students, professionals, " +
            "and teams who want to stay organized, collaborate effectively, and boost productivity. " +
            "Whether you're managing personal tasks or working on complex projects, SmartNotes adapts to your workflow."
    },
    {
        title: "Why SmartNotes?",
        description:
            "SmartNotes stands out because of its powerful combination of AI-driven organization, " +
            "real-time collaboration, and seamless integrations. It helps you save time, stay organized, " +
            "and work efficiently across multiple devices, stored your data in the cloud."
    }
]