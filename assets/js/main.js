/*=============== HOME SPLIT TEXT ===============*/
const { animate, splitText, stagger } = anime

const { chars: chars1 } = splitText('.home_profession1', { chars: true})
const { chars: chars2 } = splitText('.home_profession2', { chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects_swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }

});


/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    tabContents.forEach(content => content.classList.remove('work-active'))
    tabs.forEach(t => t.classList.remove('work-active'))

    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})

/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services_button')

servicesButtons.forEach(button => {
    const heightInfo = document.querySelector('.services_info')
    heightInfo.style.height = heightInfo.scrollHeight + 'px'

    button.addEventListener('click', () => {
        const servicesCards = document.querySelectorAll('.services_card'),
              currentCard = button.parentNode,
              currentInfo = currentCard.querySelector('.services_info')
              isCardOpen = currentCard.classList.contains('services-open')

        servicesCards.forEach(card => {
            card.classList.replace('services-open', 'services-close')

            const info = card.querySelector('.services_info')
                  info.style.height = '0'
        })

        if(!isCardOpen){
            currentCard.classList.replace('services-close', 'services-open')
            currentInfo.style.height = currentInfo.scrollHeight + 'px'
        }
    })
})


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear()

textYear.textContent = currentYear


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id')

const scrollActive = () => {
    const scrollY = window.scrollY

    sections.forEach(section => {
        const id = section.id,
              top = section.offsetTop - 50,
              height = section.offsetHeight,
              link = document.querySelector('.nav_menu a[href*=' + id + ']')
        if(!link) return

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
