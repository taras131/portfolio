import {TService} from "../models/TServices";
import {TPlan, TPlansAdvantage} from "../models/TPricePlans";
import {TRecommendation} from "../models/TRecommendations";
import avatar_1 from "../assets/images/recomendation_photo_1.jpg";
import avatar_2 from "../assets/images/recomendation_photo_2.jpg";
import avatar_3 from "../assets/images/recomendation_photo_3.jpg";
import portfolio_1 from "../assets/images/portfolio_1.png";
import portfolio_2 from "../assets/images/portfolio_2.jpg";
import portfolio_3 from "../assets/images/portfolio_3.jpg";
import portfolio_4 from "../assets/images/portfolio_4.png";
import portfolio_5 from "../assets/images/portfolio_5.jpg";
import portfolio_6 from "../assets/images/portfolio_6.jpg";
import portfolio_7 from "../assets/images/portfolio_7.webp";
import portfolio_8 from "../assets/images/portfolio_8.webp";
import portfolio_9 from "../assets/images/portfolio_9.png";
import myPhoto from "../assets/images/my_photo.webp";
import {THistory} from "../models/THistory";
import {TPortfolio, TPortfolioCategory} from "../models/TPortfolio";
import {TBlog} from "../models/TBlog";
import {TContact} from "../models/TContacts";
import {TProfile} from "../models/TProfile";
import {TNavigation} from "../models/TNavigation";
//sprite ids
export enum spriteIds  {
    sound= "sound",
    photography= "photography",
    game= "game",
    design= "design",
    development= "development",
    check= "check",
    contact= "contact",
    location= "location",
    mail= "mail",
    petroleum= "petroleum",
    station= "station",
    garage= "garage",
    filling= "filling",
    copyright= "copyright",
    facebook= "facebook",
    instagram= "instagram",
    twitter= "twitter",
    dribble= "dribble",
    youtube= "youtube",
    linkedIn= "linkedIn",
    doubleIcon= "doubleIcon",
    cv= "cv",
    download= "download",
    star= "star",
    contrast= "contrast",
    home= "home",
    popUp= "popUp",
    portfolio= "portfolio",
    blog= "blog",
    code= "code",
    rightArrow= "rightArrow",
    arrow= "arrow",
    plus= "plus",
    mobile= "mobile",
    close= "close"
}
//services
export const servicesTitle = "My Services";
export const servicesDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia " +
    "consequat duis enim velit mollit. lorem ipsum"
export const services: TService [] = [
    {id: 0, title: "Web Development", subtitle: "Blog, E-commerce", iconId: spriteIds.development},
    {id: 1, title: "UI/UX Design", subtitle: "Mobile App, Website Design", iconId: spriteIds.design},
    {id: 2, title: "Sound Design", subtitle: "Voice Over, Beat Making", iconId: spriteIds.sound},
    {id: 3, title: "Game Design", subtitle: "Character Design, Props & Objects", iconId: spriteIds.game},
    {id: 4, title: "Photography", subtitle: "Portrait, Product Photography", iconId: spriteIds.photography},
    {id: 5, title: "Sound Design", subtitle: "Voice Over, Beat Making", iconId: spriteIds.sound},
]
//price plans
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
        priceHourInDollars: "0.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1]
    },
    {
        id: 1,
        isPopular: true,
        name: "Gold",
        priceHourInDollars: "50.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1, 2, 3]
    },
    {
        id: 2,
        isPopular: false,
        name: "Dimond",
        priceHourInDollars: "80.00",
        description: "For most Businesses That Want to Optimize Web Queries",
        advantagesIdList: [0, 1, 2, 3, 4, 5, 6, 7]
    },
]
//recommendations
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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
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
    {
        id: 1,
        rating: 5,
        title: "I Love You!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        author: {
            name: "Tiana Philips",
            role: "Photographer",
            imgPath: avatar_2
        }
    },
    {
        id: 2,
        rating: 4,
        title: "Like!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        author: {
            name: "Taras Zverev",
            role: "Business man",
            imgPath: avatar_3
        }
    },
]
//education
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
//work
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
// portfolio
export const portfolioTitle = "Portfolio";
export const portfolioDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
    "Velit officia consequat duis enim velit mollit. lorem ipsum";
