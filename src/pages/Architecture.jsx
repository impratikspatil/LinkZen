import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Architecture() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 mb-6">
            System Design & Technical Overview
          </span>
          <h1 className="text-6xl font-bold mb-4">
            LinkZen{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
            Full-stack URL shortener built with React, Spring Boot, Redis, and MongoDB.
            Covers JWT auth, click analytics, QR generation, Redis caching, and production deployment.
          </p>
        </div>

        {/* HLD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-2">High-Level Design</h2>
          <p className="text-gray-400 mb-10">Four-layer system with caching, analytics tracking, and stateless JWT auth</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
            {[
              { label: "React + Vite", sub: "Vercel · SPA", color: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/30" },
              { label: "Spring Boot", sub: "Render · REST APIs", color: "from-teal-500/20 to-teal-500/5", border: "border-teal-500/30" },
              { label: "Redis Cloud", sub: "URL cache · ~1ms", color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/30" },
              { label: "MongoDB Atlas", sub: "URLs · Clicks · Users", color: "from-green-500/20 to-green-500/5", border: "border-green-500/30" },
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-b ${item.color} border ${item.border} rounded-2xl p-6`}>
                <p className="font-semibold text-white mb-1">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Flow arrows */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 flex-wrap">
            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">User</span>
            <span>→</span>
            <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20">React</span>
            <span>→ JWT →</span>
            <span className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20">Spring Boot</span>
            <span>→ cache →</span>
            <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20">Redis</span>
            <span>→ persist →</span>
            <span className="px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20">MongoDB</span>
          </div>
        </div>

        {/* Redirect Lifecycle */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-2">Redirect Request Lifecycle</h2>
          <p className="text-gray-400 mb-8">What happens when someone clicks a short link</p>

          <div className="space-y-4">
            {[
              { step: "01", title: "Request hits RedirectController", desc: "User clicks linkzen-backend-2.onrender.com/google → Spring Boot receives GET /{shortCode}" },
              { step: "02", title: "Redis cache checked first", desc: "RedisTemplate looks up shortCode — cache hit returns original URL in ~1ms, skips MongoDB entirely" },
              { step: "03", title: "Cache miss → MongoDB query", desc: "If not in Redis, UrlRepository.findByShortCode() queries MongoDB. Result saved back to Redis for next time" },
              { step: "04", title: "Expiry validation", desc: "If expiresAt is set and is in the past, UrlExpiredException thrown → GlobalExceptionHandler redirects to /expired-link page" },
              { step: "05", title: "Click analytics saved", desc: "UrlClick record persisted: IP address, browser, OS, device type, country (via ip-api.com), referrer, timestamp" },
              { step: "06", title: "Count incremented + redirect", desc: "clickCount++ saved in MongoDB and Redis cache updated. HTTP 302 redirect fires to original URL" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-black/20 rounded-2xl p-5">
                <span className="text-2xl font-bold text-purple-400/60 min-w-[40px]">{item.step}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JWT Auth Flow */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-2">JWT Authentication Flow</h2>
          <p className="text-gray-400 mb-8">Stateless — no session stored on server</p>

          <div className="space-y-4">
            {[
              { step: "01", title: "Credentials POST", desc: "User POSTs email + password → AuthController → AuthService" },
              { step: "02", title: "BCrypt password check", desc: "passwordEncoder.matches() compares submitted password with stored BCrypt hash in MongoDB Users collection" },
              { step: "03", title: "JWT generated", desc: "JwtService.generateToken() creates signed JWT with email as subject, 10-day expiry using HMAC-SHA256" },
              { step: "04", title: "Token stored on client", desc: "Frontend stores token in localStorage. Every subsequent request sends Authorization: Bearer <token>" },
              { step: "05", title: "JwtAuthenticationFilter validates", desc: "Intercepts every request, extracts + validates token, sets Authentication in Spring SecurityContext" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 bg-black/20 rounded-2xl p-5">
                <span className="text-2xl font-bold text-blue-400/60 min-w-[40px]">{item.step}</span>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REST API Reference */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-2">REST API Reference</h2>
          <p className="text-gray-400 mb-8">All endpoints — secured unless marked public</p>

          {/* Auth */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 font-mono mb-3">/api/v1/auth · public</p>
            <div className="space-y-2">
              {[
                { method: "POST", path: "/signup", desc: "Register new user", color: "bg-blue-500/20 text-blue-300" },
                { method: "POST", path: "/login", desc: "Login, returns JWT token", color: "bg-blue-500/20 text-blue-300" },
              ].map((api, i) => (
                <div key={i} className="flex items-center gap-4 bg-black/20 rounded-xl px-5 py-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg min-w-[48px] text-center ${api.color}`}>{api.method}</span>
                  <span className="font-mono text-sm text-white flex-1">{api.path}</span>
                  <span className="text-gray-400 text-sm">{api.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* URL */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 font-mono mb-3">/api/v1/url · 🔒 JWT required</p>
            <div className="space-y-2">
              {[
                { method: "POST", path: "/shorten", desc: "Create short URL", color: "bg-blue-500/20 text-blue-300" },
                { method: "GET", path: "/all", desc: "Get all URLs for logged-in user", color: "bg-green-500/20 text-green-300" },
                { method: "GET", path: "/stats/:shortCode", desc: "Get URL stats", color: "bg-green-500/20 text-green-300" },
                { method: "PUT", path: "/:shortCode/expiry", desc: "Update expiry days", color: "bg-amber-500/20 text-amber-300" },
                { method: "DELETE", path: "/:shortCode", desc: "Delete URL", color: "bg-red-500/20 text-red-300" },
                { method: "GET", path: "/qr/:shortCode", desc: "Generate QR code PNG · public", color: "bg-green-500/20 text-green-300" },
                { method: "GET", path: "/analytics", desc: "Dashboard analytics for user", color: "bg-green-500/20 text-green-300" },
                { method: "GET", path: "/analytics/:shortCode", desc: "Per-URL analytics", color: "bg-green-500/20 text-green-300" },
              ].map((api, i) => (
                <div key={i} className="flex items-center gap-4 bg-black/20 rounded-xl px-5 py-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg min-w-[48px] text-center ${api.color}`}>{api.method}</span>
                  <span className="font-mono text-sm text-white flex-1">{api.path}</span>
                  <span className="text-gray-400 text-sm">{api.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Redirect */}
          <div>
            <p className="text-sm text-gray-500 font-mono mb-3">/ · public redirect</p>
            <div className="flex items-center gap-4 bg-black/20 rounded-xl px-5 py-3">
              <span className="text-xs font-bold px-2 py-1 rounded-lg min-w-[48px] text-center bg-green-500/20 text-green-300">GET</span>
              <span className="font-mono text-sm text-white flex-1">/:shortCode</span>
              <span className="text-gray-400 text-sm">Redirect + track click analytics</span>
            </div>
          </div>
        </div>

        {/* Data Models LLD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-2">Data Models (LLD)</h2>
          <p className="text-gray-400 mb-8">MongoDB collections — all using Lombok @Builder pattern</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Url", color: "border-purple-500/40", header: "bg-purple-500/20 text-purple-300",
                fields: [
                  { name: "id", type: "String @Id" },
                  { name: "originalUrl", type: "String" },
                  { name: "shortCode", type: "String" },
                  { name: "clickCount", type: "Long" },
                  { name: "userEmail", type: "String" },
                  { name: "createdAt", type: "LocalDateTime" },
                  { name: "expiresAt", type: "LocalDateTime" },
                  { name: "expired", type: "computed" },
                ]
              },
              {
                name: "UrlClick", color: "border-blue-500/40", header: "bg-blue-500/20 text-blue-300",
                fields: [
                  { name: "id", type: "String @Id" },
                  { name: "shortCode", type: "String" },
                  { name: "ipAddress", type: "String" },
                  { name: "browser", type: "String" },
                  { name: "deviceType", type: "String" },
                  { name: "operatingSystem", type: "String" },
                  { name: "country", type: "String" },
                  { name: "referer", type: "String" },
                  { name: "clickedAt", type: "LocalDateTime" },
                ]
              },
              {
                name: "User", color: "border-green-500/40", header: "bg-green-500/20 text-green-300",
                fields: [
                  { name: "id", type: "String @Id" },
                  { name: "name", type: "String" },
                  { name: "email", type: "String" },
                  { name: "password", type: "BCrypt hash" },
                ]
              },
            ].map((model) => (
              <div key={model.name} className={`border ${model.color} rounded-2xl overflow-hidden`}>
                <div className={`${model.header} px-5 py-3 font-semibold font-mono`}>{model.name}</div>
                {model.fields.map((f) => (
                  <div key={f.name} className="flex justify-between items-center px-5 py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-white">{f.name}</span>
                    <span className="text-xs text-gray-500 font-mono">{f.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Backend", tags: ["Java 17", "Spring Boot 3", "Spring Security", "JWT (jjwt 0.11)", "Spring Data MongoDB", "Redis", "ZXing QR", "Lombok", "Maven", "Springdoc OpenAPI 2.8", "Rate Limiting (Redis)"],
                color: "text-purple-300 bg-purple-500/10 border-purple-500/20"
              },
              {
                title: "Frontend", tags: ["React 18", "Vite", "Tailwind CSS", "React Router", "Lucide Icons", "react-hot-toast", "Fetch API"],
                color: "text-green-300 bg-green-500/10 border-green-500/20"
              },
              {
                title: "Infrastructure", tags: ["Render (backend)", "Vercel (frontend)", "MongoDB Atlas", "Redis Cloud", "Docker"],
                color: "text-blue-300 bg-blue-500/10 border-blue-500/20"
              },
              {
                title: "Design Patterns", tags: ["Controller → Service → Repository", "DTO pattern", "Global exception handler", "Stateless JWT", "Redis cache-aside", "Builder pattern"],
                color: "text-amber-300 bg-amber-500/10 border-amber-500/20"
              },
            ].map((section) => (
              <div key={section.title} className="bg-black/20 rounded-2xl p-6">
                <p className="font-semibold text-white mb-4">{section.title}</p>
                <div className="flex flex-wrap gap-2">
                  {section.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-lg border ${section.color}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment */}
        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Deployment Architecture</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Frontend", value: "Vercel", sub: "link-zen.vercel.app · CDN edge · auto-deploy on push" },
              { title: "Backend", value: "Render", sub: "linkzen-backend-2.onrender.com · Dockerized Spring Boot" },
              { title: "Data Layer", value: "MongoDB Atlas + Redis Cloud", sub: "Env vars via Render secrets · TLS enabled" },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-gray-400 text-sm mb-2">{item.title}</p>
                <p className="font-bold text-white text-lg mb-2">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 mb-10">
          <h2 className="text-3xl font-bold mb-8">Additional Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Rate Limiting", desc: "100 requests per IP per minute using Redis TTL counter. Returns 429 Too Many Requests when exceeded. Swagger and redirect endpoints excluded.", color: "border-red-500/30" },
              { title: "Swagger / OpenAPI", desc: "Full API documentation at /swagger-ui/index.html. JWT Bearer auth integrated — test all secured endpoints directly from browser.", color: "border-blue-500/30" },
              { title: "QR Code Generation", desc: "ZXing library generates 300x300 PNG QR codes for any short URL. Shareable via Web Share API directly from dashboard.", color: "border-purple-500/30" },
              { title: "IP Geolocation", desc: "Country detected per click via ip-api.com. Stored in UrlClick collection and shown in Country Traffic analytics chart.", color: "border-green-500/30" },
            ].map((item) => (
              <div key={item.title} className={`bg-black/20 border ${item.color} rounded-2xl p-6`}>
                <p className="font-semibold text-white mb-2">{item.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Architecture;