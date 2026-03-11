const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold tracking-tight">
          Growth<span className="text-gradient">Mail</span>
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GrowthMail. All rights reserved.
        </p>
        <a
          href="mailto:contact@growthmail.io"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          contact@growthmail.io
        </a>
      </div>
    </footer>
  );
};

export default Footer;
