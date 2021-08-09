/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Farhan Sadik",
  title: "Hi there! I'm Farhan",
  subTitle: emoji(
    "A passionate Mobile Application Developer 🚀 who loves to take on new projects that challenges his analytical and technological capacities. "
  ),

  // having an experience of building Mobile applications with Java , Swift , Dart and some other cool libraries and frameworks.

  resumeLink:
    "https://drive.google.com/file/d/1UHlmO3HPiGcIQpg1_sHUquxpAXEXW3Rk/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/farhansadikgalib",
  linkedin: "https://www.linkedin.com/in/farhansadikgalib",
  gmail: "farhansadikgalib@gmail.com",
  gitlab: "https://gitlab.com/farhansadikgalib",
  facebook: "https://www.facebook.com/farhansadikgalib",
  medium: "https://medium.com/@farhansadikgalib",
  stackoverflow: "https://stackoverflow.com/users/8656491/farhan",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    
    "⚡ Experience working on Android & iOS apps",
    "⚡ Knowledge on several SDKs & APIs",
    "⚡ Deploying Firebase based apps for secure accessing of information from anywhere",
    "⚡ Adapting new Material Design principles for a more refined look",
    "⚡ Designing highly attractive user interface for mobile and web applications",
    "⚡ Customizing logo designs and building logos from scratch",
    "⚡ Creating the flow of application functionalities to optimize user experience",
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },

    {
      skillName: "GCP",
      fontAwesomeClassname: "simple-icons:googlecloud",
      style: {
        color: "#4285F4",
      },
    },
    {
      skillName: "Android Studio",
      fontAwesomeClassname: "mdi:android-studio",
      style: {
        color: "#3DDC84",
      },
    },
    {
      skillName: "VS",
      fontAwesomeClassname: "mdi:microsoft-visual-studio",
      style: {
        color: "#5C2D91",
      },
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "simple-icons:firebase",
      style: {
        color: "#FFCA28",
      },
    },
    {
      skillName: "Gradle",
      fontAwesomeClassname: "simple-icons:gradle",
      style: {
        color: "#02303A",
      },
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "simple-icons:java",
      style: {
        color: "#007396",
      },
    },
    {
      skillName: "ADB",
      fontAwesomeClassname: "ic:outline-adb",
  
    },
    // {
    //   skillName: "Eclipse",
    //   fontAwesomeClassname: "simple-icons:eclipseide",
     
    // },


    // {
    //   skillName: "Swift",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
 
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Daffodil Institute Of IT",
      logo: require("./assets/images/diit_logo.png"),
      subHeader: "Bachelor of Science (B.Sc.)in Computer Science",
      duration: "CGPA- 3.07(up to 6th semester)",
      desc: "February 2017 - April 2021",
      // descBullets: [
      //   "Dhaka",
        
      // ]
    },
    {
      schoolName: "Amena-Baki Residential Model School & College",
      logo: require("./assets/images/abrmsc.png"),
      subHeader: "Science",
      duration: "GPA-4.64",
      desc: "May 2014 - April 2016",
      //  descBullets: ["Dinajpur"]
    },
    {
      schoolName: "Birampur Pilot High School",
      logo: require("./assets/images/bphs.png"),
      subHeader: "Science",
      duration: "GPA-5",
      desc: "January 2009 - April 2014",
      // descBullets: ["Dinajpur"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "EzzeeTechnology ltd.",
      companylogo: require("./assets/images/ezee.png"),
      date: "July 2021 – Present",
      desc: "I'm working here as a Flutter Trainer with a Govt. Project which is named by Skill Development for Mobile Game & Application",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Mobile Application Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr.png"),
      date: "Feb 2021 – Present",
       desc: "I'm working here any kind of mobile application development"
    },
    {
      role: "Android Developer",
      company: "Olivine Ltd.",
      companylogo: require("./assets/images/olivine.png"),
      date: "November 2019 – May 2020",
      desc: "Worked on two Govt. project named by Charity & Prottoyon"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Advance Professional Android Developer",
      subtitle:
        "Advanced Professional Coaching with Industry Attachment Including Apps & Game Development",
      image: require("./assets/images/ict.png"),
      footerLink: [
 
      ]
    },
    {
      title: "SEIP",
      subtitle:
        "Skills for Employment Investment Program (SEIP)",
      image: require("./assets/images/basis.png"),
      footerLink: [
       
      ]
    },

    {
      title: "SDMGA",
      subtitle: "Skill Development for Mobile Game & Application",
      image: require("./assets/images/sdmga.png"),
      footerLink: [
     
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880-1773076754",
  email_address: "farhansadikgalib@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
