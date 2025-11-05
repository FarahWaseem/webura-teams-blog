// Blog Details Page JavaScript

// Blog posts data
const blogPosts = {
    1: {
        title: "The Power of Social Media Marketing",
        author: "Admin",
        date: "15 March 2020",
        readTime: "5 min read",
        views: "1,234 views",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop&q=80",
        tags: ["SEO", "Analytics", "Marketing"],
        leadText: "Social media marketing has revolutionized the way businesses connect with their audiences. In today's digital landscape, having a strong social media presence is no longer optional—it's essential for building brand awareness, engaging customers, and driving sales.",
        content: `
            <p>The rapid growth of social media platforms has created unprecedented opportunities for businesses of all sizes. With billions of active users across platforms like Facebook, Instagram, Twitter, and LinkedIn, social media offers a direct line of communication between brands and their target audiences.</p>

            <h2>Understanding Your Audience</h2>
            <p>One of the most critical aspects of effective social media marketing is understanding your audience. Before launching any campaign, you need to know who your customers are, what they care about, and how they interact with social media platforms.</p>

            <p>Market research and analytics tools can provide valuable insights into your audience's demographics, interests, and online behavior. Use this data to create content that resonates with your target market and speaks directly to their needs and pain points.</p>

            <h2>Creating Engaging Content</h2>
            <p>Content is the foundation of any successful social media strategy. High-quality, engaging content that provides value to your audience will help you build a loyal following and establish your brand as a thought leader in your industry.</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop&q=80" alt="Content Image">
            </div>

            <p>Whether you're sharing blog posts, videos, infographics, or user-generated content, make sure every piece of content aligns with your brand voice and provides genuine value to your audience. Consistency in both quality and messaging is key to building trust and credibility.</p>

            <h2>Leveraging Multiple Platforms</h2>
            <p>While it's important to maintain a presence on multiple social media platforms, it's equally important to tailor your content strategy for each platform. What works on Instagram may not work on LinkedIn, and vice versa.</p>

            <ul class="article-list">
                <li><strong>Facebook:</strong> Best for community building and customer service</li>
                <li><strong>Instagram:</strong> Ideal for visual storytelling and brand awareness</li>
                <li><strong>Twitter:</strong> Great for real-time engagement and news sharing</li>
                <li><strong>LinkedIn:</strong> Perfect for B2B marketing and professional networking</li>
            </ul>

            <h2>Measuring Success</h2>
            <p>To ensure your social media marketing efforts are effective, you need to track and measure your performance. Key metrics to monitor include:</p>

            <div class="metrics-grid">
                <div class="metric-card">
                    <i class="fa-solid fa-users"></i>
                    <h3>Engagement Rate</h3>
                    <p>Measure likes, comments, shares, and saves</p>
                </div>
                <div class="metric-card">
                    <i class="fa-solid fa-chart-line"></i>
                    <h3>Reach & Impressions</h3>
                    <p>Track how many people see your content</p>
                </div>
                <div class="metric-card">
                    <i class="fa-solid fa-link"></i>
                    <h3>Click-Through Rate</h3>
                    <p>Monitor how often users click your links</p>
                </div>
                <div class="metric-card">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <h3>Conversion Rate</h3>
                    <p>Measure how many leads or sales you generate</p>
                </div>
            </div>

            <h2>Conclusion</h2>
            <p>Social media marketing is a powerful tool that can help you build your brand, engage with customers, and drive business growth. By understanding your audience, creating engaging content, leveraging the right platforms, and measuring your success, you can create a social media strategy that delivers real results for your business.</p>

            <blockquote class="article-quote">
                "Social media is not a media. The key is to listen, engage, and build relationships."
                <cite>— David Alston</cite>
            </blockquote>
        `
    },
    2: {
        title: "How SEO Can Transform Your Business",
        author: "Admin",
        date: "15 March 2020",
        readTime: "6 min read",
        views: "2,150 views",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&q=80",
        tags: ["SEO", "Analytics"],
        leadText: "Search Engine Optimization (SEO) is one of the most powerful digital marketing strategies available today. When implemented correctly, SEO can dramatically increase your website's visibility, drive organic traffic, and ultimately boost your business revenue.",
        content: `
            <p>In today's competitive digital landscape, appearing on the first page of search results is crucial for business success. Studies show that the first page of Google receives 95% of web traffic, making SEO an essential investment for any business looking to grow online.</p>

            <h2>Understanding SEO Fundamentals</h2>
            <p>SEO involves optimizing your website to rank higher in search engine results pages (SERPs) for relevant keywords. This includes both on-page optimization (content, HTML, site structure) and off-page optimization (backlinks, social signals).</p>

            <p>Effective SEO requires a comprehensive approach that combines technical optimization, quality content creation, and strategic link building. It's not a one-time effort but an ongoing process that requires consistent monitoring and adjustments.</p>

            <h2>Key SEO Strategies</h2>
            <p>To achieve significant results, you need to focus on several key areas:</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80" alt="SEO Strategies">
            </div>

            <ul class="article-list">
                <li><strong>Keyword Research:</strong> Identify the terms your target audience uses to search for your products or services</li>
                <li><strong>Content Optimization:</strong> Create valuable, relevant content that naturally incorporates your target keywords</li>
                <li><strong>Technical SEO:</strong> Ensure your website is fast, mobile-friendly, and easily crawlable by search engines</li>
                <li><strong>Link Building:</strong> Earn high-quality backlinks from authoritative websites in your industry</li>
            </ul>

            <h2>Measuring SEO Success</h2>
            <p>Tracking your SEO performance is essential for understanding what's working and what needs improvement. Key metrics include organic traffic, keyword rankings, bounce rate, and conversion rate.</p>

            <h2>Conclusion</h2>
            <p>SEO is a long-term investment that can transform your business by increasing visibility, attracting qualified leads, and driving sustainable growth. Start implementing these strategies today to see measurable results over time.</p>
        `
    },
    3: {
        title: "Effective Team Collaboration Strategies",
        author: "Writer",
        date: "15 March 2020",
        readTime: "4 min read",
        views: "1,890 views",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80",
        tags: ["SEO", "Marketing"],
        leadText: "In today's fast-paced digital workspace, effective team collaboration is more important than ever. Discover proven strategies for building strong teams and improving collaboration to drive productivity and innovation.",
        content: `
            <p>Successful collaboration requires more than just bringing people together. It demands a strategic approach that fosters communication, trust, and shared goals among team members.</p>

            <h2>Building a Collaborative Culture</h2>
            <p>Creating an environment where collaboration thrives starts with leadership. Leaders must model collaborative behavior, encourage open communication, and remove barriers that prevent team members from working together effectively.</p>

            <p>This includes establishing clear communication channels, setting shared objectives, and recognizing collaborative achievements. When team members feel valued and heard, they're more likely to contribute their best ideas.</p>

            <h2>Leveraging Technology</h2>
            <p>Modern collaboration tools can significantly enhance team productivity. From project management platforms to real-time communication apps, the right technology can break down geographical barriers and enable seamless collaboration.</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop&q=80" alt="Team Collaboration">
            </div>

            <ul class="article-list">
                <li><strong>Project Management Tools:</strong> Keep everyone aligned on tasks and deadlines</li>
                <li><strong>Communication Platforms:</strong> Enable instant messaging and video conferencing</li>
                <li><strong>Cloud Storage:</strong> Ensure easy access to shared documents and files</li>
                <li><strong>Collaborative Workspaces:</strong> Facilitate real-time document editing and brainstorming</li>
            </ul>

            <h2>Best Practices for Remote Teams</h2>
            <p>With remote work becoming increasingly common, teams need new strategies to maintain effective collaboration. Regular check-ins, clear documentation, and virtual team-building activities can help maintain strong connections.</p>

            <h2>Conclusion</h2>
            <p>Effective collaboration is a competitive advantage that can drive innovation, improve productivity, and create a more engaged workforce. Invest in the right tools, processes, and culture to unlock your team's full potential.</p>
        `
    },
    4: {
        title: "Optimize Your Website for Better Performance",
        author: "Admin",
        date: "15 March 2020",
        readTime: "5 min read",
        views: "1,567 views",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop&q=80",
        tags: ["Business"],
        leadText: "Website performance directly impacts user experience, search rankings, and conversion rates. Learn how to optimize your website for speed, efficiency, and better results.",
        content: `
            <p>In an era where users expect instant results, a slow website can cost you visitors, customers, and revenue. Performance optimization should be a top priority for any business with an online presence.</p>

            <h2>Why Performance Matters</h2>
            <p>Research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. Additionally, page speed is a ranking factor for Google, meaning faster sites can achieve better search engine visibility.</p>

            <p>Beyond search rankings, performance affects user experience, bounce rates, and conversion rates. A fast, responsive website builds trust and keeps visitors engaged.</p>

            <h2>Key Optimization Strategies</h2>
            <p>Optimizing website performance involves multiple techniques and best practices:</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80" alt="Website Performance">
            </div>

            <ul class="article-list">
                <li><strong>Image Optimization:</strong> Compress and resize images to reduce file sizes</li>
                <li><strong>Caching:</strong> Implement browser and server-side caching</li>
                <li><strong>Minification:</strong> Minify CSS, JavaScript, and HTML files</li>
                <li><strong>CDN Usage:</strong> Use Content Delivery Networks for faster loading</li>
                <li><strong>Code Optimization:</strong> Remove unused code and optimize database queries</li>
            </ul>

            <h2>Testing and Monitoring</h2>
            <p>Regular performance testing helps identify bottlenecks and areas for improvement. Use tools like Google PageSpeed Insights, GTmetrix, and WebPageTest to monitor your website's performance.</p>

            <h2>Conclusion</h2>
            <p>Website performance optimization is an ongoing process that requires continuous attention. By implementing these strategies, you can significantly improve user experience, boost search rankings, and increase conversion rates.</p>
        `
    },
    5: {
        title: "Future of Digital Marketing in 2024",
        author: "Admin",
        date: "20 March 2024",
        readTime: "7 min read",
        views: "2,345 views",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80",
        tags: ["SEO", "Marketing"],
        leadText: "The digital landscape is constantly evolving, and staying ahead of the curve is essential for success. Discover the trends and strategies that will shape the future of digital marketing in 2024 and beyond.",
        content: `
            <p>In today's fast-paced digital world, staying ahead of the competition requires a proactive approach to marketing. The future of digital marketing is not just about adapting to new technologies but about anticipating trends and leveraging them to drive business growth.</p>

            <h2>Artificial Intelligence and Machine Learning</h2>
            <p>AI and ML are revolutionizing how marketers understand and engage with their audiences. From predictive analytics to personalized content recommendations, AI-powered tools are enabling marketers to create more targeted and effective campaigns.</p>

            <p>Machine learning algorithms can analyze vast amounts of data to identify patterns, predict customer behavior, and optimize marketing strategies in real-time. This allows businesses to deliver more relevant messages to the right people at the right time, significantly improving conversion rates.</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&q=80" alt="AI in Marketing">
            </div>

            <h2>Voice Search and SEO</h2>
            <p>With the growing popularity of voice assistants like Alexa, Google Assistant, and Siri, voice search optimization is becoming increasingly important. Marketers need to adapt their SEO strategies to accommodate natural language queries and conversational search patterns.</p>

            <p>This shift means focusing on long-tail keywords, question-based content, and featured snippets that provide direct answers to user queries. Voice search optimization can help businesses capture a new segment of search traffic and improve their overall visibility.</p>

            <h2>Video Marketing Dominance</h2>
            <p>Video content continues to dominate the digital marketing landscape. Short-form videos on platforms like TikTok, Instagram Reels, and YouTube Shorts are particularly effective for engaging younger audiences and building brand awareness.</p>

            <ul class="article-list">
                <li><strong>Live Streaming:</strong> Real-time engagement through live video sessions</li>
                <li><strong>Interactive Videos:</strong> Engaging audiences with shoppable and interactive elements</li>
                <li><strong>Video SEO:</strong> Optimizing video content for search engine visibility</li>
                <li><strong>Personalized Video:</strong> Creating customized video experiences for individual users</li>
            </ul>

                        <h2>Sustainability and Social Responsibility</h2>
            <p>Modern consumers are increasingly conscious of the environmental and social impact of the brands they support. Companies that demonstrate genuine commitment to sustainability and social responsibility can build stronger connections with their audience and create lasting brand loyalty.</p>

            <p>This includes transparent communication about environmental practices, support for social causes, and ethical business operations. Brands that align their values with their marketing messages can create meaningful relationships that go beyond transactions.</p>

            <h2>Conclusion</h2>
            <p>The future of digital marketing is dynamic and constantly evolving. To stay competitive, businesses must embrace new technologies, adapt to changing consumer behaviors, and maintain a focus on delivering genuine value. By leveraging AI, optimizing for voice search, embracing video content, and demonstrating social responsibility, you can position your brand for success in 2024 and beyond.</p>

            <blockquote class="article-quote">
                "The future belongs to those who understand that marketing is not about selling products, but about creating value and building relationships."
                <cite>— Seth Godin</cite>
            </blockquote>
        `
    },
    6: {
        title: "Building Modern Web Applications",
        author: "Developer",
        date: "22 March 2020",
        readTime: "8 min read",
        views: "1,890 views",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop&q=80",
        tags: ["Development", "Web"],
        leadText: "Learn about modern frameworks and best practices for building scalable web applications that deliver exceptional user experiences and drive business growth.",
        content: `
            <p>In today's fast-paced digital world, building modern web applications requires more than just writing code. It demands a deep understanding of user needs, modern frameworks, scalable architecture, and best practices that ensure both performance and maintainability.</p>

            <h2>Choosing the Right Framework</h2>
            <p>The first step in building a modern web application is selecting the appropriate framework. Popular choices like React, Vue.js, and Angular each have their strengths and are suited for different types of projects.</p>

            <p>React, with its component-based architecture and large ecosystem, is ideal for building interactive user interfaces. Vue.js offers a gentle learning curve and excellent documentation, making it perfect for rapid development. Angular provides a complete framework solution with built-in tools for large-scale enterprise applications.</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop&q=80" alt="Web Development">
            </div>

            <h2>Architecture and Scalability</h2>
            <p>Building applications that can scale requires careful planning of your application architecture. Modern applications should follow principles like separation of concerns, modular design, and microservices architecture when appropriate.</p>

            <ul class="article-list">
                <li><strong>Component-Based Architecture:</strong> Break down applications into reusable, maintainable components</li>
                <li><strong>State Management:</strong> Implement proper state management patterns (Redux, Vuex, Context API)</li>
                <li><strong>API Design:</strong> Create RESTful or GraphQL APIs that are intuitive and efficient</li>
                <li><strong>Database Optimization:</strong> Choose the right database solution and optimize queries for performance</li>
                <li><strong>Cloud Infrastructure:</strong> Leverage cloud services for scalability and reliability</li>
            </ul>

            <h2>Performance Optimization</h2>
            <p>Modern web applications must be fast and responsive. Users expect instant loading times and smooth interactions. Key performance optimization strategies include:</p>

            <p>Code splitting and lazy loading allow you to load only the necessary code for each page, reducing initial load times. Implementing caching strategies, both on the client and server side, can dramatically improve response times. Image optimization and using modern formats like WebP can reduce bandwidth usage while maintaining quality.</p>

            <h2>Security Best Practices</h2>
            <p>Security should be a priority from the start of development. Implement authentication and authorization properly, use HTTPS for all communications, validate and sanitize user inputs, and keep dependencies up to date to avoid vulnerabilities.</p>

            <h2>Testing and Quality Assurance</h2>
            <p>A comprehensive testing strategy is essential for building reliable applications. Unit tests verify individual components, integration tests ensure different parts work together, and end-to-end tests validate the complete user experience.</p>

            <div class="content-image">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&q=80" alt="Testing">
            </div>

            <h2>Continuous Integration and Deployment</h2>
            <p>Modern development workflows include CI/CD pipelines that automate testing, building, and deployment processes. This ensures code quality, reduces manual errors, and enables rapid iteration and updates.</p>

            <h2>Conclusion</h2>
            <p>Building modern web applications is a complex process that requires expertise in multiple areas. By choosing the right frameworks, designing scalable architectures, optimizing for performance, prioritizing security, and implementing proper testing and deployment processes, you can create applications that not only meet current needs but are also prepared for future growth and evolution.</p>

            <blockquote class="article-quote">
                "The best code is not just code that works, but code that is maintainable, scalable, and understandable."
                <cite>— Unknown Developer</cite>
            </blockquote>
        `
    }
};

