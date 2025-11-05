


export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="m-0 w-screen py-8 px-4">
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="flex items-center gap-2 ">
            <p className="text-lg font-bold bg-gradient-primary-secondary bg-clip-text text-transparent">AfriTech </p>
            <p className="text-sm text-muted-foreground ">Software Solutions</p>
            <p className="text-sm text-muted-foreground text-center">© {new Date().getFullYear()}  AfriTech Software Solutions. Cape Town, South Africa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
