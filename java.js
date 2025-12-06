const mediaList = [
    {
        type: "image",
        src: "img/banner-1-en.jpg",
        title: "CHANGAN, Smart Your Future",
        btn: "Discover more",
        link: "page1.html"
    },
    {
        type: "video",
        src: "video/banner02_v1.mp4",
        title: "Emotional Intelligence, Motion in Delight",
        btn: "Discover More",
        link: "page2.html"
    },
    {
        type: "video",
        src: "video/banner02_v1.mp4",
        p: "Provide Users with Automotive Products",
        title: "That are Simple, Friendly, and Embrace Digital Intelligence",
        btn: "Discover more",
        link: "page3.html"
    },
    {
        type: "video",
        src: "video/banner03_v1.mp4",
        title: "Build a World-class Auto Brand and Explore More Enticing Green Mobility",
        btn: "Discover more",
        link: "page4.html"
    },
    {
        type: "video",
        src: "video/deepal_kv_video.mp4",
        p: "Building a Fortress of Life with Safety Wisdom",
        title: "Enjoy a Wonderful Time and Drive with Quality",
        btn: "Dicover more",
        link: "page5.html"
    },
    {
        type: "video",
        src: "video/kaicheng_home_kv_v2.mp4",
        title: "Establish a World-class Commercial Vehicle Brand",
        btn: "Discover More",
        link: "page6.html"
    }
];

function breakText(text, maxCharsPerLine) {
    let result = "";
    let currentLineLength = 0;

    for (let i = 0; i < text.length; i++) {
        result += text[i];
        currentLineLength++;

        if (currentLineLength >= maxCharsPerLine && text[i] === " ") {
            result += "<br>";
            currentLineLength = 0;
        }
    }

    return result;
}



let currentIndex = 0;
const mediaContainer = document.getElementById("mediaContainer");
const progressBar = document.getElementById("videoProgress");
const progressContainer = document.getElementById("videoProgressContainer");

const duration = 8000;
const StartTime = Date.now();

function loadMedia(index) {
    const item = mediaList[index];

    mediaContainer.innerHTML = "";
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";
    progressContainer.style.background = "gray";

    let mediaElement;

    if (item.type === "image") {
        mediaElement = document.createElement("img");
        mediaElement.src = item.src;
        mediaContainer.appendChild(mediaElement);
    }

    if (item.type === "video") {
        mediaElement = document.createElement("video");
        mediaElement.src = item.src;
        mediaElement.autoplay = true;
        mediaElement.muted = true;
        mediaElement.controls = false;
        mediaContainer.appendChild(mediaElement);
    }

    mediaElement.addEventListener("click", () => {
        window.location.href = item.link;
    });

    
    const captionBox = document.createElement("div");
    captionBox.className = "caption-box";
    captionBox.innerHTML = `
        ${item.p ? `<p>${item.p}</p>` : ""}
       <h3>${breakText(item.title, 25)}</h3>
        <button onclick="window.location.href='${item.link}'">${item.btn}</button>
    `;
    mediaContainer.appendChild(captionBox);

    let maxLength = Math.max(...mediaList.map(item => item.btn.length));
    let allButtons = document.querySelectorAll('.caption-box button');
    allButtons.forEach(btn => btn.style.width = (maxLength * 12) + 'px');

    setTimeout(() => {
        progressBar.style.transition = "width 8s linear";
        progressBar.style.width = "100%";
    }, 50);

    setTimeout(() => {
        progressContainer.style.background = "gray";
        nextSlide();
    }, duration);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % mediaList.length;
    loadMedia(currentIndex);
}

loadMedia(currentIndex);



