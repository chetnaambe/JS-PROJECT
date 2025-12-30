const reels = [
  {
    username: "daily_vibes",
    video: "six.mp4",
    likeCount: 3240,
    isLiked: true,
    commentCount: 180,
    caption: "Small moments, big memories.",
    userProfile: "https://randomuser.me/api/portraits/women/61.jpg",
    shareCount: 95,
    isFollwed: false
  },
  {
    username: "creative_soul",
    video: "four.mp4",
    likeCount: 7860,
    isLiked: true,
    commentCount: 540,
    caption: "Creativity is intelligence having fun.",
    userProfile: "https://randomuser.me/api/portraits/men/62.jpg",
    shareCount: 320,
    isFollwed: true
  },
  {
    username: "travel_diary",
    video: "third.mp4",
    likeCount: 9120,
    isLiked: true,
    commentCount: 680,
    caption: "Wander often, wonder always.",
    userProfile: "https://randomuser.me/api/portraits/women/63.jpg",
    shareCount: 470,
    isFollwed: true
  },
  {
    username: "fit_journey",
    video: "second.mp4",
    likeCount: 2580,
    isLiked: false,
    commentCount: 140,
    caption: "Progress over perfection.",
    userProfile: "https://randomuser.me/api/portraits/men/64.jpg",
    shareCount: 80,
    isFollwed: false
  },
  {
    username: "food_explorer",
    video: "five.mp4",
    likeCount: 6640,
    isLiked: true,
    commentCount: 510,
    caption: "Good food, good mood.",
    userProfile: "https://randomuser.me/api/portraits/women/65.jpg",
    shareCount: 290,
    isFollwed: true
  },
  {
    username: "tech_today",
    video: "firsts.mp4",
    likeCount: 4380,
    isLiked: true,
    commentCount: 260,
    caption: "Learning something new every day.",
    userProfile: "https://randomuser.me/api/portraits/men/66.jpg",
    shareCount: 150,
    isFollwed: false
  },
  {
    username: "artistic_flow",
    video: "seven.mp4",
    likeCount: 1870,
    isLiked: true,
    commentCount: 95,
    caption: "Art speaks where words fail.",
    userProfile: "https://randomuser.me/api/portraits/women/67.jpg",
    shareCount: 60,
    isFollwed: false
  },
  {
    username: "music_moments",
    video: "second.mp4",
    likeCount: 5290,
    isLiked: false,
    commentCount: 330,
    caption: "Life sounds better with music.",
    userProfile: "https://randomuser.me/api/portraits/men/68.jpg",
    shareCount: 210,
    isFollwed: true
  },
  {
    username: "nature_daily",
    video: "nine.mp4",
    likeCount: 3410,
    isLiked: true,
    commentCount: 175,
    caption: "Nature never goes out of style.",
    userProfile: "https://randomuser.me/api/portraits/women/69.jpg",
    shareCount: 100,
    isFollwed: false
  },
  {
    username: "mindset_shift",
    video: "ten.mp4",
    likeCount: 9850,
    isLiked: true,
    commentCount: 820,
    caption: "Change your mindset, change your life.",
    userProfile: "https://randomuser.me/api/portraits/men/70.jpg",
    shareCount: 560,
    isFollwed: true
  }
];


var sum = ``

reels.forEach(function(elem){
sum = sum + `<div class="reel">
                   <video autoplay loop muted controls src="${elem.video}"></video>
                                <div class="bottom">
                                      <div class="user">
                                        <img src="${elem.userProfile}" alt="" srcset="">
                                        <h4>${elem.username}</h4>
                                        <button>${elem.isFollwed? `unfollow`: `Follow`}</button>
                                      </div>
                                      <h3>${elem.caption}</h3>
                                    </div>
                            <div class="right">
                                <div class="like">
                                    <h4 class="like-icon icon"> ${elem.isLiked? `<i class="love ri-heart-fill"></i>`:`<i class="ri-heart-3-line"></i>`}</h4>
                                    <h6>${elem.likeCount}</h6>
                                </div>
                                  <div class="comment">
                                    <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                                    <h6>${elem.commentCount}</h6>
                                </div>
                                  <div class="share">
                                    <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                                    <h6>${elem.shareCount}</h6>
                                </div>
                         <div class="menu">
                                    <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                                   
                                </div>
                            </div> 
                        </div>`
                     
})





var allReels = document.querySelector(`.all-reels`)

allReels.innerHTML = sum

