export const Footer=() =>{
    return (
        <footer className="border-t border-border bg-[hsl(var(--muted)/0.3)]">
            <div className="max-w[1280px] mx-0 py-8 px-4" >
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="text-lg font-bold bg-[linear-gradient(to right,  hsl(var(--primary)), hsl(var(--secondary)))] text-transparent bg-clip-text">
                            AfriTech
                        </div>
                        <p className="text-sm  " style= {{color:"hsl(var(--muted-foreground))"}} >Software Solutions

                        </p>
                        <p className="text-sm text-center " style={{color:" hsl(var(--muted-foreground))"}}>© {new Date().getFullYear()} AfriTech Software Solutions. Cape Town, South Africa.</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}