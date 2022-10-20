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

let timer = setInterval(function () {
    const now = new Date().getTime()
    let itemIndex = 0

    timeArray.forEach((time, item) => {
        if (now >= time) {
            timelineItems[item].style.textDecoration = "line-through"
            itemIndex = item
        }
    })

    if (now > registrations && now < conclude) {
        timelineItems[itemIndex + 1].style.color = "var(--yellow)"
    }

    if (now >= conclude) {
        clearInterval(timer);

        const topTeams = document.getElementById("topTeams")

        topTeams.children[1].classList.add("invisible")
        topTeams.children[2].classList.remove("invisible")
    }
}, 1000)