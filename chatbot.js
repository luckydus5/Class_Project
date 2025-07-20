class AnonymousChatbot {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.messages = [];
        this.isTyping = false;
        this.isDragging = false;
        this.currentSize = 'medium';
        
        // Drag functionality variables
        this.dragOffset = { x: 0, y: 0 };
        
        // Enhanced responses - more answers, shorter, uplifting and comforting
        this.responses = {
            greetings: [
                "Hello! I'm here to listen and support you. This is a safe and anonymous space. How are you feeling today?",
                "Hi there! Welcome to our anonymous support chat. I'm here to help with any concerns you might have. What's on your mind?",
                "Hello friend! I'm glad you reached out. This conversation is completely private. How can I support you today?",
                "Welcome home! I'm your anonymous companion. Whether you're dealing with stress, worry, or just need someone to talk to, I'm here. How are you doing?",
                "Hi! Thanks for reaching out. This is a judgment-free zone where you can share anything. How are things going for you?",
                "Hello! I'm here to chat and listen. You're in a safe space. What would you like to talk about?",
                "Hey there! I'm your anonymous friend. Feel free to share whatever is on your mind. How can I help today?",
                "Hi! I'm really glad you're here. This is your space to talk freely. What's been going on with you lately?",
                "Muraho! Welcome to this peaceful space. I'm here for you. How's your heart today?",
                "Bonjour! You've found a safe harbor here. What's weighing on your mind?"
            ],
            anger: [
                "I hear you're feeling angry. Let's pause and breathe together. In for 4, hold for 4, out for 4. What triggered this feeling?",
                "Anger is a valid emotion. It tells us something needs attention. Take a deep breath. What's really bothering you underneath?",
                "You're safe to feel angry here. Let's find a healthy way to express it. What situation made you feel this way?",
                "I understand you're frustrated. Anger often masks hurt or fear. What's really going on for you?",
                "Feeling angry is human. You're not bad for feeling this way. What's been building up inside you?",
                "Let's cool down together. Count backwards from 10 with me: 10, 9, 8... What's making you feel so heated?",
                "Anger shows you care deeply about something. That's okay. What boundary feels like it's been crossed?",
                "I hear your frustration. Let's channel this energy constructively. What would help you feel heard right now?",
                "You're allowed to be angry. Let's work through this together. What's the real issue here?",
                "Anger is energy that needs direction. Take a moment to breathe. What needs to change in your situation?",
                "I see you're upset. Your feelings are valid. What would help you feel more in control right now?",
                "Let's pause and reset. Anger clouds our thinking. What's the core problem you're facing?"
            ],
            anxiety: [
                "I hear you. Breathe with me: in for 4, hold for 4, out for 4. You're safe here. What's worrying you?",
                "Anxiety is tough, but you're tougher. Many students feel this way. What's triggering these feelings?",
                "You're not alone in this. Take a deep breath. What's making you anxious right now?",
                "I understand. Your feelings are valid. What situation makes you most nervous?",
                "Breathe, friend. You're stronger than your worries. What's been on your mind?",
                "Anxiety means you care deeply about something. That's human. What's concerning you?",
                "You're brave for sharing this. Take it one breath at a time. What's stressing you?",
                "I'm here with you. You're safe. What specific thing is making you worry?",
                "Your feelings matter. Breathe slowly. What's been keeping you up at night?",
                "You've got this. One step at a time. What's making your mind race?",
                "I hear your heart. You're not alone. What's making you feel overwhelmed?",
                "Pause, breathe, you're okay. What's been weighing heavily on you?"
            ],
            sadness: [
                "I'm sorry you're hurting. Your feelings are valid. What's been making your heart heavy?",
                "It's okay to feel sad. You're human. What's been bringing you down?",
                "I hear your pain. You're not alone. What's been the hardest part?",
                "Sadness shows you have a caring heart. What's been troubling you?",
                "I'm here for you. It's okay to not be okay. What's been hurting?",
                "Your tears are valid. What's been making you feel this way?",
                "Sending you comfort. You matter. What's been on your heart?",
                "I see you struggling. You're brave. What's been most difficult?",
                "It's okay to feel low sometimes. What's been weighing you down?",
                "You're allowed to be sad. What's been breaking your heart?",
                "I'm here to listen. Your pain matters. What's been hardest to bear?",
                "Gentle hugs to you. What's been making you feel empty?"
            ],
            stress: [
                "School stress is real. You're doing your best. What's putting the most pressure on you?",
                "Academic pressure is tough. Your worth isn't your grades. What's stressing you most?",
                "I understand the pressure. Take a breath. What's overwhelming you?",
                "Study stress affects everyone. What's your biggest challenge right now?",
                "You're working hard. That matters. What's been most stressful?",
                "Academic life is demanding. You're managing. What needs attention?",
                "I hear you about the pressure. What's making things feel too much?",
                "School can be overwhelming. You're capable. What's your main concern?",
                "Study stress is exhausting. What's been draining your energy?",
                "Academic pressure is heavy. What aspect feels most difficult?",
                "I understand the workload stress. What's been your biggest hurdle?",
                "School demands a lot. You're strong. What's been most challenging?"
            ],
            depression: [
                "I'm grateful you shared this. You're not alone. How long have you felt this way?",
                "Thank you for trusting me. These feelings are real. What's been hardest?",
                "You're brave for reaching out. Many students struggle too. What's going on?",
                "These feelings are difficult. You matter. What's been most challenging?",
                "I hear you're struggling. You're not alone. How are you coping?",
                "You're important. These feelings are temporary. What's been affecting you?",
                "I understand you're hurting. You're valued. What would help right now?",
                "This sounds really hard. You're not alone. What's been on your mind?",
                "I'm glad you felt safe sharing. You matter. What's been most difficult?",
                "Thank you for trusting me. Many feel this way. What's been affecting you most?",
                "You're not broken. You're human. What's been weighing on your spirit?",
                "I see your struggle. You're valuable. What's been hardest to handle?"
            ],
            loneliness: [
                "Feeling lonely is hard. You're not alone here. What's been making you feel isolated?",
                "I hear you. Loneliness hurts. You're connected here. What's been hardest?",
                "You're not alone in feeling alone. What's been making you feel disconnected?",
                "Loneliness is painful. You matter. What's been making you feel isolated?",
                "I understand feeling alone. You're seen here. What's been most difficult?",
                "You're not the only one feeling this. What's been making you feel lonely?",
                "Feeling isolated is tough. You're valued here. What's been hardest?",
                "I hear your loneliness. You're important. What would help you feel connected?",
                "You're not alone anymore. I'm here. What's been weighing on you?",
                "Loneliness is real pain. You're worthy of connection. What's been difficult?",
                "I see you. You matter. What's been making you feel most alone?",
                "You belong somewhere. What's been making you feel disconnected?"
            ],
            happiness: [
                "That's wonderful! I love hearing good news. What's been making you happy?",
                "Your joy is contagious! What's been bringing you the most happiness?",
                "I'm so glad you're feeling good! What's been the highlight recently?",
                "That's amazing! Happiness looks good on you. What's been going well?",
                "I love this energy! What's been putting a smile on your face?",
                "Your happiness matters! What's been the best part of your day?",
                "That's beautiful! What's been filling your heart with joy?",
                "I'm smiling with you! What's been making you feel so positive?",
                "This is lovely to hear! What's been bringing you the most peace?",
                "Your joy is precious! What's been the source of your happiness?",
                "That's fantastic! What's been making your heart sing?",
                "I love hearing this! What's been brightening your days?"
            ],
            comfort: [
                "You're safe here. Take all the time you need. What's on your heart?",
                "This is your safe space. You're valued. What would help you feel better?",
                "I'm here for you. You matter deeply. What's been troubling you?",
                "You're not alone. This is your refuge. What's weighing on you?",
                "Feel at home here. You're cherished. What's been difficult?",
                "You're wrapped in care here. What's been on your mind?",
                "This is your sanctuary. You're loved. What's been challenging?",
                "You belong here. You're important. What's been hurting?",
                "Consider this your peaceful place. What's been bothering you?",
                "You're held with kindness here. What's been heavy on your heart?",
                "This is your comfort zone. You're precious. What's troubling you?",
                "You're embraced with warmth here. What's been weighing you down?"
            ],
            motivation: [
                "You're stronger than you think. Every challenge makes you more resilient. Keep going!",
                "You've survived 100% of your worst days. That's an amazing track record!",
                "Small steps still move you forward. You're doing better than you think.",
                "You matter more than you know. Your presence makes a difference.",
                "Tough times don't last, but tough people like you do. You've got this!",
                "You're writing your story. Every chapter, even difficult ones, matters.",
                "You're more capable than your challenges. Keep believing in yourself.",
                "Progress isn't always visible, but you're growing every day.",
                "You're exactly where you need to be. Trust your journey.",
                "Your potential is limitless. Don't let temporary feelings define you.",
                "You're a warrior, not a worrier. You've overcome before, you will again.",
                "Every sunset gives way to sunrise. Your difficult times will pass too."
            ],
            selfcare: [
                "What brings you joy? Music, books, walks, food? Do something that feeds your soul today.",
                "Your wellbeing matters. Have you eaten today? Stayed hydrated? Rested enough?",
                "Self-care isn't selfish. What's one small thing you can do for yourself right now?",
                "You deserve kindness, especially from yourself. How can you be gentle with yourself today?",
                "What makes you feel peaceful? Nature, music, art, prayer? Make time for it.",
                "Your body and mind need care. What would nurture you right now?",
                "You're important. When did you last do something just because it made you happy?",
                "Treat yourself like you would a dear friend. What would you tell them to do?",
                "What fills your cup? Reading, cooking, dancing, singing? Do more of that.",
                "You matter. What's one way you can show yourself love today?",
                "Self-care is health care. What would make you feel better right now?",
                "You deserve good things. What small pleasure can you give yourself today?"
            ],
            connection: [
                "Who makes you feel loved? Reach out to them when you can. You deserve connection.",
                "You're not meant to carry everything alone. Who can you lean on?",
                "Your family and friends care about you. When did you last connect with them?",
                "You belong to a community, even when it doesn't feel like it. Who values you?",
                "Someone is thinking about you right now. You matter to people.",
                "Your presence is a gift to others. Who appreciates having you in their life?",
                "You're loved more than you know. Who can you share your feelings with?",
                "Connection heals. Who makes you feel understood and accepted?",
                "You're part of something bigger. Who reminds you that you belong?",
                "Your story matters to others. Who listens when you need to talk?",
                "You're not invisible. Who sees and values the real you?",
                "Love surrounds you, even when you can't feel it. Who cares about you?"
            ],
            hope: [
                "This feeling is temporary. You've gotten through hard times before, you will again.",
                "Tomorrow offers new possibilities. Your story isn't over yet.",
                "You've survived every difficult day so far. That shows incredible strength.",
                "Things can change in an instant. Hold onto hope, even if it's tiny.",
                "You're stronger than this moment. Better days are coming.",
                "This too shall pass. You've weathered storms before.",
                "Your future self will thank you for not giving up today.",
                "Every difficult season eventually gives way to growth and renewal.",
                "You're more resilient than you realize. Keep going, one moment at a time.",
                "Hope is always present, even when hidden. It's there for you.",
                "Your life has value and purpose, even when it's hard to see.",
                "Healing happens gradually, then suddenly. Trust the process."
            ],
            academic: [
                "Academic challenges are tough but temporary. You're more than your grades. What's stressing you?",
                "School pressure is real. You're doing your best. What's the biggest challenge?",
                "Your education matters, but so does your wellbeing. What's overwhelming you?",
                "Academic struggles don't define you. You're capable. What needs attention?",
                "School stress affects everyone. You're not alone. What's most difficult?",
                "Your worth isn't measured by grades. You matter. What's concerning you?",
                "Academic pressure can be crushing. Take a breath. What's hardest right now?",
                "School is challenging for everyone. You're managing. What's stressing you most?",
                "Your effort matters more than perfection. What's been your biggest worry?",
                "Academic life is demanding. You're strong. What aspect is hardest?",
                "School stress is exhausting. You're doing well. What's overwhelming you?",
                "Your academic journey is unique. What's been most challenging lately?"
            ],
            family: [
                "Family relationships are complex. You're doing your best. What's been difficult?",
                "Family expectations can be heavy. You matter too. What's challenging you?",
                "Family dynamics affect us deeply. Your feelings are valid. What's hardest?",
                "Balancing family expectations is tough. You're important. What's stressing you?",
                "Family pressure can be overwhelming. You're enough. What's concerning you?",
                "Family relationships take work. You're valuable. What's been difficult?",
                "Family expectations can feel heavy. You're worthy. What's weighing on you?",
                "Family dynamics can be stressful. You matter. What's been hardest?",
                "Pleasing family while being yourself is hard. What's challenging you?",
                "Family relationships are complicated. You're doing well. What's difficult?",
                "Family pressure affects everyone. You're important. What's stressing you?",
                "Family expectations can be tough. You're enough as you are. What's hard?"
            ],
            financial: [
                "Money stress is real and valid. You're not alone in this. What's most concerning?",
                "Financial pressure affects many students. You're managing. What's hardest?",
                "Money worries are exhausting. You're doing your best. What's stressing you?",
                "Financial challenges are temporary. You're resourceful. What's most difficult?",
                "Money stress affects wellbeing. You matter more than money. What's concerning you?",
                "Financial pressure is real. You're capable. What's been most stressful?",
                "Money worries keep many awake. You're not alone. What's hardest right now?",
                "Financial stress affects students everywhere. You're managing. What's difficult?",
                "Money concerns are valid. You're strong. What's been most challenging?",
                "Financial pressure can be overwhelming. You're resilient. What's concerning you?",
                "Money stress is exhausting. You're doing well. What's most difficult?",
                "Financial challenges test us. You're capable. What's been hardest?"
            ],
            future: [
                "The future feels scary because you care. That's beautiful. What worries you most?",
                "Future uncertainty is normal. You'll figure it out. What's most concerning?",
                "Not knowing what's next is human. You're adaptable. What's worrying you?",
                "Future anxiety affects everyone. You're capable. What's most stressful?",
                "The unknown future can be overwhelming. You're resilient. What concerns you?",
                "Future planning is hard when present is difficult. What's worrying you most?",
                "Uncertainty about tomorrow is natural. You're strong. What's most concerning?",
                "Future fears are common. You'll navigate whatever comes. What worries you?",
                "Not having all the answers is okay. You're wise. What's most stressful?",
                "Future anxiety shows you care about your life. What's concerning you?",
                "The unknown can be scary. You're braver than you think. What worries you?",
                "Future uncertainty is part of life. You're capable. What's most difficult?"
            ],
            homesickness: [
                "Missing home shows how much you love your family. What do you miss most?",
                "Homesickness means you have beautiful connections. What's hardest about being away?",
                "Missing home is natural when you're away. What do you long for most?",
                "Home is where the heart is, and yours is full of love. What do you miss?",
                "Feeling homesick shows your deep family bonds. What's been hardest?",
                "Missing family means you're loved deeply. What do you miss most about home?",
                "Homesickness is love across distance. What's been most difficult?",
                "Missing home comforts is so normal. What do you long for most?",
                "Home memories are precious when you're away. What do you miss?",
                "Homesickness shows your beautiful connections. What's been hardest?",
                "Missing family is love in action. What do you miss most about home?",
                "Home is always in your heart. What aspects do you miss most?"
            ],
            positive: [
                "I love hearing good news! Your happiness is contagious. What's going well?",
                "That's wonderful! Your joy brightens this space. What's been amazing?",
                "This is beautiful to hear! Share more of what's making you happy!",
                "Your positivity is a gift! What's been the best part recently?",
                "I'm smiling with you! What's been bringing you the most joy?",
                "That's fantastic news! Your happiness matters. What's been wonderful?",
                "Your good mood is infectious! What's been going so well?",
                "I love this energy! Keep sharing what's making you feel good!",
                "That's amazing! Your joy is precious. What's been the highlight?",
                "This makes my day! What's been filling your heart with happiness?",
                "Your positivity lights up this space! What's been going beautifully?",
                "I'm so happy for you! What's been the source of your joy?"
            ],
            general: [
                "I'm here for you. Your feelings matter. What's on your heart today?",
                "Welcome to this safe space. You're valued here. What's on your mind?",
                "I'm listening with my whole heart. What would you like to share?",
                "You're not alone. This is your space to be real. What's going on?",
                "I'm here to support you. Your story matters. What's happening?",
                "You matter deeply. What's been weighing on your heart lately?",
                "This is your safe harbor. You're welcomed here. What's on your mind?",
                "I'm honored you're here. Your feelings are important. What's up?",
                "You're safe to share anything here. What's been on your heart?",
                "I see you and value you. What's been going on in your world?",
                "You belong here. Your story matters. What would you like to talk about?",
                "I'm here with open arms and ears. What's been on your mind?"
            ],
            encouragement: [
                "You're braver than you believe and stronger than you feel. Keep going!",
                "You've survived every hard day so far. That's 100% success rate!",
                "You matter more than you know. Your presence makes a difference.",
                "You're exactly where you need to be. Trust your journey.",
                "Every small step forward is still progress. You're doing great!",
                "You're more resilient than you realize. You've got this!",
                "Your story isn't over. The best chapters may be yet to come.",
                "You're worthy of love, respect, and kindness - especially from yourself.",
                "You're doing better than you think. Give yourself credit.",
                "You're not just surviving, you're growing. That takes courage.",
                "You're a warrior with a gentle heart. That's a beautiful combination.",
                "You're enough, exactly as you are. You don't need to be perfect."
            ],
            // NEW: Anger management and psychological questions
            angerquestions: [
                "Let's explore this together. On a scale of 1-10, how intense is your anger right now?",
                "What physical sensations do you notice when you're angry? Tight chest? Clenched fists?",
                "If your anger could speak, what would it say it needs right now?",
                "When you were growing up, how did the adults around you handle anger?",
                "What's the story you're telling yourself about this situation?",
                "If you could rewind and respond differently, what would you do?",
                "What would your best friend say about this situation if they were here?",
                "What are three things you're grateful for right now, even while angry?",
                "What's the underlying need that's not being met in this situation?",
                "How do you think you'll feel about this situation tomorrow? Next week?",
                "What would it mean if you let go of this anger right now?",
                "What boundaries might need to be set to prevent this anger in the future?"
            ],
            angercoping: [
                "Try the 5-4-3-2-1 technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
                "Let's do progressive muscle relaxation: Tense your shoulders for 5 seconds, then release. Feel the difference.",
                "Try this: Write down what you're angry about, then physically tear up the paper. How does that feel?",
                "Go for a quick walk, even if it's just around the room. Movement helps process anger energy.",
                "Try the 'STOP' technique: Stop, Take a breath, Observe your feelings, Proceed mindfully.",
                "Splash cold water on your wrists or face. This activates your parasympathetic nervous system.",
                "Try angry journaling: Write everything you feel without editing. No one will read it but you.",
                "Do some physical exercise: Push-ups, jumping jacks, or stretch. Use that anger energy constructively.",
                "Practice the '6-second rule': Intense anger chemicals last only 6 seconds. Count slowly to 6.",
                "Call someone who makes you laugh. Laughter is anger's opposite and can shift your mood quickly.",
                "Try the 'empty chair' technique: Imagine the person/situation in a chair and say what you need to say.",
                "Practice self-compassion: Talk to yourself like you would to a good friend going through this."
            ],
            angermanagement: [
                "Anger is information. It tells us something matters to us. What matters to you in this situation?",
                "You have the power to choose your response. What response would make you proud later?",
                "Anger often masks other emotions like hurt, fear, or sadness. What else might you be feeling?",
                "This feeling will pass. You've felt angry before and gotten through it. You can do it again.",
                "Your anger is valid, but you get to choose how to express it. What's a healthy way for you?",
                "Sometimes anger protects us from feeling vulnerable. Is there something you're trying to protect?",
                "You're not your anger. You're a person experiencing anger right now. There's a difference.",
                "What would help you feel heard and understood right now?",
                "Anger can be energy for positive change. How might you use this energy constructively?",
                "Remember: You can't control others, but you can control your response. What response serves you?",
                "It's okay to feel angry. It's not okay to hurt yourself or others. You're doing the right thing by talking about it.",
                "This situation is temporary. Your response to it can build the person you want to become."
            ],
            crisis: [
                "I'm very concerned about you. Your life has immense value. Please reach out to someone immediately - a counselor, trusted adult, or emergency services.",
                "What you're sharing is serious. You matter deeply. Please get immediate help from emergency services, a counselor, or someone you trust.",
                "I'm worried about your safety. You deserve to be here. Please contact emergency services or a crisis helpline right away.",
                "Your life is precious and irreplaceable. Please reach out for immediate help - emergency services, counselor, or trusted person.",
                "I'm concerned for you. You're valued beyond measure. Please get immediate professional help or contact emergency services.",
                "This sounds like a crisis. Your life matters. Please reach out to emergency services, counselor, or crisis hotline immediately.",
                "I'm worried about you. You belong here. Please contact professional help, emergency services, or someone who can help right now.",
                "Your safety is my biggest concern. You're important. Please get immediate help from emergency services or a trusted professional.",
                "You matter so much. Please don't face this alone. Contact emergency services, counselor, or crisis hotline right away.",
                "I care about you deeply. Please reach out for immediate help - emergency services, counselor, or someone you trust completely."
            ]
        };
        
        this.keywords = {
            anger: ['angry', 'anger', 'mad', 'furious', 'rage', 'pissed', 'irritated', 'frustrated', 'livid', 'annoyed', 'enraged', 'heated', 'fuming', 'outraged', 'aggressive', 'violent thoughts'],
            anxiety: ['anxious', 'anxiety', 'worried', 'nervous', 'panic', 'fear', 'scared', 'overwhelmed', 'stress about exams', 'nervous about presentation', 'panicking', 'freaking out', 'worried sick'],
            sadness: ['sad', 'sadness', 'depressed', 'down', 'low', 'crying', 'tears', 'heartbroken', 'miserable', 'unhappy', 'gloomy', 'upset', 'hurt', 'broken', 'devastated'],
            stress: ['stress', 'stressed', 'pressure', 'overwhelmed', 'busy', 'exam', 'assignment', 'deadline', 'workload', 'too much work', 'academic pressure', 'pressured', 'overloaded', 'exhausted'],
            depression: ['depression', 'depressed', 'hopeless', 'empty', 'numb', 'worthless', 'meaningless', 'dark', 'suicidal', 'want to die', 'end it all', 'no point', 'give up', 'nothing matters'],
            loneliness: ['lonely', 'alone', 'isolated', 'disconnected', 'no friends', 'by myself', 'solitary', 'missing people', 'feel alone', 'nobody understands', 'no one cares', 'left out'],
            happiness: ['happy', 'joy', 'joyful', 'excited', 'thrilled', 'amazing', 'wonderful', 'fantastic', 'great day', 'feeling good', 'awesome', 'brilliant', 'perfect', 'elated', 'cheerful'],
            academic: ['studies', 'school', 'university', 'grades', 'exam', 'test', 'assignment', 'academic', 'failing', 'alu', 'coursework', 'gpa', 'studying', 'homework', 'professor'],
            family: ['family', 'parents', 'mom', 'dad', 'home', 'expectations', 'pressure from family', 'disappointing family', 'family stress', 'mother', 'father', 'siblings', 'relatives'],
            financial: ['money', 'financial', 'fees', 'tuition', 'broke', 'poor', 'expensive', 'afford', 'paying for school', 'financial stress', 'cost', 'budget', 'bills', 'debt'],
            future: ['future', 'career', 'job', 'graduation', 'after university', 'what next', 'uncertain about future', 'career prospects', 'tomorrow', 'later', 'plans', 'goals'],
            homesickness: ['homesick', 'missing home', 'miss family', 'miss my country', 'want to go home', 'away from home', 'miss mom', 'miss dad', 'home country', 'miss friends'],
            positive: ['good', 'great', 'happy', 'better', 'excellent', 'wonderful', 'amazing', 'fantastic', 'fine', 'doing well', 'awesome', 'brilliant', 'perfect', 'blessed'],
            greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'muraho', 'bonjour', 'howdy', 'what\'s up', 'how are you'],
            thanks: ['thank you', 'thanks', 'grateful', 'appreciate', 'thankful', 'thank u', 'thx', 'much appreciated'],
            help: ['help', 'need help', 'can you help', 'support', 'assistance', 'what should i do', 'advice', 'guidance', 'suggestions'],
            comfort: ['need comfort', 'feel bad', 'hurt', 'pain', 'suffering', 'struggling', 'hard time', 'difficult', 'tough', 'challenging'],
            // NEW: Keywords for anger management
            angerwords: ['control anger', 'manage anger', 'anger management', 'calm down', 'cool off', 'losing temper', 'can\'t control', 'explosive', 'anger issues'],
            crisis: ['kill myself', 'end my life', 'suicide', 'want to die', 'not worth living', 'hurt myself', 'self harm', 'cutting', 'overdose', 'jump', 'end everything']
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.bindDragEvents();
        this.bindResizeEvents();
        this.loadPreviousChat();
    }

    bindEvents() {
        // Toggle chat
        const chatToggle = document.getElementById('chatToggle');
        if (chatToggle) {
            chatToggle.addEventListener('click', () => {
                this.toggleChat();
            });
        }

        const startChatBtn = document.getElementById('startChatBtn');
        if (startChatBtn) {
            startChatBtn.addEventListener('click', () => {
                this.openChat();
            });
        }

        // Chat controls
        const closeChat = document.getElementById('closeChat');
        if (closeChat) {
            closeChat.addEventListener('click', () => {
                this.closeChat();
            });
        }

        const minimizeChat = document.getElementById('minimizeChat');
        if (minimizeChat) {
            minimizeChat.addEventListener('click', () => {
                this.toggleMinimize();
            });
        }

        // Send message
        const sendMessage = document.getElementById('sendMessage');
        if (sendMessage) {
            sendMessage.addEventListener('click', () => {
                this.sendMessage();
            });
        }

        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !this.isTyping) {
                    this.sendMessage();
                }
            });
        }

        // Quick options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const message = btn.dataset.message;
                this.sendUserMessage(message);
                this.hideOptions();
            });
        });

        // Data controls
        const deleteChat = document.getElementById('deleteChat');
        if (deleteChat) {
            deleteChat.addEventListener('click', () => {
                this.deleteConversation();
            });
        }

        const saveChat = document.getElementById('saveChat');
        if (saveChat) {
            saveChat.addEventListener('click', () => {
                this.saveConversation();
            });
        }
    }

    bindDragEvents() {
        const chatHeader = document.getElementById('chatHeader');
        const chatWidget = document.getElementById('chatbot-widget');
        
        if (chatHeader && chatWidget) {
            chatHeader.addEventListener('mousedown', (e) => {
                // Don't start dragging if clicking on buttons
                if (e.target.closest('.chat-btn') || e.target.closest('.size-btn')) {
                    return;
                }
                
                this.isDragging = true;
                chatHeader.classList.add('dragging');
                
                const rect = chatWidget.getBoundingClientRect();
                this.dragOffset.x = e.clientX - rect.left;
                this.dragOffset.y = e.clientY - rect.top;
                
                document.addEventListener('mousemove', this.handleDrag.bind(this));
                document.addEventListener('mouseup', this.handleDragEnd.bind(this));
                
                e.preventDefault();
            });
        }
    }

    handleDrag(e) {
        if (!this.isDragging) return;
        
        const chatWidget = document.getElementById('chatbot-widget');
        if (chatWidget) {
            const newLeft = e.clientX - this.dragOffset.x;
            const newTop = e.clientY - this.dragOffset.y;
            
            // Constrain to viewport
            const maxLeft = window.innerWidth - chatWidget.offsetWidth;
            const maxTop = window.innerHeight - chatWidget.offsetHeight;
            
            chatWidget.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + 'px';
            chatWidget.style.top = Math.max(0, Math.min(newTop, maxTop)) + 'px';
            chatWidget.style.right = 'auto';
            chatWidget.style.bottom = 'auto';
        }
    }

    handleDragEnd() {
        this.isDragging = false;
        const chatHeader = document.getElementById('chatHeader');
        if (chatHeader) {
            chatHeader.classList.remove('dragging');
        }
        
        document.removeEventListener('mousemove', this.handleDrag.bind(this));
        document.removeEventListener('mouseup', this.handleDragEnd.bind(this));
    }

    bindResizeEvents() {
        // Size control buttons
        const sizeSmall = document.getElementById('sizeSmall');
        const sizeMedium = document.getElementById('sizeMedium');
        const sizeLarge = document.getElementById('sizeLarge');
        const sizeFullscreen = document.getElementById('sizeFullscreen');
        
        if (sizeSmall) {
            sizeSmall.addEventListener('click', () => this.setSize('small'));
        }
        if (sizeMedium) {
            sizeMedium.addEventListener('click', () => this.setSize('medium'));
        }
        if (sizeLarge) {
            sizeLarge.addEventListener('click', () => this.setSize('large'));
        }
        if (sizeFullscreen) {
            sizeFullscreen.addEventListener('click', () => this.setSize('fullscreen'));
        }
    }

    setSize(size) {
        const chatWidget = document.getElementById('chatbot-widget');
        if (!chatWidget) return;
        
        // Remove all size classes
        chatWidget.classList.remove('size-small', 'size-medium', 'size-large', 'size-fullscreen');
        
        // Add new size class
        chatWidget.classList.add(`size-${size}`);
        this.currentSize = size;
        
        // Reset position for fullscreen
        if (size === 'fullscreen') {
            chatWidget.style.left = '';
            chatWidget.style.top = '';
            chatWidget.style.right = '';
            chatWidget.style.bottom = '';
        } else {
            // Reset to bottom-right for other sizes
            chatWidget.style.left = '';
            chatWidget.style.top = '';
            chatWidget.style.right = '20px';
            chatWidget.style.bottom = '20px';
        }
        
        // Scroll messages to bottom after resize
        setTimeout(() => {
            const messagesContainer = document.getElementById('chatMessages');
            if (messagesContainer) {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }, 100);
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        const widget = document.getElementById('chatbot-widget');
        const toggle = document.getElementById('chatToggle');
        
        if (widget && toggle) {
            widget.classList.add('active');
            if (this.isMinimized) {
                widget.classList.remove('minimized');
                this.isMinimized = false;
            }
            toggle.style.display = 'none';
            this.isOpen = true;
            
            // Focus on input
            setTimeout(() => {
                const input = document.getElementById('chatInput');
                if (input) input.focus();
            }, 100);
        }
    }

    closeChat() {
        const widget = document.getElementById('chatbot-widget');
        const toggle = document.getElementById('chatToggle');
        
        if (widget && toggle) {
            widget.classList.remove('active');
            widget.classList.remove('minimized');
            toggle.style.display = 'flex';
            this.isOpen = false;
            this.isMinimized = false;
        }
    }

    toggleMinimize() {
        const widget = document.getElementById('chatbot-widget');
        if (!widget) return;
        
        if (this.isMinimized) {
            widget.classList.remove('minimized');
            this.isMinimized = false;
            // Focus on input when unminimized
            setTimeout(() => {
                const input = document.getElementById('chatInput');
                if (input) input.focus();
            }, 100);
        } else {
            widget.classList.add('minimized');
            this.isMinimized = true;
        }
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        if (!input || this.isTyping || this.isMinimized) return;
        
        const message = input.value.trim();
        
        if (message) {
            this.sendUserMessage(message);
            input.value = '';
            this.hideOptions();
        }
    }

    sendUserMessage(message) {
        this.addMessage('user', message);
        this.isTyping = true;
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Simulate bot thinking time
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage('bot', response);
            this.isTyping = false;
            
            // Suggest follow-up after important responses
            setTimeout(() => {
                this.suggestFollowUp(message);
            }, 2000);
            
        }, 1500 + Math.random() * 1000);
    }

    addMessage(sender, content) {
        const messagesContainer = document.getElementById('chatMessages');
        if (!messagesContainer) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
        
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${sender === 'user' ? 'fa-user' : 'fa-heart'}"></i>
            </div>
            <div class="message-content">
                <p>${content}</p>
                <span class="message-time">${time}</span>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Store message
        this.messages.push({
            sender,
            content,
            timestamp: new Date().toISOString()
        });
        
        this.saveToLocalStorage();
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatMessages');
        if (!messagesContainer) return;
        
        const typingElement = document.createElement('div');
        typingElement.className = 'bot-message typing-indicator';
        typingElement.id = 'typing-indicator';
        
        typingElement.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-heart"></i>
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for crisis keywords first (highest priority)
        if (this.keywords.crisis.some(keyword => lowerMessage.includes(keyword))) {
            return this.getRandomResponse('crisis');
        }
        
        // Check for anger-related responses
        if (this.keywords.anger.some(keyword => lowerMessage.includes(keyword))) {
            // If they mention anger management/control, provide coping strategies
            if (this.keywords.angerwords.some(keyword => lowerMessage.includes(keyword))) {
                return this.getRandomResponse('angercoping');
            }
            // Otherwise, provide general anger support
            return this.getRandomResponse('anger');
        }
        
        // Check for specific categories
        for (const [category, keywords] of Object.entries(this.keywords)) {
            if (category !== 'crisis' && category !== 'anger' && category !== 'angerwords' && keywords.some(keyword => lowerMessage.includes(keyword))) {
                return this.getRandomResponse(category);
            }
        }
        
        // Check for specific patterns that need comfort or motivation
        if (lowerMessage.includes('tired') || lowerMessage.includes('exhausted') || lowerMessage.includes('can\'t anymore')) {
            return this.getRandomResponse('comfort');
        }
        
        if (lowerMessage.includes('give up') || lowerMessage.includes('quit') || lowerMessage.includes('impossible')) {
            return this.getRandomResponse('motivation');
        }
        
        if (lowerMessage.includes('care for myself') || lowerMessage.includes('self care') || lowerMessage.includes('take care')) {
            return this.getRandomResponse('selfcare');
        }
        
        if (lowerMessage.includes('connect') || lowerMessage.includes('friends') || lowerMessage.includes('relationship')) {
            return this.getRandomResponse('connection');
        }
        
        if (lowerMessage.includes('hope') || lowerMessage.includes('better') || lowerMessage.includes('future')) {
            return this.getRandomResponse('hope');
        }
        
        // Default to general response
        return this.getRandomResponse('general');
    }

    getRandomResponse(category) {
        const responses = this.responses[category] || this.responses.general;
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    }

    suggestFollowUp(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let followUp = '';
        
        if (lowerMessage.includes('angry') || lowerMessage.includes('mad') || lowerMessage.includes('furious')) {
            const angerFollowUps = [
                "Would you like to try some anger management techniques, or do you want to explore what's behind this anger?",
                "Let me ask you this: What would help you feel more in control right now?",
                "Here's a question: If this anger could teach you something, what would it be?",
                "Try this: Take 5 deep breaths and tell me what you notice in your body right now."
            ];
            followUp = angerFollowUps[Math.floor(Math.random() * angerFollowUps.length)];
        } else if (lowerMessage.includes('anxious') || lowerMessage.includes('stress')) {
            followUp = "Would you like some breathing exercises, or do you want to talk about what's causing these feelings?";
        } else if (lowerMessage.includes('sad') || lowerMessage.includes('down')) {
            followUp = "Would you like to share more about what's been making you feel this way, or would some self-care suggestions help?";
        } else if (lowerMessage.includes('lonely') || lowerMessage.includes('alone')) {
            followUp = "Would you like to talk about ways to connect with others, or share more about what's making you feel isolated?";
        } else if (lowerMessage.includes('family') || lowerMessage.includes('home')) {
            followUp = "Family relationships can be complex. Would you like to talk more about managing these expectations?";
        } else if (lowerMessage.includes('academic') || lowerMessage.includes('grades')) {
            followUp = "Academic challenges are tough. Would you like to discuss strategies or talk more about the pressure you're feeling?";
        } else if (lowerMessage.includes('happy') || lowerMessage.includes('good')) {
            followUp = "I love hearing positive news! What's been the best part of your day?";
        }
        
        if (followUp) {
            setTimeout(() => {
                if (!this.isTyping) {
                    this.addMessage('bot', followUp);
                }
            }, 3000);
        }
    }

    // Add new method for anger-specific follow-ups
    provideAngerSupport(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        setTimeout(() => {
            if (!this.isTyping) {
                if (lowerMessage.includes('want to hurt') || lowerMessage.includes('want to hit')) {
                    this.addMessage('bot', this.getRandomResponse('angermanagement'));
                } else if (lowerMessage.includes('can\'t control') || lowerMessage.includes('losing it')) {
                    this.addMessage('bot', this.getRandomResponse('angercoping'));
                } else {
                    this.addMessage('bot', this.getRandomResponse('angerquestions'));
                }
            }
        }, 4000);
    }

    hideOptions() {
        const options = document.getElementById('chatOptions');
        if (options) {
            options.style.display = 'none';
        }
    }

    deleteConversation() {
        if (confirm('Are you sure you want to delete this conversation? This action cannot be undone and will protect your privacy by removing all chat history.')) {
            this.messages = [];
            const messagesContainer = document.getElementById('chatMessages');
            if (messagesContainer) {
                messagesContainer.innerHTML = `
                    <div class="bot-message">
                        <div class="message-avatar">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="message-content">
                            <p>Hello! Welcome home to this safe space. I'm here to support you with any concerns. This conversation is completely anonymous and confidential. How are you feeling today?</p>
                            <span class="message-time">Just now</span>
                        </div>
                    </div>
                `;
            }
            
            const options = document.getElementById('chatOptions');
            if (options) {
                options.style.display = 'flex';
            }
            
            localStorage.removeItem('anonymousChatMessages');
            alert('Conversation deleted successfully. Your privacy is protected.');
        }
    }

    saveConversation() {
        if this.messages.length === 0) {
            alert('No conversation to save yet. Start chatting first!');
            return;
        }
        
        const conversationData = {
            messages: this.messages,
            exportDate: new Date().toISOString(),
            note: "This conversation was exported from InsightIQ Anonymous Wellness Support. All personal information remains anonymous.",
            disclaimer: "This chat was with an AI assistant and is not a substitute for professional counseling or support services."
        };
        
        const dataStr = JSON.stringify(conversationData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wellness_chat_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        alert('Conversation saved to your device. No data was sent to our servers - your privacy remains protected.');
    }

    saveToLocalStorage() {
        try {
            localStorage.setItem('anonymousChatMessages', JSON.stringify(this.messages));
        } catch (error) {
            console.log('Could not save to localStorage:', error);
        }
    }

    loadPreviousChat() {
        try {
            const stored = localStorage.getItem('anonymousChatMessages');
            if (stored) {
                this.messages = JSON.parse(stored);
            }
        } catch (error) {
            console.log('Could not load from localStorage:', error);
        }
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    new AnonymousChatbot();
    
    // Add some visual feedback
    console.log('🤖 Anonymous Wellness Chatbot initialized');
    console.log('💚 Privacy-first design - no personal data collected');
    console.log('🇷🇼 Supporting student wellbeing in Rwanda');
});
