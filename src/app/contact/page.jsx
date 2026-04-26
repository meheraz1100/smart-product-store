export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-500">
          Have something to discuss? Reach out anytime.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-md">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get in touch
          </h2>
          <p className="text-gray-500">
            We’re open to ideas, questions, or collaborations. Feel free to contact us.
          </p>

          <div className="space-y-3 text-gray-600">
            <p>📍 Feni, Bangladesh</p>
            <p>📧 support@example.com</p>
            <p>📞 +880 1234 567 890</p>
          </div>
        </div>

        {/* Right Side (Static Form) */}
        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}