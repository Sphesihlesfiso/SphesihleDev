import ServiceCard from "./ServiceCard";
import { ServicesArray } from "../../assets/Services";
export const Services =()=>{
    return (
        <div className="py-24 px-4 bg-background">
            <div className="mb-16">
                <h2 className="text-4xl text-center font-bold mb-4 bg-gradient-primary-secondary bg-clip-text text-transparent md:text-5xl ">
                    Our Services
                </h2>
                <p className="text-lg text-center text-muted-foreground mx-auto mb-16 max-w-2xl">Comprehensive software development solutions tailored to your business needs</p>
                <div className="grid grid-cols-1 gap-8 max-w-5xl m-auto md:grid-cols-2">
                    {ServicesArray.map((service,index)=> <ServiceCard icon={service.icon} title={service.title} description={service.description} key={index}/>)}
                </div>
            </div>
        </div>
    );
}