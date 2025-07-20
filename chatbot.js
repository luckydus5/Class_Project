class AnonymousChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.isTyping = false;
        
        // Enhanced responses with Rwanda/ALU specific context and mental health support
        this.responses = {
            greetings: [
                "Hello! I'm here to listen and support you. This is a completely safe and anonymous space. How are you feeling today?",
                "Hi there! Welcome to our anonymous support chat. I'm here to help with any mental health concerns you might have. What's on your mind?",
                "Hello friend! I'm glad you reached out. This conversation is completely private and anonymous. How can I support you today?",
                "Welcome! I'm your anonymous mental health companion. Whether you're dealing with stress, anxiety, or just need someone to talk to, I'm here for you. How are you doing?"
            ],
            anxiety: [
                "I understand you're feeling anxious, and that takes courage to share. Anxiety affects many students in Rwanda, especially at competitive institutions like ALU. Let's try a breathing exercise: breathe in for 4 counts, hold for 4, breathe out for 4. What specifically is making you feel anxious right now?",
                "Thank you for trusting me with your feelings. Anxiety can be overwhelming, but you're not alone. Many students across Rwanda and at ALU experience this. It's often related to academic pressure, being away from family, or uncertainty about the future. Can you tell me what triggers these anxious feelings?",
                "Anxiety is your mind's way of trying to protect you, but sometimes it goes into overdrive. You're safe here. In Rwandan culture, we often keep our worries to ourselves, but sharing them can really help. Would it help to talk about what's causing these anxious thoughts?",
                "I hear you, and what you're feeling is completely valid. Anxiety doesn't define you. Many successful people, including leaders in Rwanda, have faced similar challenges. Have you noticed any patterns in when you feel most anxious? Sometimes identifying triggers can help us manage them better."
            ],
            sadness: [
                "I'm really sorry you're feeling sad. Your feelings are completely valid, and it's okay to not be okay sometimes. Many students in Rwanda struggle with similar feelings, especially when dealing with academic pressure or being away from family. Would you like to share what's contributing to your sadness?",
                "Thank you for sharing something so personal with me. Sadness can feel heavy, but talking about it is a brave first step. You're not alone - many students at ALU and across Rwanda experience similar emotions. In our culture, we're taught to be strong, but it's okay to feel vulnerable sometimes. What's been weighing on your heart?",
                "I can hear the pain in your message, and I want you to know that feeling sad doesn't make you weak. It makes you human. Sometimes life in university, dealing with expectations from family, or feeling homesick can be overwhelming. What's been the hardest part for you lately?",
                "Sadness is like a storm - it feels intense, but it will pass. You've taken a big step by reaching out. Many students at ALU face similar challenges with homesickness, academic stress, or feeling disconnected. Is there something specific that's been making you feel this way?"
            ],
            stress: [
                "Academic stress is incredibly common among students in Rwanda, especially at competitive institutions like ALU. The pressure to succeed, combined with family expectations and financial concerns, can be overwhelming. You're definitely not alone in feeling this way. What aspects of your studies are causing the most pressure right now?",
                "I hear you about the stress. The pressure to succeed academically can be intense, especially when you're representing your family's hopes and dealing with the competitive environment at ALU. Remember, your worth isn't defined by your grades. What's the biggest source of stress for you right now?",
                "Study stress affects so many students - you're part of a community dealing with similar challenges. In Rwanda, education is highly valued, which can create additional pressure. Sometimes we put too much pressure on ourselves. Can you tell me more about what's making your studies feel overwhelming?",
                "Academic pressure is real, especially when you're far from home or dealing with high expectations from family and community. Many ALU students face similar struggles with time management, difficult coursework, or fear of failure. Let's talk about what's making your studies feel most stressful."
            ],
            depression: [
                "I'm really grateful you felt comfortable sharing this with me. Depression can make everything feel heavy and meaningless, but please know that these feelings can and do get better. You're not alone - many students struggle with depression, especially when dealing with the pressures of university life. How long have you been feeling this way?",
                "Thank you for trusting me with something so personal. Depression affects many people, including students in Rwanda. It's not a weakness or a character flaw - it's a real condition that deserves care and support. Sometimes the transition to university life, being away from family, or academic pressure can trigger these feelings. What's been the hardest part of dealing with these feelings?",
                "I want you to know that reaching out was incredibly brave. Depression can make us feel isolated and hopeless, but you're not alone in this struggle. Many students at ALU and across Rwanda face similar challenges. In our culture, mental health isn't always discussed openly, but your feelings are valid and important. Would you like to talk about what's been going on for you?"
            ],
            loneliness: [
                "Feeling lonely, especially as a student, can be really hard. Many students at ALU feel isolated, whether they're far from home, struggling to make connections, or dealing with the competitive academic environment. You're not alone in feeling this way. What's been making you feel most lonely?",
                "I hear you, and loneliness is something many students experience, particularly in university settings or when they're away from family. It's brave of you to reach out. Sometimes the people around us are also feeling lonely but hiding it. Being at ALU can sometimes feel isolating despite being surrounded by other students. What's been the hardest part about feeling disconnected from others?",
                "Loneliness can feel overwhelming, but reaching out here shows you're taking steps to connect. Many students in Rwanda struggle with feeling isolated, especially when they're focused on academics or dealing with homesickness. Would you like to talk about what's making you feel disconnected from others?"
            ],
            academic: [
                "Academic challenges are tough, and they're even harder when they affect your mental health. Many students at ALU face similar struggles with difficult coursework, time management, or fear of failure. Remember, asking for help is a sign of strength, not weakness. What specific academic concerns are weighing on you?",
                "I understand how academic pressure can feel overwhelming. The standards at ALU are high, and combined with family expectations and financial investment in your education, it can feel like a lot. Your struggles are valid, and many of your peers are facing similar challenges. What aspects of your academic life are causing you the most stress right now?",
                "Academic difficulties can really impact our mental health, especially in a competitive environment like ALU. You're not alone in this - many students across Rwanda deal with similar pressures. Whether it's specific subjects, study habits, or exam anxiety, these challenges are common. Would you like to talk about what's been most challenging academically?"
            ],
            family: [
                "Family relationships can be complex, especially when you're at university and trying to balance their expectations with your own goals and mental health. Many students in Rwanda face pressure from family to succeed academically while also dealing with homesickness. What's been most challenging with your family situation?",
                "Family dynamics can significantly impact our mental health. Thank you for sharing this with me. Many students struggle with balancing family expectations, especially in Rwandan culture where family honor and success are very important. Sometimes the pressure to make your family proud can feel overwhelming. Would you like to talk about what's been most difficult?",
                "I hear you about family challenges. These relationships can be both supportive and stressful. Many students at ALU deal with similar family pressures, whether it's about grades, career choices, or living up to expectations. Sometimes being away from family while trying to make them proud creates its own stress. What aspect of your family situation has been weighing on you most?"
            ],
            financial: [
                "Financial stress is a reality for many students, and it can significantly impact mental health. You're not alone in worrying about money while trying to focus on your studies. Many students at ALU face similar challenges with tuition, living expenses, or family financial pressure. How has financial stress been affecting you?",
                "Money concerns are incredibly stressful, especially when you're trying to focus on your education. Many students in Rwanda face similar financial pressures, whether it's about affording tuition, supporting family, or managing living expenses. Thank you for sharing this concern with me. What's been the most challenging aspect financially?",
                "I understand how financial worries can consume your thoughts and affect your studies. Education is expensive, and many families make significant sacrifices for their children's university education. This can create additional pressure on students. What specific financial concerns have been weighing on you?"
            ],
            future: [
                "Worrying about the future is so common among students. The pressure to succeed and uncertainty about career prospects after ALU can be overwhelming. Many of your peers share these concerns about finding good jobs, making family proud, or contributing to Rwanda's development. What aspects of your future feel most uncertain or stressful?",
                "Future anxiety is something many students experience, especially in competitive environments. Questions about career prospects, whether your degree will lead to good opportunities, or how you'll contribute to your family and community are all valid concerns. What specific future worries have been on your mind lately?",
                "I understand the uncertainty about what comes after university. Many ALU students worry about whether they'll find good jobs, be able to support their families, or make a meaningful contribution to Rwanda. These are big responsibilities to think about. What aspects of your future feel most overwhelming right now?"
            ],
            homesickness: [
                "Homesickness is so common among university students, especially those studying away from home. Missing family, familiar foods, your community, and the comfort of home is completely natural. Many students at ALU experience this. What do you miss most about home?",
                "Being away from family and familiar surroundings can be really difficult. Homesickness affects many students, and it's a sign of how much your family and community mean to you. It's okay to feel sad about being away from the people and places you love. How has homesickness been affecting you?",
                "Missing home is one of the most common challenges students face. Whether it's missing family meals, conversations in your local language, or just the comfort of familiar places, these feelings are completely valid. What aspects of home do you find yourself missing most?"
            ],
            positive: [
                "I'm so glad to hear you're feeling better! That's wonderful. What's been helping you feel more positive lately?",
                "That's fantastic! It's great that you're in a good place right now. What's been going well for you?",
                "I love hearing that you're doing well! It's important to celebrate these positive moments. What's been bringing you joy lately?",
                "It's amazing to hear you're feeling good! These positive feelings are just as important to acknowledge as the difficult ones. What's been contributing to your good mood?"
            ],
            general: [
                "Thank you for reaching out and sharing with me. Your feelings are important and valid. Many students in Rwanda and at ALU face similar challenges. Whether it's academic stress, homesickness, family pressure, or just the general challenges of university life, you're not alone. Can you tell me a bit more about what's been on your mind lately?",
                "I appreciate you taking the time to connect. Whatever you're going through, you don't have to face it alone. Many students at ALU and across Rwanda deal with similar struggles, from academic pressure to personal challenges. What would be most helpful to talk about right now?",
                "I'm here to listen and support you through whatever you're experiencing. Your mental health matters, and it's brave of you to reach out. Whether you're dealing with stress, sadness, anxiety, or just need someone to talk to, this is a safe space. What's been weighing on your heart or mind recently?",
                "Thank you for trusting me with your thoughts. Everyone faces challenges, especially during university years, and it's completely normal to need support sometimes. What's been the most difficult thing you're dealing with right now?"
            ],
            encouragement: [
                "You're showing incredible strength by reaching out and talking about your feelings. That's not always easy to do, especially in a culture where mental health isn't always openly discussed. You should be proud of taking this step toward taking care of yourself.",
                "I want you to know that seeking help and talking about your mental health shows wisdom and courage. Many successful people, including leaders and innovators in Rwanda, have faced similar challenges and found ways to thrive. You're already on the right path by recognizing your needs.",
                "Remember, struggling with mental health doesn't make you weak or broken. It makes you human. Many of the brightest minds and kindest hearts have faced similar battles. You're stronger than you know, and seeking support is actually a sign of that strength.",
                "Taking care of your mental health is just as important as taking care of your physical health or your studies. You're making a smart choice by reaching out and talking about how you feel. This shows real maturity and self-awareness."
            ],
            coping: [
                "Here are some strategies that have helped other students: deep breathing exercises, talking to trusted friends or family, maintaining a routine, getting enough sleep, staying connected with home, and finding small moments of joy each day. What sounds most manageable for you to try?",
                "Some students find it helpful to journal their thoughts, practice mindfulness, engage in physical activity, listen to music, or find creative outlets. Others benefit from connecting with fellow students or maintaining cultural practices that bring comfort. What kinds of activities usually help you feel better?",
                "Building a support network is really important. This could include trusted friends at ALU, family members back home, counselors, study groups, or even online communities. Having people who understand your experience can make a big difference. Who in your life makes you feel supported and understood?"
            ],
            resources: [
                "While I'm here to chat and provide support, please remember that ALU has counseling services available if you need more intensive help. Many universities also have support systems specifically for mental health.",
                "If you ever feel like you're in crisis or having thoughts of self-harm, please reach out to a mental health professional, a trusted adult, or emergency services immediately. Your life has value and there are people who want to help.",
                "Remember that seeking professional help is a sign of strength, not weakness. Therapists and counselors are trained to help with exactly the kinds of challenges you're facing. There's no shame in getting the support you deserve."
            ],
            crisis: [
                "I'm very concerned about what you're sharing with me. While I want to support you, it sounds like you might need immediate professional help. Please consider reaching out to a mental health professional, counselor, or trusted adult right away. Your safety and well-being are the most important things.",
                "What you're describing sounds really serious, and I want to make sure you get the right kind of help. Please consider contacting emergency services, a mental health professional, or someone you trust who can help you stay safe. You deserve support and care.",
                "I'm worried about you and want to make sure you're safe. These feelings you're describing are serious, and while I'm here to listen, you may need more support than I can provide. Please reach out to a counselor, trusted friend, family member, or emergency services."
            ]
        };
        
        this.keywords = {
            anxiety: ['anxious', 'anxiety', 'worried', 'nervous', 'panic', 'fear', 'scared', 'overwhelmed with worry', 'stress about exams', 'nervous about presentation'],
            sadness: ['sad', 'sadness', 'depressed', 'down', 'low', 'crying', 'tears', 'heartbroken', 'miserable', 'unhappy', 'gloomy'],
            stress: ['stress', 'stressed', 'pressure', 'overwhelmed', 'busy', 'exam', 'assignment', 'deadline', 'workload', 'too much work', 'academic pressure'],
            depression: ['depression', 'depressed', 'hopeless', 'empty', 'numb', 'worthless', 'meaningless', 'dark', 'suicidal', 'want to die', 'end it all'],
            loneliness: ['lonely', 'alone', 'isolated', 'disconnected', 'no friends', 'by myself', 'solitary', 'missing people', 'feel alone'],
            academic: ['studies', 'school', 'university', 'grades', 'exam', 'test', 'assignment', 'academic', 'failing', 'alu', 'coursework', 'gpa'],
            family: ['family', 'parents', 'mom', 'dad', 'home', 'expectations', 'pressure from family', 'disappointing family', 'family stress'],
            financial: ['money', 'financial', 'fees', 'tuition', 'broke', 'poor', 'expensive', 'afford', 'paying for school', 'financial stress'],
            future: ['future', 'career', 'job', 'graduation', 'after university', 'what next', 'uncertain about future', 'career prospects'],
            homesickness: ['homesick', 'missing home', 'miss family', 'miss my country', 'want to go home', 'away from home'],
            positive: ['good', 'great', 'happy', 'better', 'excellent', 'wonderful', 'amazing', 'fantastic', 'fine', 'doing well'],
            greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'muraho', 'bonjour'],
            crisis: ['kill myself', 'end my life', 'suicide', 'want to die', 'not worth living', 'hurt myself', 'self harm', 'cutting']
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
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
                this.minimizeChat();
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
            toggle.style.display = 'flex';
            this.isOpen = false;
        }
    }

    minimizeChat() {
        this.closeChat();
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        if (!input || this.isTyping) return;
        
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
            
        }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
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
        
        // Check for specific categories
        for (const [category, keywords] of Object.entries(this.keywords)) {
            if (category !== 'crisis' && keywords.some(keyword => lowerMessage.includes(keyword))) {
                return this.getRandomResponse(category);
            }
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
        
        if (lowerMessage.includes('anxious') || lowerMessage.includes('stress')) {
            followUp = "Would you like to try a quick breathing exercise, or would you prefer to talk more about what's causing these feelings?";
        } else if (lowerMessage.includes('sad') || lowerMessage.includes('down')) {
            followUp = "Would it help to talk about what's been making you feel this way, or would you like some suggestions for self-care?";
        } else if (lowerMessage.includes('lonely') || lowerMessage.includes('alone')) {
            followUp = "Would you like to talk about ways to connect with others at ALU, or share more about what's making you feel isolated?";
        } else if (lowerMessage.includes('family') || lowerMessage.includes('home')) {
            followUp = "Family relationships can be complex, especially when you're at university. Would you like to talk more about managing these expectations?";
        } else if (lowerMessage.includes('academic') || lowerMessage.includes('grades')) {
            followUp = "Academic challenges are tough. Would you like to discuss specific study strategies or talk more about the pressure you're feeling?";
        }
        
        if (followUp) {
            setTimeout(() => {
                if (!this.isTyping) {
                    this.addMessage('bot', followUp);
                }
            }, 3000);
        }
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
                            <p>Hello! I'm here to support you with mental health concerns. This conversation is completely anonymous and confidential. How are you feeling today?</p>
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
        if (this.messages.length === 0) {
            alert('No conversation to save yet. Start chatting first!');
            return;
        }
        
        const conversationData = {
            messages: this.messages,
            exportDate: new Date().toISOString(),
            note: "This conversation was exported from InsightIQ Anonymous Mental Health Support. All personal information remains anonymous.",
            disclaimer: "This chat was with an AI assistant and is not a substitute for professional mental health care."
        };
        
        const dataStr = JSON.stringify(conversationData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `mental_health_chat_${new Date().toISOString().split('T')[0]}.json`;
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
    console.log('🤖 Anonymous Mental Health Chatbot initialized');
    console.log('💚 Privacy-first design - no personal data collected');
    console.log('🇷🇼 Supporting mental health in Rwanda');
});