// Load blog post dynamically based on URL parameter
document.addEventListener('DOMContentLoaded', function() {
    // Get post ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    // If no ID is provided, default to post 1
    const currentPostId = postId ? parseInt(postId, 10) : 1;
    
    // Validate that postId is a valid number and exists
    if (isNaN(currentPostId) || !blogPosts[currentPostId]) {
        console.error(`Blog post with ID ${currentPostId} not found. Available IDs:`, Object.keys(blogPosts));
        // Fallback to post 1 if invalid ID
        const fallbackId = 1;
        window.location.href = `blog-details.html?id=${fallbackId}`;
        return;
    }
    
    const post = blogPosts[currentPostId];
    
    if (!post) {
        console.error(`Blog post data is missing for ID ${currentPostId}`);
        return;
    }
    
    console.log(`Loading blog post ID: ${currentPostId}, Title: ${post.title}`);
    
    // Update page title
    document.title = `${post.title} - Webura`;
    
    // Update featured image
    const featuredImage = document.querySelector('.featured-image img');
    if (featuredImage) {
        featuredImage.src = post.image;
        featuredImage.alt = post.title;
    }
    
    // Update article tags
    const articleTags = document.querySelector('.article-tags');
    if (articleTags) {
        articleTags.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    }
    
    // Update article title
    const articleTitle = document.querySelector('.article-title');
    if (articleTitle) {
        articleTitle.textContent = post.title;
    }
    
    // Update article meta
    const metaItems = document.querySelectorAll('.meta-item');
    if (metaItems.length >= 4) {
        metaItems[0].querySelector('span').textContent = post.author;
        metaItems[1].querySelector('span').textContent = post.date;
        metaItems[2].querySelector('span').textContent = post.readTime;
        metaItems[3].querySelector('span').textContent = post.views;
    }
    
    // Update article body content
    const articleBody = document.querySelector('.article-body');
    if (articleBody) {
        // Clear all existing content first (including any existing lead-text)
        articleBody.innerHTML = '';
        
        // Add lead-text
        const leadTextElement = document.createElement('p');
        leadTextElement.className = 'lead-text';
        leadTextElement.textContent = post.leadText;
        articleBody.appendChild(leadTextElement);
        
        // Insert the new content
        articleBody.insertAdjacentHTML('beforeend', post.content);
    }
    
    // Update author info
    const authorName = document.querySelector('.author-details h3');
    if (authorName) {
        authorName.textContent = post.author;
    }
    
    // Update related posts - show other posts (exclude current one)
    const relatedPosts = document.querySelectorAll('.related-card');
    const otherPostIds = Object.keys(blogPosts)
        .map(id => parseInt(id))
        .filter(id => id !== currentPostId)
        .slice(0, 3);
    
    relatedPosts.forEach((card, index) => {
        if (otherPostIds[index]) {
            const relatedPostId = otherPostIds[index];
            const postData = blogPosts[relatedPostId];
            
            if (!postData) return;
            
            // Update image
            const img = card.querySelector('.related-image img');
            if (img) {
                img.src = postData.image;
                img.alt = postData.title;
            }
            
            // Update date
            const dateSpan = card.querySelector('.related-meta span');
            if (dateSpan) {
                dateSpan.innerHTML = `<i class="fa-solid fa-calendar"></i> ${postData.date}`;
            }
            
            // Update title
            const title = card.querySelector('h3');
            if (title) {
                title.textContent = postData.title;
            }
            
            // Update link
            const link = card.querySelector('.related-link');
            if (link) {
                link.href = `blog-details.html?id=${relatedPostId}`;
            }
        }
    });
    
    // Initialize other functionality
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Share buttons functionality
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = window.location.href;
            const title = document.querySelector('.article-title').textContent;
            const text = document.querySelector('.lead-text').textContent;
            
            if (this.classList.contains('facebook')) {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('twitter')) {
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('linkedin')) {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
            } else if (this.classList.contains('whatsapp')) {
                window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
            }
        });
    });

    // Add reading progress indicator
    const readingProgress = document.createElement('div');
    readingProgress.className = 'reading-progress';
    readingProgress.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(readingProgress);

    const progressBar = readingProgress.querySelector('.reading-progress-bar');
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const progress = (scrollTop / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });

    // Add animation on scroll for related cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.related-card, .metric-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Copy link functionality (optional)
    const copyLinkBtn = document.createElement('button');
    copyLinkBtn.className = 'copy-link-btn';
    copyLinkBtn.innerHTML = '<i class="fa-solid fa-link"></i> Copy Link';
    copyLinkBtn.title = 'Copy article link';
    
    const socialShare = document.querySelector('.social-share');
    if (socialShare) {
        socialShare.appendChild(copyLinkBtn);
        
        copyLinkBtn.addEventListener('click', () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                copyLinkBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                copyLinkBtn.style.background = 'rgba(37, 211, 102, 0.2)';
                copyLinkBtn.style.color = '#25d366';
                
                setTimeout(() => {
                    copyLinkBtn.innerHTML = '<i class="fa-solid fa-link"></i> Copy Link';
                    copyLinkBtn.style.background = '';
                    copyLinkBtn.style.color = '';
                }, 2000);
            });
        });
    }
});

