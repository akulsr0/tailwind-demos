function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getChats() {
  return [
    {
      userImg: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
      userName: "John Doe",
      lastMessage: "Let's catchup in the evening",
      lastMessageSentBy: "John Doe",
      time: "04:42 PM",
    },
    {
      userImg: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
      userName: "Daniel",
      lastMessage: "Yeah bro, tailwind is awesome!",
      lastMessageSentBy: "self",
      isSeen: false,
      time: "04:19 PM",
    },
    {
      userImg: `https://randomuser.me/api/portraits/women/${getRandomNumber()}.jpg`,
      userName: "Jessica",
      lastMessage: "How are you doing?",
      lastMessageSentBy: "self",
      isSeen: false,
      time: "04:19 PM",
    },
    {
      userImg: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
      userName: "Marc Phillips",
      lastMessage: "Hey Marc, call me when free.",
      lastMessageSentBy: "self",
      isSeen: true,
      time: "02:05 PM",
    },
    {
      userImg: `https://randomuser.me/api/portraits/women/${getRandomNumber()}.jpg`,
      userName: "Stephanie",
      lastMessage: "Bye!",
      lastMessageSentBy: "Stephanie",
      time: "Yesterday",
    },
    {
      userImg: `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`,
      userName: "Dustin",
      lastMessage: "Okay",
      lastMessageSentBy: "self",
      isSeen: true,
      time: "Yesterday",
    },
  ];
}

function getChatMarkup(chat) {
  return `<!-- Chat Message -->
    <div class="p-2 flex flex-row border-b border-gray-700 cursor-pointer">
      <!-- Photo -->
      <div>
        <img
          src="${chat.userImg}"
          class="h-12 rounded-full"
          alt="userimg"
        />
      </div>
      <!-- User & Message -->
      <div class="flex-1 flex flex-col px-2">
        <!-- User -->
        <div class="flex flex-row items-center">
          <span class="flex-1 font-bold text-white">${chat.userName}</span>
          <span class="text-xs text-gray-400">${chat.time}</span>
        </div>
        <!-- Message & Time -->
        <div class="flex flex-row items-center">
          ${
            chat.lastMessageSentBy === "self"
              ? chat.isSeen
                ? '<i data-feather="check-circle" class="w-3 text-gray-400 mr-1"></i>'
                : '<i data-feather="check" class="w-3 text-gray-400 mr-1"></i>'
              : ""
          }
          <span class="text-sm font-light flex-1 text-gray-200 overflow-hidden overflow-ellipsis">${
            chat.lastMessage
          }</span>
        </div>
      </div>
    </div>`;
}

function addChatMessages() {
  const chatMessages = document.getElementById("chat-messages");
  const chats = getChats();
  const chatMessagesMarkup = chats.map((chat) => getChatMarkup(chat)).join("");
  chatMessages.innerHTML = chatMessages.innerHTML + chatMessagesMarkup;
}

function main() {
  addChatMessages();
  feather.replace();
}

main();
