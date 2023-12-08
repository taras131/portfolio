import {TService} from "../models/TServices";
import {TPlan, TPlansAdvantage} from "../models/TPricePlans";
import {TRecommendation} from "../models/TRecommendations";
import avatar_1 from "../assets/images/recomendation_photo_1.jpg";
import avatar_2 from "../assets/images/recomendation_photo_2.jpg";
import avatar_3 from "../assets/images/recomendation_photo_3.jpg";
import {THistory} from "../models/THistory";

export const servicesTitle = "My Services";
export const servicesDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia " +
    "consequat duis enim velit mollit. lorem ipsum"
export const services: TService [] = [
    {id: 0, title: "Web Development", subtitle: "Blog, E-commerce", iconId: "development"},
    {id: 1, title: "UI/UX Design", subtitle: "Mobile App, Website Design", iconId: "design"},
    {id: 2, title: "Sound Design", subtitle: "Voice Over, Beat Making", iconId: "sound"},
    {id: 3, title: "Game Design", subtitle: "Character Design, Props & Objects", iconId: "game"},
    {id: 4, title: "Photography", subtitle: "Portrait, Product Photography", iconId: "photography"},
    {
        id: 5,
        title: "Advertising",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Vitae nulla diam in ac dictum a urna" +
            " viverra morbi.",
        iconId: ""
    }
]

export const plansTitle = "Price plans";
export const plansDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit " +
    "officia consequat duis enim velit mollit. lorem ipsum";
export const plansAdvantages: TPlansAdvantage[] = [
    {id: 0, name: "UI Design"},
    {id: 1, name: "Web Development"},
    {id: 2, name: "Logo Design"},
    {id: 3, name: "Seo Optimization"},
    {id: 4, name: "WordPress Integration"},
    {id: 5, name: "5 Websites"},
    {id: 6, name: "Unlimited User"},
    {id: 7, name: "20 GB Bandwith"},
]
export const plans: TPlan[] = [
    {
        id: 0,
        isPopular: false,
        name: "Silver",
        costHourInDollars: "0.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1]
    },
    {
        id: 1,
        isPopular: true,
        name: "Gold",
        costHourInDollars: "50.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1, 2, 3]
    },
    {
        id: 2,
        isPopular: false,
        name: "Dimond",
        costHourInDollars: "80.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1, 2, 3, 4, 5, 6, 7]
    },
]

export const recommendationsTitle = "Recommendations";
export const recommendationsDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
    " Velit officia consequat duis enim velit mollit. lorem ipsum";
export const recommendations: TRecommendation [] = [
    {
        id: 0,
        rating: 5,
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        author: {
            name: "James Gouse",
            role: "Graphic Designer",
            imgPath: avatar_1
        }
    },
    {
        id: 1,
        rating: 5,
        title: "Amazing work!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna" +
            "viverra morbi. Morbi donec amet....",
        author: {
            name: "Tiana Philips",
            role: "Photographer",
            imgPath: avatar_2
        }
    },
    {
        id: 2,
        rating: 3,
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        author: {
            name: "Talan Westervelt",
            role: "Business man",
            imgPath: avatar_3
        }
    },
]
export const educationTitle = "Education";
export const educationDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit" +
    " officia consequat duis enim velit mollit. lorem ipsum";
export const educationHistory: THistory [] = [
    {
        id: 0,
        name: "University of Toronto",
        role: "Student",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
    {
        id: 1,
        name: "Programming Course",
        role: "Student",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
    {
        id: 2,
        name: "Web developer courses",
        role: "Student",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
]

export const workTitle = "Work History";
export const workDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit" +
    " officia consequat duis enim velit mollit. lorem ipsum";
export const workHistory: THistory [] = [
    {
        id: 0,
        name: "University of Toronto",
        role: "Lead Web Designer",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
    {
        id: 1,
        name: "Programming Course",
        role: "Junior Web Designer",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
    {
        id: 2,
        name: "Web developer courses",
        role: "Senior Web Designer",
        discipline: "Certificate of web training",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, " +
            "egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus " +
            "etiam et pellentesque. Molestie risus enim neque eget dui.",
        dateStart: "Jan 1016",
        dateFinish: "Dec 2021"
    },
]