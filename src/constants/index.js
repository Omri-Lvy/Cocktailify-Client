import {Calendar, Cherry, Heart, Martini, PartyPopper, WineOff} from 'lucide-react';

export const navItems = [
    {name: "Explore", path: "/explore"},
    {name: "Mocktails Area", path: "/non-alcoholic-drinks"},
];

export const features = [
    {
        icon: <Martini/>,
        text: "Developer Cocktails",
        description: "Discover classic cocktail recipes curated specifically for developers, perfect for unwinding after a long day of coding."
    },
    {
        icon: <Calendar/>,
        text: "Cocktail of the day",
        description: "Never miss out on a new favorite with our daily featured cocktail, handpicked for you to explore and enjoy."
    },
    {
        icon: <WineOff/>,
        text: "Mocktail Corner",
        description: "Indulge in refreshing non-alcoholic options with our collection of mocktail recipes, perfect for any occasion or preference."
    },
    {
        icon: <Cherry/>,
        text: "Ingredient Spotlight",
        description: "Dive deep into the world of cocktail ingredients and learn how to incorporate them into your drinks with our comprehensive guides."
    },
    {
        icon: <PartyPopper/>,
        text: "Virtual Happy Hours",
        description: "Connect with fellow cocktail enthusiasts in our virtual happy hours, where you can enjoy drinks together from anywhere."
    },
    {
        icon: <Heart/>,
        text: "Cocktail Collection",
        description: "Create and curate your own personalized collections of cocktail recipes you love, making it easy to find and share your favorites."
    },
];

export const faq = [
    {
        question: "Do I need to have mixology experience to use your recipes?",
        answer: "Absolutely not! Our recipes are designed for everyone, from beginners to experienced bartenders. Each recipe includes detailed instructions and tips to help you create delicious cocktails. Plus, we provide tutorials and tools that can help even the most novice mixologist get started."
    },
    {
        question: "Can I access Cocktailify recipes without an account?",
        answer: "You can browse our recipes without an account, but to enjoy the full experience, including saving your favorite recipes and accessing exclusive content, we recommend signing up. It’s free to start, and you can upgrade anytime for additional features."
    },
    {
        question: "Are there non-alcoholic options available in the Cocktail Collection?",
        answer: "Yes, we believe everyone should enjoy the art of drink crafting, which is why our Cocktail Collection includes a variety of non-alcoholic 'mocktails'. These recipes are crafted with the same level of creativity and flavor complexity as their alcoholic counterparts."
    },
    {
        question: "How can I join a Virtual Happy Hour?",
        answer: "We host Virtual Happy Hours regularly, and all you need to join is an internet connection and a device with a camera. Keep an eye on our Events page for upcoming happy hours, and join the fun from the comfort of your own home."
    },
    {
        question: "Do I need special equipment to make the cocktails featured on Cocktailify?",
        answer: "While having some basic bar tools might enhance your experience, many of our recipes are designed to be accessible and can be made with everyday kitchen utensils. For those interested in more advanced techniques, we provide guidance on what equipment to use and how to use it effectively."
    }
]

export const testimonials = [
    {
        name: "Sarah Lee",
        company: "Stellar Solutions",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        text: "A lifesaver after long coding sessions! The recipes are clear, concise, and use ingredients I usually have on hand. Plus, the developer-themed drink names are hilarious!",
    },
    {
        name: "David Kim",
        company: "ZenCoders",
        image: "https://github.com/kushald/virtualr/blob/main/src/assets/profile-pictures/user5.jpg?raw=true",
        text: "As a full-stack developer, I appreciate the clean and functional design of this website. Finding recipes is easy, and the substitution suggestions are fantastic for when I'm missing something. Thursday noon happy hour just got a whole lot more interesting!",
    },
    {
        name: "Jane Smith",
        company: "Coded Dreams",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        text: "This website has become my go-to resource for impressing colleagues at after-work gatherings. The recipes are impressive without being overly complicated, perfect for someone who doesn't consider themselves a mixologist. Cheers!",
    },
    {
        name: "Robert Johnson",
        company: "Agile Avengers",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        text: "Finally, a recipe website that speaks my language! The use of developer puns in the drink names is fantastic, and the search function allows me to filter by ingredients or desired effects (relaxing, energizing, etc.). Perfect for unwinding after a long day of coding.",
    },
    {
        name: "Michael Wilson",
        company: "Visionary Creations",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        text: "I never thought I'd say this, but this website has made coding more enjoyable! Having a delicious cocktail waiting for me at the end of a long day keeps me motivated. Thanks for the creativity and the delicious drinks!",
    },
    {
        name: "Emily Davis",
        company: "Quantum Innovations",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        text: "Before I found this website, my after-work routine felt like debugging and infinite while loop of takeout and takeout menus. Now, thanks to these creative and delicious recipes, my evenings are a delightful experiment in mixology."
    },
];

export const resourcesLinks = [
    {href: "/getting-started", text: "Mixology Basics"},
    {href: "/documentation", text: "Cocktail Guides"},
    {href: "/tutorials", text: "Mixing Techniques"},
    {href: "/faq", text: "FAQs"},
    {href: "/community-forums", text: "Discussion Board"},
];

export const platformLinks = [
    {href: "/features", text: "Special Features"},
    {href: "/virtual-happy-hour", text: "Virtual Happy Hours"},
    {href: "/ingredient-spotlight", text: "Ingredient Spotlight"},
    {href: "/tools", text: "Bar Tools & Equipment"},
    {href: "/release-notes", text: "What's New"},
];

export const communityLinks = [
    {href: "/events", text: "Upcoming Events"},
    {href: "/meetups", text: "Local Meetups"},
    {href: "/conferences", text: "Industry Conferences"},
    {href: "/hackathons", text: "Mixology Hackathons"},
    {href: "/careers", text: "Career Opportunities"},
];