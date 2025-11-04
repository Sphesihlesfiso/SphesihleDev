


export const Footer = () => {
  return (
    <footer className="border-t bg-">
      <div  className="flex flex-row place-items-center text-center justify-center px-2 py-4 gap-4" >
        <h1 className="text-lg font-bold " style={{ color: 'hsl(200, 95%, 35%)',backgroundColor: 'linear-gradient(to right, hsl(200, 95%, 35%), hsl(195, 85%, 50%))' }}
      >Afritech Software Solutions.</h1>
        <p className="">© {new Date().getFullYear()} AfriTech Software Solutions. Cape Town, South Africa.</p>
        
      </div>
    </footer>
  );
};