export const portfolioWorks: TPortfolio [] = [
    {
        id: 0,
        imgPath: portfolio_1,
        categoryId: 1
    },
    {
        id: 1,
        imgPath: portfolio_2,
        categoryId: 3
    },
    {
        id: 2,
        imgPath: portfolio_3,
        categoryId: 2
    },
    {
        id: 3,
        imgPath: portfolio_4,
        categoryId: 2
    },
    {
        id: 4,
        imgPath: portfolio_5,
        categoryId: 3
    },
    {
        id: 5,
        imgPath: portfolio_6,
        categoryId: 4
    },
    {
        id: 6,
        imgPath: portfolio_7,
        categoryId: 3
    },
    {
        id: 7,
        imgPath: portfolio_8,
        categoryId: 4
    },
    {
        id: 8,
        imgPath: portfolio_9,
        categoryId: 3
    },
]
export const portfolioCategories: TPortfolioCategory [] = [
    {id: 0, title: "All categories"},
    {id: 1, title: "UI Design"},
    {id: 2, title: "Web Templates"},
    {id: 3, title: "Logo"},
    {id: 4, title: "Branding"},
]
// blog
export const blogTitle = "Blog";
export const blogDescription = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. " +
    "Velit officia consequat duis enim velit mollit. lorem ipsum";
export const blogs: TBlog[] = [
    {
        id: 0,
        title: "How to make web tempates",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna ",
        imgPath: portfolio_9,

    },
    {
        id: 1,
        title: "make Business card",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna ",
        imgPath: portfolio_2,
    },
    {
        id: 2,
        title: "How to make Flyer Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
            " Vitae nulla diam in ac dictum a urna ",
        imgPath: portfolio_4,
    },
]
// contacts
export const myContacts: TContact [] = [
    {
        id: 0,
        iconId: spriteIds.location,
        items: [
            {id: 0, name: "Country:", value: "Bangladesh"},
            {id: 1, name: "City:", value: "Dhaka"},
            {id: 2, name: "Country:", value: "35 vhatara, Badda"},
        ]
    },
    {
        id: 1,
        iconId: spriteIds.mail,
        items: [
            {id: 0, name: "Email:", value: "youremail@gmail.com"},
            {id: 1, name: "Skype:", value: "@yourusername"},
            {id: 2, name: "Telegram:", value: "@yourusername"},
        ]
    },
    {
        id: 2,
        iconId: spriteIds.mobile,
        items: [
            {id: 0, name: "Support services:", value: "15369"},
            {id: 1, name: "Office:", value: "+58 (021)356 587 235"},
            {id: 2, name: "Personal:", value: "+58 (021)356 587 235"},
        ]
    },
]
// clients
export const clients = [
    {id: 0, iconId: spriteIds.petroleum},
    {id: 1, iconId: spriteIds.filling},
    {id: 2, iconId: spriteIds.garage},
    {id: 3, iconId: spriteIds.station},
]

export const myProfile: TProfile = {
    main: {
        myPhotoPath: myPhoto,
        name: "Rayan Adlardard",
        role: "Font-end Developer",
        social: [
            {id: 0, iconId: spriteIds.facebook, title: "facebook"},
            {id: 1, iconId: spriteIds.instagram, title: "instagram"},
            {id: 2, iconId: spriteIds.twitter, title: "twitter"},
            {id: 3, iconId: spriteIds.linkedIn, title: "linkedIn"},
            {id: 4, iconId: spriteIds.youtube, title: "youtube"},
            {id: 5, iconId: spriteIds.dribble, title: "dribble"},
  ],
    },
    parameters: [
        {id: 0, name: "age:", value: "24"},
        {id: 1, name: "residence:", value: "BD"},
        {id: 2, name: "freelance:", value: "Available"},
        {id: 3, name: "address:", value: "Dhaka,Bangladesh"},
    ],
    languages: {
        title: "Languages",
        progress: [
            {id: 0, name: "Bangla", percent: 100},
            {id: 1, name: "English", percent: 80},
            {id: 2, name: "Spanish", percent: 70},
        ]
    },
    skills: {
        title: "Skills",
        progress: [
            {id: 0, name: "Html", percent: 90},
            {id: 1, name: "CSS", percent: 80},
            {id: 2, name: "Js", percent: 72},
            {id: 3, name: "PHP", percent: 75},
            {id: 4, name: "WordPress", percent: 78},
        ]
    },
    extraSkills: [
        "Bootstrap, Materialize", "Stylus, Sass, Less", "Gulp, Webpack, Grunt",
        "GIT Knowledge"
    ]
}
//navigation
export const navigation: TNavigation [] = [
    {id: 0, title: "Home", iconId: spriteIds.home},
    {id: 1, title: "Price", iconId: spriteIds.code},
    {id: 2, title: "Education", iconId: spriteIds.cv},
    {id: 3, title: "Portfolio", iconId: spriteIds.portfolio},
    {id: 4, title: "Blog", iconId: spriteIds.blog},
    {id: 5, title: "Contact", iconId: spriteIds.contact},
]
