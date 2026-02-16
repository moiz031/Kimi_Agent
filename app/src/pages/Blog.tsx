import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, TrendingUp, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Digital Marketing', 'SEO', 'Social Media', 'Web Design', 'Content Strategy', 'AI & Automation'];

  const featuredPost = {
    id: 1,
    image: '/portfolio-content.jpg',
    category: 'AI & Automation',
    title: 'The Future of AI in Digital Marketing: Trends to Watch in 2026',
    excerpt: 'Artificial intelligence is revolutionizing how businesses connect with their audiences. Discover the key AI trends that will shape digital marketing strategies this year.',
    author: 'James Anderson',
    date: 'January 15, 2026',
    readTime: '8 min read',
  };

  const posts = [
    {
      id: 2,
      image: '/portfolio-seo.jpg',
      category: 'SEO',
      title: '10 SEO Strategies That Will Dominate 2026',
      excerpt: 'Stay ahead of the competition with these proven SEO tactics that are driving results right now.',
      author: 'Robert Taylor',
      date: 'January 12, 2026',
      readTime: '6 min read',
    },
    {
      id: 3,
      image: '/portfolio-social.jpg',
      category: 'Social Media',
      title: 'Social Media Trends Every Marketer Needs to Know',
      excerpt: 'From short-form video to social commerce, explore the trends reshaping social media marketing.',
      author: 'Jennifer Lee',
      date: 'January 10, 2026',
      readTime: '5 min read',
    },
    {
      id: 4,
      image: '/portfolio-ecommerce.jpg',
      category: 'Web Design',
      title: 'Conversion Rate Optimization: A Complete Guide',
      excerpt: 'Learn how to turn more visitors into customers with these CRO best practices.',
      author: 'Lisa Wang',
      date: 'January 8, 2026',
      readTime: '10 min read',
    },
    {
      id: 5,
      image: '/niche-healthcare.jpg',
      category: 'Digital Marketing',
      title: 'Healthcare Marketing: Navigating Compliance and Growth',
      excerpt: 'How to effectively market healthcare services while maintaining HIPAA compliance.',
      author: 'Marcus Johnson',
      date: 'January 5, 2026',
      readTime: '7 min read',
    },
    {
      id: 6,
      image: '/niche-realestate.jpg',
      category: 'Content Strategy',
      title: 'Content Marketing for Real Estate: Building Trust Online',
      excerpt: 'Strategies for creating content that resonates with homebuyers and sellers.',
      author: 'Maria Garcia',
      date: 'January 3, 2026',
      readTime: '6 min read',
    },
    {
      id: 7,
      image: '/portfolio-branding.jpg',
      category: 'Web Design',
      title: 'The Psychology of Color in Branding',
      excerpt: 'How color choices influence customer perception and brand recognition.',
      author: 'Lisa Wang',
      date: 'December 28, 2025',
      readTime: '5 min read',
    },
    {
      id: 8,
      image: '/portfolio-saas.jpg',
      category: 'AI & Automation',
      title: 'Automating Your Marketing: Tools and Strategies',
      excerpt: 'Save time and improve results with marketing automation best practices.',
      author: 'Chris Brown',
      date: 'December 25, 2025',
      readTime: '8 min read',
    },
    {
      id: 9,
      image: '/niche-fitness.jpg',
      category: 'Social Media',
      title: 'Influencer Marketing: ROI and Best Practices',
      excerpt: 'How to partner with influencers to amplify your brand message effectively.',
      author: 'Jennifer Lee',
      date: 'December 22, 2025',
      readTime: '6 min read',
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Insights & <span className="text-[#426dd8]">Resources</span>
            </h1>
            <p className="text-lg text-[#3b4555]">
              Stay updated with the latest digital marketing trends, strategies, and insights 
              from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#426dd8] transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-[#426dd8] text-white'
                      : 'bg-gray-100 text-[#3b4555] hover:bg-[#426dd8]/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-[#ffc225]" />
              <span className="font-semibold text-[#0a1f44]">Featured Article</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 bg-[#f2f7ff] rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-[#426dd8] text-white text-xs font-semibold rounded-full mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-[#3b4555] mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#3b4555] mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center gap-2 text-[#426dd8] font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-[#0a1f44]">Latest Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-[#426dd8]" />
                    <span className="text-xs font-medium text-[#426dd8]">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-3 line-clamp-2 group-hover:text-[#426dd8] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#3b4555] text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#3b4555]">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#3b4555]">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#0a1f44]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest digital marketing insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#426dd8]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
