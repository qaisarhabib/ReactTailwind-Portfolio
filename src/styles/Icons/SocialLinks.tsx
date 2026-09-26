const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <a
        href="mailto:qaiserhabib6@gmail.com"
        aria-label="Email Qaiser"
        className="text-xl transition hover:-translate-y-1 hover:text-zinc-500"
      >
        <i className="fas fa-envelope" />
      </a>
      <a
        href="https://github.com/qaisarhabib"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Qaiser's GitHub"
        className="text-xl transition hover:-translate-y-1 hover:text-zinc-500"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/qaisarhabib/"
        target="_blank"
        rel="noreferrer"
        aria-label="Qaiser's LinkedIn"
        className="text-xl transition hover:-translate-y-1 hover:text-zinc-500"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://wa.me/923022630092"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Qaiser"
        className="text-xl transition hover:-translate-y-1 hover:text-zinc-500"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a
        href="tel:03022630092"
        aria-label="Call Qaiser"
        className="text-xl transition hover:-translate-y-1 hover:text-zinc-500"
      >
        <i className="fas fa-phone" />
      </a>
    </div>
  );
};

export default SocialLinks;
