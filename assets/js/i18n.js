// Multi-language support
const translations = {
    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.qualification": "Qualification",
        "nav.projects": "Projects",
        "nav.hobbies": "Hobbies",
        "nav.writing": "Writing",
        "nav.contact": "Contact",

        // Home
        "home.greeting": "Hello, my name is",
        "home.tagline": "And I am ",
        "home.cta": "Hire Me",

        // About
        "about.title": "About me",
        "about.intro": "I'm Patrick Ganhiwa and I'm ",
        "about.bio": "Engineering and Developing software that will enable an individual's daily activities seem flawless is my objective. I have good communication skills with teams, experience in all phases of product development from planning, requirement gathering, to implementing, and testing.",
        "about.cv": "Download CV",

        // Skills
        "skills.title": "Skills",
        "skills.frontend": "Frontend Developer",
        "skills.frontend.exp": "3+ years work Experience",
        "skills.backend": "Backend Developer",
        "skills.backend.exp": "3+ years work Experience",

        // Qualification
        "qual.title": "Qualification",
        "qual.education": "Education",
        "qual.work": "Work",

        // Projects
        "projects.title": "My Projects",
        "projects.jokes.title": "Computer Science Jokes",
        "projects.jokes.desc": "Generates Computer Science Jokes from an API.",
        "projects.quotes.title": "Inspiring Quotes",
        "projects.quotes.desc": "Generates Inspiring Quotes from an API. Just click the grey heart to save quote.",
        "projects.cv.title": "My Own CV Web View",
        "projects.cv.desc": "HTML and CSS representation of my CV built from scratch.",
        "projects.demo": "Demo",

        // Hobbies
        "hobbies.title": "My Hobbies",

        // Blog
        "blog.title": "Writing",
        "blog.subtitle": "Thoughts on software development, engineering practices, and things I've learned along the way.",
        "blog.tag.soon": "Coming Soon",
        "blog.post1.title": "Building Scalable .NET Applications",
        "blog.post1.excerpt": "Lessons learned from building enterprise C# applications — architecture patterns, testing strategies, and performance tips.",
        "blog.post2.title": "From Java to C# — A Developer's Journey",
        "blog.post2.excerpt": "Comparing two ecosystems after years of professional experience in both — what transfers, what doesn't, and what surprised me.",
        "blog.post3.title": "Getting Started with Vue 3 Composition API",
        "blog.post3.excerpt": "A practical guide to the Composition API — when to use it, how it compares to the Options API, and real-world patterns.",

        // Contact
        "contact.title": "Contact Me",
        "contact.subtitle": "Have a project in mind or just want to say hello? I'd love to hear from you.",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.location.value": "Cape Town, Western Cape",
        "contact.form.heading": "Send me a message",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.subject": "Subject",
        "contact.form.message": "Message",
        "contact.form.send": "Send Message",
        "contact.form.success": "Message sent successfully!",
        "contact.form.error": "Something went wrong. Please try again.",

        // Footer
        "footer.created": "Created By",
        "footer.rights": "All rights reserved."
    },
    sn: {
        // Nav
        "nav.home": "Kumba",
        "nav.about": "Pamusoro Pangu",
        "nav.skills": "Zvandogona",
        "nav.qualification": "Dzidzo",
        "nav.projects": "Maprojekiti",
        "nav.hobbies": "Zvandinofarira",
        "nav.writing": "Zvinyorwa",
        "nav.contact": "Ndibatei",

        // Home
        "home.greeting": "Mhoro, zita rangu ndinonzi",
        "home.tagline": "Uye ndiri ",
        "home.cta": "Ndibatei",

        // About
        "about.title": "Pamusoro Pangu",
        "about.intro": "Ndini Patrick Ganhiwa uye ndiri ",
        "about.bio": "Kugadzira nekuvandudza masoftware anoita kuti zviito zvezuva nezuva zvemunhu zvionekwe sezvisina kuoma ndiro chinangwa changu. Ndine unyanzvi hwekutaurirana nemapoka, ruzivo mumatanho ese ekugadzira zvigadzirwa kubva mukuronga, kuunganidza zvinodiwa, kuzvigadzira, nekuedza.",
        "about.cv": "Dhaunilodha CV",

        // Skills
        "skills.title": "Zvandogona",
        "skills.frontend": "Mugadziri wePamberi",
        "skills.frontend.exp": "3+ makore eruzivo rwebasa",
        "skills.backend": "Mugadziri weKumashure",
        "skills.backend.exp": "3+ makore eruzivo rwebasa",

        // Qualification
        "qual.title": "Dzidzo",
        "qual.education": "Dzidzo",
        "qual.work": "Basa",

        // Projects
        "projects.title": "Maprojekiti Angu",
        "projects.jokes.title": "Majokes eComputer Science",
        "projects.jokes.desc": "Inogadzira majokes eComputer Science kubva kuAPI.",
        "projects.quotes.title": "Mazwi Anokurudzira",
        "projects.quotes.desc": "Inogadzira mazwi anokurudzira kubva kuAPI. Dzvanya moyo mutema kuchengetedza.",
        "projects.cv.title": "CV Yangu paWeb",
        "projects.cv.desc": "HTML neCCS zvinoratidza CV yangu zvakagadzirwa kubva pasina.",
        "projects.demo": "Ratidza",

        // Hobbies
        "hobbies.title": "Zvandinofarira",

        // Blog
        "blog.title": "Zvinyorwa",
        "blog.subtitle": "Pfungwa pamusoro pekugadzira masoftware, maitiro ehushandisi, nezvinhu zvandakadzidza munzira.",
        "blog.tag.soon": "Zvinouya",
        "blog.post1.title": "Kugadzira .NET Applications Dzinokura",
        "blog.post1.excerpt": "Zvidzidzo kubva mukugadzira C# applications dzekukampani — maitiro ekuvaka, nzira dzekuedza, uye mazano ekushanda.",
        "blog.post2.title": "Kubva kuJava kuenda kuC# — Rwendo rweMugadziri",
        "blog.post2.excerpt": "Kuenzanisa masistemu maviri mushure memakore eruzivo rwemabasa ese — chii chinoenderera mberi, chii chisingaendereri mberi, uye chii chakanditadza.",
        "blog.post3.title": "Kutanga neVue 3 Composition API",
        "blog.post3.excerpt": "Gwara rezvechokwadi reComposition API — rinzi rinoshandiswa, rinoenzaniswa sei neOptions API, uye maitiro echokwadi.",

        // Contact
        "contact.title": "Ndibatei",
        "contact.subtitle": "Mune projekiti mupfungwa kana kungoda kutaura? Ndinoda kunzwa kubva kwamuri.",
        "contact.email": "Email",
        "contact.location": "Nzvimbo",
        "contact.location.value": "Cape Town, Western Cape",
        "contact.form.heading": "Nditumirei mashoko",
        "contact.form.name": "Zita",
        "contact.form.email": "Email",
        "contact.form.subject": "Musoro",
        "contact.form.message": "Mashoko",
        "contact.form.send": "Tumira Mashoko",
        "contact.form.success": "Mashoko atumirwa zvakanaka!",
        "contact.form.error": "Chimwe chinhu chakanganisika. Edzai zvakare.",

        // Footer
        "footer.created": "Yakagadzirwa na",
        "footer.rights": "Kodzero dzese dzakachengetedzwa."
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.setAttribute('placeholder', t[key]);
        }
    });

    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'SN' : 'EN';
        langToggle.setAttribute('aria-label',
            lang === 'en' ? 'Switch to Shona' : 'Switch to English'
        );
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('lang') || 'en';
    if (savedLang !== 'en') {
        setLanguage(savedLang);
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const current = document.documentElement.getAttribute('lang') || 'en';
            setLanguage(current === 'en' ? 'sn' : 'en');
        });
    }
});
