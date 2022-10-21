// ===============================
// IEEEXtreme Competition Timeline
// ===============================
const registrations = new Date("Oct 22, 2022 05:00:00").getTime()
const commence = new Date("Oct 22, 2022 05:30:00").getTime()
const morningRefreshments = new Date("Oct 22, 2022 08:00:00").getTime()
const resume1 = new Date("Oct 22, 2022 09:00:00").getTime()
const afternoonRefreshments = new Date("Oct 22, 2022 13:00:00").getTime()
const resume2 = new Date("Oct 22, 2022 14:00:00").getTime()
const eveningRefreshments = new Date("Oct 22, 2022 17:00:00").getTime()
const resume3 = new Date("Oct 22, 2022 18:00:00").getTime()
const nightRefreshments = new Date("Oct 22, 2022 22:00:00").getTime()
const resume4 = new Date("Oct 22, 2022 23:00:00").getTime()
const entertainment = new Date("Oct 23, 2022 01:00:00").getTime()
const resume5 = new Date("Oct 23, 2022 02:00:00").getTime()
const winnerAnnounce = new Date("Oct 23, 2022 06:00:00").getTime()
const conclude = new Date("Oct 23, 2022 07:00:00").getTime()

const eventEnd = new Date("Oct 23, 2022 05:30:00").getTime()

const timeArray = [
    registrations,
    commence,
    morningRefreshments,
    resume1,
    afternoonRefreshments,
    resume2,
    eveningRefreshments,
    resume3,
    nightRefreshments,
    resume4,
    entertainment,
    resume5,
    winnerAnnounce,
    conclude
]

const timelineItems = document.querySelectorAll(".timeline-content h4")
const counter = document.querySelector(".counter")

let timer = setInterval(function () {
    const now = new Date().getTime()

    // ===============
    // CountDown Timer
    // ===============
    // gap for competition
    const distance = eventEnd - now;

    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor((distance / (1000 * 60 * 60)));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Displaying the countdown timer Once commenced
    if (now >= commence && now < eventEnd) {
        counter.classList.remove("d-none")
        // Setting up the values to the counter
        counter.children[0].children[0].children[1].children[0].textContent = hours + ":"
        counter.children[0].children[0].children[1].children[1].textContent = minutes + ":"
        counter.children[0].children[0].children[1].children[2].textContent = seconds
    } else if (now >= eventEnd) {
        counter.classList.remove("d-none")
        // Resetting Counter values to be 0
        counter.children[0].children[0].children[1].children[0].textContent = "00:"
        counter.children[0].children[0].children[1].children[1].textContent = "00:"
        counter.children[0].children[0].children[1].children[2].textContent = "00"
    }

    // ==============
    // Timeline Items
    // ==============
    // Go through each event time
    timeArray.forEach((time, item) => {
        if (now >= time) {
            // Change color of currently occuring event
            timelineItems[item].style.color = "var(--yellow)"

            // Striking through the previous event if any
            if (now >= commence && item !== 0) {
                timelineItems[item - 1].style.color = "var(--blue)"
                timelineItems[item - 1].style.textDecoration = "line-through"
            }
        }
    })

    // Stoping the timer at event end
    if (now >= conclude) {
        clearInterval(timer);
        timelineItems[timelineItems.length - 1].style.color = "var(--blue)"
        timelineItems[timelineItems.length - 1].style.textDecoration = "line-through"

        // Displaying the top teams section at end of event
        const topTeams = document.getElementById("topTeams")

        topTeams.children[1].classList.add("invisible")
        topTeams.children[2].classList.remove("invisible")
        counter.classList.add("d-none")
    }
}, 1000)