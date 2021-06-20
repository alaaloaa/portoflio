var experienceContainer = document.getElementById('experienceContainer')
var projectsContainer = document.getElementById('projectsContainer')
var skillsContainer = document.getElementById('skillsContainer')



var experienceData = [{
    title: 'Full-stack Developer',
    companyName: 'Information Technology House',
    type: 'Part-time',
    desc: 'PHP | Laravel | OOP | SQL | Api | Laravel Passport | RealTime | Javascript | VueJs | SPA | Element IO| Vuetify | Materialize | ChartsJs | HighCharts | Html | CSS | Sass',
    date: {
        from: 'Sep 2020',
        to: 'Mar 2021'
    },
},
{
    title: 'Full-stack Developer',
    companyName: 'MarMosque ',
    type: 'Part-time',
    desc: 'Social dating web application, PHP | Laravel | Sockets | Javascript | VueJs | Vuetify | Vuex | Router | RealTime Chat | Html | CSS | Sass',
    date: {
        from: 'Nov 2019',
        to: 'June 2020'
    },
},
{
    title: 'Front-end Developer',
    companyName: 'Oval Solutions',
    type: 'Full-time',
    desc: 'Javascript | VueJs | VanillaJs | SPA | API | HTML | CSS | CSS3 | Sass',
    date: {
        from: 'Sep 2019',
        to: 'May 2020'
    },
},
{
    title: 'Web Designer',
    companyName: 'SASBIT ',
    type: 'Full-time',
    desc: 'PHP | VanillaJs | HTML | CSS | CSS3 | Sass | JQuery',
    date: {
        from: 'Nov 2018',
        to: 'Aug 2019'
    },
},

];


var projectsData = [
    {
        link: 'https://wuzzufny.herokuapp.com/',
        bg: 'bg1',
        title: 'Wuzzufny',
        desc: 'Search For a Job and Get hired Quickly'
    },
    {
        link: 'https://mix-store.herokuapp.com/',
        bg: 'bg4',
        title: 'Mix Store',
        desc: 'Buy your favourite clothes, just click here.'
    },
    {
        link: 'https://roaa-school.netlify.com/',
        bg: 'bg6',
        title: 'Roaa School',
        desc: 'You can join School, just click here.'
    },
    {
        link: 'https://puzzule.netlify.app/',
        bg: 'bg3',
        title: 'Puzzle Game',
        desc: 'This Is A Puzzle Game, Play It And Enjoy Your Time'
    },
    {
        link: 'https://gallery-story.netlify.com/',
        bg: 'bg5',
        title: 'Story',
        desc: 'Read about people that you love, just click here.'
    },
    {
        link: 'https://online-courses.netlify.com/',
        bg: 'bg2',
        title: 'Online Courses',
        desc: 'You can learn online now via this site, just choose your plan.'
    },
    // {
    //     link: 'https://mobiles-store.netlify.com/',
    //     bg: 'bg4',
    //     title: 'Shop',
    //     desc: 'Buy your favourite moblie, just click here.'
    // }
]


var skillsData = [{
    title: 'laravel',
    rate: '85'
},
{
    title: 'vue',
    rate: '90'
}, {
    title: 'oop',
    rate: '80'
},
{
    title: 'php',
    rate: '80'
},
{
    title: 'vuex',
    rate: '90'
},
{
    title: 'sql',
    rate: '90'
},
{
    title: 'javascript',
    rate: '85'
},
{
    title: 'html5',
    rate: '95'
},
{
    title: 'css',
    rate: '95'
},
{
    title: 'css3',
    rate: '95'
},
{
    title: 'bootstrap',
    rate: '95'
},
{
    title: 'materialize',
    rate: '90'
},
{
    title: 'jquery',
    rate: '90'
},
{
    title: 'router',
    rate: '85'
}, {
    title: 'sockets',
    rate: '90'
}, {
    title: 'highcharts',
    rate: '80'
}, {
    title: 'pug.js',
    rate: '85'
}, {
    title: 'gulp.js',
    rate: '80'
},
{
    title: 'mvc',
    rate: '90'
}, {
    title: 'cms',
    rate: '90'
}, {
    title: 'git',
    rate: '90'
}, {
    title: 'cmd',
    rate: '90'
},
{
    title: 'restful.api',
    rate: '90'
},
]

for (let i = 0; i < skillsData.length; i++) {
    skillsContainer.innerHTML +=
        `<p>${skillsData[i].title}</p>
         <div class="bar animate bar w3-light-grey w3-round-xlarge w3-small">
            <div class="animate w3-container w3-center w3-round-xlarge w3-teal" style="width: ${skillsData[i].rate}%">
                ${skillsData[i].rate}%
            </div>
         </div>
        `
}


for (let i = 0; i < projectsData.length; i++) {
    projectsContainer.innerHTML +=
        `<div class="col-md-6 col-sm-6 col-xs-12 w3-margin-bottom">
            <a href="${projectsData[i].link}" class="pro">
                <div class="main">
                    <div class="bg ${projectsData[i].bg}"></div>
                    <div class="over">
                        <p class="">Visit Me</p>
                    </div>
                </div>
                <div class="txt w3-card">
                    <h3>${projectsData[i].title}</h3>
                    <p>${projectsData[i].desc}</p>
                </div>
            </a>
         </div>
        `
}



for (let i = 0; i < experienceData.length; i++) {
    experienceContainer.innerHTML +=
        `<div class="w3-container wow fadeInRight">
            <div class="top">
                <div class="w3-opacity">
                    <i
                    class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"
                    ></i
                    ><b>${experienceData[i].title} / ${experienceData[i].companyName} - ${experienceData[i].type}</b>
                </div>
                <div class="w3-text-teal pull-right">
                    <i class="fa fa-calendar fa-fw w3-margin-right"></i>${experienceData[i].date.from} -
                    <span class="w3-tag w3-teal w3-round">${experienceData[i].date.to}</span>
                </div>
            </div>
            <p class="txt">
            ${experienceData[i].desc}
            </p>
        </div>
        <hr />`
}